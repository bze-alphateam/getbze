# Production image: build the Next.js static export, serve it with nginx.
# Built by CI (.github/workflows/docker-publish.yml) on every push to main.
#
# Build-time env: the public endpoint URLs are inlined into the bundle from a `.env`
# file (NEXT_PUBLIC_*; the older REACT_APP_* names are still read, see next.config.ts).
# That file is .dockerignore'd and comes in as the BuildKit secret `build_env`, mounted
# as /app/.env for the build step only — it is never in the build context, an image
# layer or the build log. Locally:
#   docker build -f docker/prod/Dockerfile --secret id=build_env,src=.env.dist .
# CI mounts the production values from the private deploy repo instead.
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN --mount=type=secret,id=build_env,target=/app/.env,required=true \
    NEXT_TELEMETRY_DISABLED=1 yarn build

FROM nginx:1.27-alpine
COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
# only the static export crosses over — .env stays in the build stage
COPY --from=build /app/out /usr/share/nginx/html
