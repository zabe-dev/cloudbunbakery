# Cloud Bun Bakery LLC

A static Next.js bakery website with a searchable menu, a homepage favorites menu, and direct Facebook and Instagram contact links. Orders are arranged directly with the bakery. No backend, payment processing, customer accounts, API credentials, or browser cart storage.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Build static files

```sh
npm run build
npm start
```

The build generates `out/`, which can be served by a static host. `npm start` serves these files locally on port 3000. No Node application server is needed in production.

## Content and links

- Menu descriptions, prices, pack sizes, and toppings: `features/catalog/data/products.ts`.
- Facebook, Instagram, and the eventual public domain: `lib/site.ts`.
- Logo and social cards: optimized 256px assets in `public/`.
- Photos: optimized, descriptively named WebP assets in `public/images/`, selected from `media/`. Originals are preserved in `media/`; published assets are resized to their page purpose. Video close-ups are served as stills to avoid autoplay downloads. Related flavors share reference imagery; products without a matching photo retain menu imagery.
- Page layouts and scoped CSS Modules: `features/`.
- Formatting helpers: `helpers/`.
- Base resets and theme tokens only: `app/globals.css`.

The menu lives at `/menu/`. Individual product pages are removed; descriptions, pack sizes, prices, and toppings are available directly in the homepage favorites menu and menu cards. Menu prices are indicative; customers confirm current pricing, availability, payment, and pickup arrangements by messaging the bakery.

## Search visibility

Page-specific titles, descriptions, social metadata, bakery structured data, robots.txt, and a sitemap generator are included. The homepage favorites and the unfiltered menu are present in the generated HTML.

Before publishing, set `site.url` in `lib/site.ts` to the final HTTPS domain, without a path, and rebuild. Canonical URLs, absolute social image URLs, and sitemap entries are generated from that domain. Until it is set, these absolute URLs are omitted rather than pointing Google at a made-up address.

Publish `out/` on a publicly accessible domain, then verify ownership in Google Search Console and submit `/sitemap.xml`. A localhost website cannot be indexed by Google, and indexing/rankings are not guaranteed. Add a confirmed business location and contact information later if the owner wants local search coverage.

## Checks

```sh
npm run lint
npm run build
npm exec playwright test
```

Browser checks run against the static build on port 3100 using installed Google Chrome. They verify desktop/mobile menu navigation, filtering, inline bake details, the exact social URLs, removed commerce routes, and static search metadata.
