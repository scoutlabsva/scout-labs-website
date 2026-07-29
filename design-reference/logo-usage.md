# Scout Labs — logo asset guide

Internal reference for the approved Scout Mark files in `public/logo/`. Not a
production asset itself — this file documents the assets, it isn't one.

The outer Scout Mark shape is fixed. The inner diamond is built from four
triangular facets to create restrained dimensionality.

## Files

- `scout-mark.svg` — fixed sage palette with four explicit facet colors. Use
  this for the primary branded logo.
- `scout-mark-monochrome.svg` — uses `currentColor`, with facet depth produced
  by opacity instead of distinct colors. Use when CSS color control matters
  more than exact brand color, or for single-color reproduction (printing,
  embossing, engraving, very small sizes).
- `scout-labs-lockup-horizontal.svg` — full editable horizontal lockup (mark +
  wordmark + tagline). Not currently used on the site; the header and footer
  render an equivalent two-tone wordmark with `ScoutMark` directly in code
  (`src/components/scout-wordmark.tsx`, `src/components/scout-mark.tsx`) so
  sizing and spacing stay in CSS. Kept for contexts that need the static
  lockup as a single file — e.g. email signatures, partner requests, print.

## Favicon

The favicon (mark on a midnight-blue rounded square) lives at
`src/app/icon.svg` — Next.js's file convention picks it up automatically.
There is no separate favicon file in `public/logo/`; keep the favicon defined
in exactly one place rather than duplicating it here.

## Do not

Do not alter the approved mark geometry. If a new variant is genuinely
needed, add a new purpose-named file rather than editing these in place.
