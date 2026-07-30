import { ScoutDiamond } from "@/components/scout-diamond";

/**
 * The hero's visual signature: today's work — customer intake, scheduling,
 * job details, invoicing — arrives as a few thin, slightly tangled lines
 * (warm, unresolved) that pass through a Scout Labs diagnostic point (the
 * faceted mark, ringed like a compass) and leave as one clear line (navy,
 * confident). That single line forks into three honest possibilities, in
 * order of how often they're the actual answer: a better process first,
 * automation next, AI last and quietest — never the dominant option. Two
 * quiet section labels ("How work happens today" / "The right next step")
 * frame the before/after without adding new visual weight.
 * The whole diagram is aria-hidden — its internal labels and card text would
 * otherwise be read individually — with a plain-language sr-only description
 * standing in as the one accessible name.
 */
export function WorkflowDiagnosis() {
  return (
    <div className="w-full max-w-2xl">
      <span className="sr-only">
        Diagram: today&apos;s tangled workflow — customer intake, scheduling, job details, and
        invoicing — passes through a Scout Labs diagnostic point and resolves into one clear path,
        ending in three possible next steps in order of likelihood: a better process, automation,
        or AI.
      </span>
      <div aria-hidden="true">
        <svg viewBox="0 0 640 420" fill="none" className="h-auto w-full">
          {/* Section label: how work happens today. */}
          <text
            x="40"
            y="30"
            className="hidden uppercase sm:inline"
            fontFamily="var(--font-inter)"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.06em"
            fill="var(--muted-subtle)"
          >
            How work happens today
          </text>

          {/* Today's work: thin, slightly tangled, unresolved — but legible against the page. All four converge on the exact center of the diamond. */}
          <g stroke="var(--warm)" strokeWidth="1.75" opacity="0.85" fill="none">
            <path d="M40,80 C110,60 170,130 330,195" />
            <path d="M40,150 C130,170 150,90 330,195" />
            <path d="M40,220 C120,200 190,260 330,195" />
            <path d="M40,290 C140,310 200,230 330,195" />
          </g>

          {/* Operational labels — hidden below sm; the lines alone carry the story on small screens. */}
          <g className="hidden sm:inline" fontFamily="var(--font-inter)" fontSize="11" fontWeight="500" letterSpacing="0.03em">
            <text x="40" y="66" fill="var(--muted)" className="uppercase">
              Customer intake
            </text>
            <text x="40" y="136" fill="var(--muted)" className="uppercase">
              Scheduling
            </text>
            <text x="40" y="206" fill="var(--muted)" className="uppercase">
              Job details
            </text>
            <text x="40" y="276" fill="var(--muted)" className="uppercase">
              Invoicing
            </text>
          </g>

          {/* The diagnostic point: a compass ring around the faceted Scout Mark. */}
          <g className="diagnosis-mark-in">
            <circle cx="330" cy="195" r="38" stroke="var(--border-strong)" strokeWidth="1" fill="none" />
            <svg x="305" y="170" width="50" height="50" viewBox="0 0 40 40">
              <ScoutDiamond className="h-full w-full" />
            </svg>
          </g>

          {/* The resolved path: one clear line, drawn once. */}
          <path
            d="M358,195 L500,195"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            className="diagnosis-path-draw"
          />
          <circle cx="500" cy="195" r="3.5" fill="var(--accent)" />

          {/* Section label: the right next step. */}
          <text
            x="575"
            y="100"
            textAnchor="middle"
            className="hidden uppercase sm:inline"
            fontFamily="var(--font-inter)"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.06em"
            fill="var(--muted-subtle)"
          >
            The right next step
          </text>

          {/* Three honest next steps — better process first, AI last and quietest. */}
          <g stroke="var(--accent)" strokeWidth="1.25" opacity="0.55">
            <path d="M500,195 L525,140" />
          </g>
          <g className="diagnosis-card-in" style={{ animationDelay: "0.75s" }}>
            <rect x="525" y="124" width="100" height="32" rx="16" fill="var(--background)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="575" y="144" textAnchor="middle" fontFamily="var(--font-inter)" fontWeight="600" fontSize="11" fill="var(--accent)">
              Better process
            </text>
          </g>

          <g stroke="var(--muted)" strokeWidth="1.25" opacity="0.45">
            <path d="M500,195 L525,195" />
          </g>
          <g className="diagnosis-card-in" style={{ animationDelay: "0.9s" }}>
            <rect x="525" y="179" width="100" height="32" rx="16" fill="var(--background)" stroke="var(--muted)" strokeWidth="1.25" />
            <text x="575" y="199" textAnchor="middle" fontFamily="var(--font-inter)" fontWeight="500" fontSize="11" fill="var(--muted)">
              Automation
            </text>
          </g>

          <g stroke="var(--border-strong)" strokeWidth="1.25" opacity="0.45">
            <path d="M500,195 L525,250" />
          </g>
          <g className="diagnosis-card-in" style={{ animationDelay: "1.05s" }}>
            <rect x="525" y="234" width="100" height="32" rx="16" fill="var(--background)" stroke="var(--muted-subtle)" strokeWidth="1.25" />
            <text x="575" y="254" textAnchor="middle" fontFamily="var(--font-inter)" fontWeight="400" fontSize="11" fill="var(--muted)">
              AI
            </text>
          </g>
        </svg>
      </div>

      <p className="mt-3 text-center text-sm text-muted">
        The right starting point is often simpler than AI.
      </p>
    </div>
  );
}
