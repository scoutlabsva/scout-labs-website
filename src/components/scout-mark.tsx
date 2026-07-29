import { scoutMarkColors } from "@/lib/scout-colors";

/**
 * The approved Scout Labs mark (public/logo/scout-mark.svg), inlined so it
 * can sit inline with text at nav/footer scale. Colors are fixed per the
 * approved asset, not theme-driven.
 */
export function ScoutMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Scout Labs"
      className={className}
    >
      <path
        fill={scoutMarkColors.base}
        d="M50 5 L96 85 L78 77 L50 30 L22 77 L4 85 Z"
      />
      <g>
        <path d="M50 55 L38 76 L50 76 Z" fill={scoutMarkColors.facetTopLeft} />
        <path d="M50 55 L62 76 L50 76 Z" fill={scoutMarkColors.facetTopRight} />
        <path d="M38 76 L50 97 L50 76 Z" fill={scoutMarkColors.base} />
        <path d="M62 76 L50 97 L50 76 Z" fill={scoutMarkColors.facetBottomRight} />
      </g>
    </svg>
  );
}
