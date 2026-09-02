# Production image: build the CRA site, serve it with nginx.
# Built by CI (.github/workflows/docker-publish.yml) on every push to main.
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

# CRA bakes REACT_APP_* vars into the bundle at build time.
ARG REACT_APP_AGGREGATOR_API_HOST
ARG REACT_APP_BLOCKCHAIN_REST_API_HOST
ENV REACT_APP_AGGREGATOR_API_HOST=${REACT_APP_AGGREGATOR_API_HOST} \
    REACT_APP_BLOCKCHAIN_REST_API_HOST=${REACT_APP_BLOCKCHAIN_REST_API_HOST}

RUN yarn build

FROM nginx:1.27-alpine
COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
