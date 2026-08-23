/**
 * The numbered marker used by both connected-process layouts (Services,
 * How We Work). Always a plain number — no destination-marker variant.
 */
export function StepNode({ index }: { index: number }) {
  return <span className="step-node">{String(index + 1).padStart(2, "0")}</span>;
}
