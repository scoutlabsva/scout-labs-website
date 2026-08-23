# Scout Labs website

Marketing homepage for Scout Labs — a Next.js (App Router) + TypeScript +
Tailwind CSS v4 site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` (production build), `npm run start` (serve
the production build), `npm run lint` (ESLint).

## Deployment

The site is a static export (`output: "export"` in `next.config.ts`) served
from Cloudflare Workers via Workers Static Assets — there's no server-side
Next.js runtime in use (no API routes, server actions, or middleware), so a
static host is all this needs.

- `npm run preview` — builds and serves the site locally through Wrangler
  (`wrangler dev`), close to how it behaves in production.
- `npm run deploy` — builds and publishes to Cloudflare
  (`wrangler deploy`), updating the live `getscoutlabs.com` site.

Configuration lives in `wrangler.jsonc` (the Worker name, compatibility
date, and the `out/` assets directory). The production custom domain
(`getscoutlabs.com`, with `www` redirecting to it) is attached at the
Cloudflare account level, not in this repo — see the Cloudflare dashboard's
Workers & Pages → `scout-labs-website` → Settings → Domains & Routes.

Deploying requires being logged in via `npx wrangler login` once per
machine; credentials are stored outside the repo (`~/.wrangler`), never
committed.

## Structure

```
src/app/            Routes, root layout, metadata, favicon (icon.svg)
src/components/      One component per homepage section, plus small shared
                     pieces (SectionIntro, StepNode, ScoutMark, ScoutWordmark,
                     ScoutDiamond, ScoutChevron)
src/lib/content.ts   All page copy, as typed constants
src/lib/scout-colors.ts  Shared Scout Mark facet colors
public/logo/         Approved production brand assets (see logo-usage.md)
design-reference/    Internal design references — not served, not production
                     assets (typography board, logo usage notes)
```

## Design system

Typography, color, spacing, and component tokens (buttons, headings, focus
states) live in `src/app/globals.css` under `@layer components`. Reuse those
classes (`.eyebrow`, `.heading-*`, `.btn*`, `.step-node*`, etc.) rather than
repeating raw Tailwind utility strings for anything that already has one.

Brand colors: a deep navy (`--accent`) is the primary interactive color;
Scout Sage (`--scout-green`) is used semantically for destination points,
optimized states, and the "Labs" wordmark — not for backgrounds, body text,
or navigation. See the comments in `globals.css` for the full rationale.

## Brand assets

The approved Scout Mark lives in `public/logo/`. `design-reference/logo-usage.md`
documents which file to use where. Do not alter the mark's geometry; add a
new purpose-named file if a genuinely new variant is needed.
