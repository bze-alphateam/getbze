# Production image: build the CRA site, serve it with nginx.
# Built by CI (.github/workflows/docker-publish.yml) on every push to main.
#
# Build-time env: CRA inlines the REACT_APP_* values of a `.env` file into the
# bundle. That file is .dockerignore'd and comes in as the BuildKit secret
# `build_env`, mounted as /app/.env for the build step only — it is never in
# the build context, an image layer or the build log. Locally:
#   docker build -f docker/prod/Dockerfile --secret id=build_env,src=.env.dist .
# CI mounts the production values from the private deploy repo instead.
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN --mount=type=secret,id=build_env,target=/app/.env,required=true \
    yarn build

FROM nginx:1.27-alpine
COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
# only the built bundle crosses over — .env stays in the build stage
COPY --from=build /app/build /usr/share/nginx/html
