import { scoutMarkColors } from "@/lib/scout-colors";

/**
 * A small faceted diamond, geometrically identical to the Scout Mark's
 * inner diamond, scaled down for use as a marker. Reserved for destination
 * points, optimized states, and confirmed outcomes — see globals.css for
 * the semantic rationale behind Scout Sage.
 */
export function ScoutDiamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path d="M20 4 L10 20 L20 20 Z" fill={scoutMarkColors.facetTopLeft} />
      <path d="M20 4 L30 20 L20 20 Z" fill={scoutMarkColors.facetTopRight} />
      <path d="M10 20 L20 36 L20 20 Z" fill={scoutMarkColors.base} />
      <path d="M30 20 L20 36 L20 20 Z" fill={scoutMarkColors.facetBottomRight} />
    </svg>
  );
}
