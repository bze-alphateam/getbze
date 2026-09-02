#!/usr/bin/env bash
set -euo pipefail
# Zero-downtime blue/green release. Run as the deploy user from the app dir on
# the server.
# usage: ./release.sh 3f2a91c1   (a commit short-SHA on main, image pushed to GHCR by CI)
# Rollback = the same command with the previous SHA (see releases.log).

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
UPSTREAM=/etc/nginx/vibast-upstreams/getbze.com.conf
TAG="${1:?usage: release.sh <image-tag>}"
cd "$APP_DIR"

# 1. which colour is live?
if [[ ! -s "$UPSTREAM" ]]; then
  # first ever release: nothing live yet, deploy blue and create the upstream
  active_port=""
  old=""; new=blue; new_port=8611
else
  active_port=$(grep -oE '861[12]' "$UPSTREAM")
  if [[ "$active_port" == "8611" ]]; then
    old=blue;  new=green; new_port=8612
  else
    old=green; new=blue;  new_port=8611
  fi
fi
echo "==> live: ${old:-nothing} (${active_port:-—}) — deploying $TAG to $new (:$new_port)"

# 2. start the target colour on the new tag
IMAGE_TAG="$TAG" docker compose --profile "$new" pull "web-$new"
IMAGE_TAG="$TAG" docker compose --profile "$new" up -d "web-$new"

# 3. gate on health (container healthcheck + explicit smoke probe)
echo "==> waiting for web-$new to become healthy"
ok=""
for _ in $(seq 1 20); do
  status=$(docker inspect -f '{{.State.Health.Status}}' "getbze-web-$new-1" 2>/dev/null || echo starting)
  if [[ "$status" == "healthy" ]] \
     && curl -fsS -o /dev/null "http://127.0.0.1:$new_port/"; then
    ok=1; break
  fi
  sleep 3
done
if [[ -z "$ok" ]]; then
  echo "!! web-$new never became healthy — aborting, ${old:-nothing} stays live" >&2
  docker compose --profile "$new" stop "web-$new" || true
  exit 1
fi

# 4. flip traffic (graceful — no dropped requests)
echo "upstream getbze_backend { server 127.0.0.1:$new_port; }" > "$UPSTREAM"
sudo /usr/sbin/nginx -t
sudo /usr/sbin/nginx -s reload

# 5. retire the old colour, persist the released tag
if [[ -n "$old" ]]; then
  sleep 10
  docker compose --profile "$old" stop "web-$old" || true
fi
if grep -q '^IMAGE_TAG=' .env 2>/dev/null; then
  sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=$TAG/" .env
else
  echo "IMAGE_TAG=$TAG" >> .env
fi
# release history — rollback = ./release.sh with the previous tag in this log
echo "$(date -u '+%Y-%m-%d %H:%M:%S') UTC  $TAG  ($new)" >> releases.log
echo "==> done: $TAG live on $new"
