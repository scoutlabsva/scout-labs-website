import { scoutMarkColors } from "@/lib/scout-colors";

/**
 * The hero's visual signature: a fragmented, bottlenecked process resolving
 * into one confident connected path through simplification and automation,
 * ending in a small faceted diamond that echoes the Scout Mark — AI, only
 * where it earns its place. Sage marks the one node that's genuinely
 * optimized and the destination itself; everything still "in process" stays
 * navy. Decorative — the surrounding copy carries the meaning for
 * assistive tech.
 */
export function WorkflowDiagram() {
  return (
    <svg
      viewBox="0 0 480 460"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full"
    >
      {/* Stage 1: messy, manual, fragmented — dashed crossing paths, faded. */}
      <g stroke="var(--border-strong)" strokeWidth="1.75" strokeDasharray="2 4" opacity="0.65">
        <path d="M60,60 L170,110" />
        <path d="M170,110 L150,90" />
        <path d="M150,90 L90,150" />
        <path d="M90,150 L180,190" />
        <path d="M60,60 L90,150" />
      </g>

      <g>
        <circle cx="60" cy="60" r="6" fill="var(--background)" stroke="var(--muted-subtle)" strokeWidth="2" />
        <circle cx="150" cy="90" r="6" fill="var(--background)" stroke="var(--muted-subtle)" strokeWidth="2" />
        <circle cx="170" cy="110" r="6" fill="var(--background)" stroke="var(--muted-subtle)" strokeWidth="2" />
        <circle cx="90" cy="150" r="6" fill="var(--background)" stroke="var(--muted-subtle)" strokeWidth="2" />
      </g>

      {/* Stage 2: the bottleneck — a visible transition from mess to order. */}
      <circle cx="180" cy="190" r="20" fill="none" stroke="var(--warm)" strokeWidth="1.5" opacity="0.3" />
      <circle cx="180" cy="190" r="11" fill="var(--warm-subtle)" stroke="var(--warm)" strokeWidth="2.5" />

      {/* Stages 3–4: clear, connected, efficient — one confident continuous path. */}
      <path
        d="M180,190 C205,213 225,232 252,255 C282,281 305,302 332,326 C357,349 380,371 402,391"
        stroke="var(--accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="workflow-draw"
      />

      <circle cx="252" cy="255" r="8" fill="var(--background)" stroke="var(--accent)" strokeWidth="2.75" />

      {/* Automation: the first genuinely optimized state — sage, not navy. */}
      <circle cx="332" cy="326" r="8" fill="var(--background)" stroke="var(--scout-green)" strokeWidth="2.75" />

      {/* Stage 5: AI, only where it earns its place — a faceted diamond echoing the Scout Mark. */}
      <g>
        <path d="M420,380 L409,399 L420,399 Z" fill={scoutMarkColors.facetTopLeft} />
        <path d="M420,380 L431,399 L420,399 Z" fill={scoutMarkColors.facetTopRight} />
        <path d="M409,399 L420,418 L420,399 Z" fill={scoutMarkColors.base} />
        <path d="M431,399 L420,418 L420,399 Z" fill={scoutMarkColors.facetBottomRight} />
      </g>

      {/* Wayfinding chevron: continued motion beyond the final node. */}
      <path
        d="M440,391 L451,399 L440,407"
        stroke="var(--accent)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />

      {/* Labels — hidden below sm, since the shapes alone carry the story on small screens. */}
      <g className="hidden sm:inline" fontFamily="var(--font-inter)" fontSize="12" letterSpacing="0.03em">
        <text x="60" y="40" textAnchor="middle" fill="var(--muted-subtle)" className="uppercase">
          Inquiry
        </text>
        <text x="190" y="128" textAnchor="start" fill="var(--muted-subtle)" className="uppercase">
          Manual entry
        </text>
        <text x="133" y="196" textAnchor="end" fill="var(--warm)" className="uppercase">
          Bottleneck
        </text>
        <text x="273" y="251" textAnchor="start" fill="var(--muted)" className="uppercase">
          Simplified
        </text>
        <text x="353" y="321" textAnchor="start" fill="var(--scout-green)" className="uppercase">
          Automation
        </text>
        <text x="454" y="440" textAnchor="end" fill="var(--accent)" fontWeight="500" className="uppercase">
          AI, where useful
        </text>
      </g>
    </svg>
  );
}
