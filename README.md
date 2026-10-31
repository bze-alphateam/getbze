# getbze.com

The BeeZee website: a Next.js (App Router) static export, styled with the shared
Hive Glow theme in its `site` colour.

## Layout

- `src/app/` — one folder per route; `not-found.tsx` becomes `404.html`.
- `src/components/pages/` — each page's content, ported from the approved design boards.
- `src/styles/pages/` — each page's styles, scoped to `.pg-<page>` so pages never clash.
- `src/styles/hive-glow-tokens.css` — a copy of `beezee/apps/theme/tokens.css` from
  [Official-BZEdge-Graphics](https://github.com/bze-alphateam/Official-BZEdge-Graphics). Change it there, then copy it here.
- `src/components/live/` — the live parts (chain numbers, raffle, fee-coin minimum, Medium feed)
  with their loading and failed states. They get their data from the `LiveClient` in
  `src/lib/live-client.ts`, provided once in the layout.
- `src/data/roadmap.ts` — the public roadmap, used by Home and `/roadmap`.
- `src/data/links.ts` — links the design left open.

## Scripts

```
yarn install
yarn dev      # local dev server
yarn build    # static export into out/
yarn lint     # eslint + tsc
yarn test     # vitest
yarn test:export  # after a build: every exported page's metadata and the sitemap
```

Public endpoints come from `NEXT_PUBLIC_BLOCKCHAIN_REST_API_HOST` and
`NEXT_PUBLIC_AGGREGATOR_API_HOST` (see `.env.dist`). The production image is built by
`docker/prod/Dockerfile` and served by nginx.

Each page's title, description and share tags live in `src/lib/seo.ts`; the sitemap and
robots.txt are generated from the same table.
