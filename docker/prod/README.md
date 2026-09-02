# Production deployment (getbze.com)

The site ships as a self-contained nginx image built by CI on every push to
`main` and released on the server with a zero-downtime blue/green flip.

## How it fits together

- **CI** (`.github/workflows/docker-publish.yml`) builds
  `ghcr.io/bze-alphateam/getbze:<tag>` where `<tag>` is the first 8 chars of
  the commit sha, and comments the exact deploy/rollback commands on the
  merged PR. The public API URLs (`/api` aggregator, blockchain REST) are
  baked into the bundle at build time via build args.
- **Server layout**: `~/apps/getbze.com/` holds `compose.yml`, `release.sh`,
  `.env` (just `IMAGE_TAG=`) and `releases.log`. The deploy user needs docker
  access, GHCR pull access, write access to `/etc/nginx/vibast-upstreams/` and
  passwordless sudo for `nginx -t` / `nginx -s reload` only.
- **Blue/green**: `web-blue` binds `127.0.0.1:8611`, `web-green` `:8612`. The
  front nginx proxies `getbze.com` to whichever port
  `/etc/nginx/vibast-upstreams/getbze.com.conf` names. `release.sh <tag>`
  starts the idle colour on the new image, waits for its healthcheck, rewrites
  the upstream file, reloads nginx, then stops the old colour.

## Releasing

```bash
cd ~/apps/getbze.com
./release.sh <tag>        # tag from the CI comment on the merged PR
```

Rollback is the same command with the previously released tag — see
`releases.log`.

## First-time setup on a server

1. Copy `compose.yml` and `release.sh` (chmod +x) into `~/apps/getbze.com/`.
2. Run the first release (`./release.sh <tag>`) **before** enabling the site's
   vhost — the first run creates the upstream file the vhost includes; nginx
   won't start the vhost without it. Do not pre-seed the upstream file by hand:
   the script reads it to decide which colour is live.
3. Enable the front-nginx vhost (TLS termination + `location /api` proxy to
   the aggregator) and reload nginx.

The GHCR package must be readable by the deploy user: either keep the package
public, or `docker login ghcr.io` with a token that has `read:packages`.
