import { ScoutDiamond } from "@/components/scout-diamond";

/**
 * The hero's visual signature: a torn-edge work order sheet, solid and
 * current, sitting in front of two fainter carbon-copy duplicates peeking
 * out behind it — the "second business" a company builds by accident just
 * to keep track of the first. Warm, fading ink marks the duplicate labor;
 * the faceted Scout Mark diamond is stamped once on the real sheet, at an
 * angle, as the single authoritative record. Decorative — the surrounding
 * copy carries the meaning for assistive tech.
 */
export function CarbonCopyStack() {
  return (
    <svg
      viewBox="0 0 480 460"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <g transform="rotate(-2 240 230)">
        {/* Layer 3: the second, fainter duplicate. */}
        <g opacity="0.28" stroke="var(--warm)">
          <rect x="156" y="166" width="260" height="190" fill="var(--background)" strokeWidth="1.5" />
          <path d="M184,224 L301,224" strokeWidth="1.5" />
          <path d="M184,256 L368,256" strokeWidth="1.5" />
          <path d="M184,280 L326,280" strokeWidth="1.5" />
          <path d="M395,345 L410,345" strokeWidth="1.5" />
        </g>

        {/* Layer 2: the first duplicate, re-entered by hand. */}
        <g opacity="0.5" stroke="var(--warm)">
          <rect x="128" y="138" width="260" height="190" fill="var(--background)" strokeWidth="1.5" />
          <path d="M156,196 L273,196" strokeWidth="1.5" />
          <path d="M156,228 L340,228" strokeWidth="1.5" />
          <path d="M156,252 L298,252" strokeWidth="1.5" />
          <path d="M365,317 L380,317" strokeWidth="1.5" />
        </g>

        {/* Layer 1: the real record — solid, opaque, torn from the pad. */}
        <path
          d="M100,110 L120,106 L140,113 L160,107 L180,113 L200,107 L220,113 L240,107 L260,113 L280,107 L300,113 L320,107 L340,113 L360,110 L360,300 L100,300 Z"
          fill="var(--background)"
          stroke="var(--accent)"
          strokeWidth="1.75"
        />
        <g stroke="var(--muted)" strokeWidth="1.5">
          <path d="M128,158 L245,158" />
          <path d="M128,190 L312,190" />
          <path d="M128,214 L270,214" />
        </g>
        <rect x="128" y="234" width="20" height="20" stroke="var(--muted-subtle)" strokeWidth="1.25" />

        {/* The stamp: one verified mark on the one real sheet. */}
        <g className="stamp-in">
          <svg x="280" y="230" width="40" height="40" viewBox="0 0 40 40">
            <ScoutDiamond className="h-full w-full" />
          </svg>
        </g>
      </g>
    </svg>
  );
}
