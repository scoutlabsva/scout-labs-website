/**
 * A small angular chevron matching the hero diagram's wayfinding mark —
 * the same directional glyph reused with intent: "right" implies proceed
 * (secondary CTA), "up" implies a confident close (footer sign-off).
 */
export function ScoutChevron({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "up";
}) {
  return (
    <svg
      viewBox="0 0 12 16"
      aria-hidden="true"
      className={className}
      style={direction === "up" ? { transform: "rotate(-90deg)" } : undefined}
    >
      <path
        d="M2 2 L10 8 L2 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
