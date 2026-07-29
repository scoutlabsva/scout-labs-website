import { ScoutDiamond } from "@/components/scout-diamond";

/**
 * The numbered marker used by both connected-process layouts (Services,
 * How We Work). The one destination/optimized stage in each sequence gets
 * the faceted diamond instead of a number — see globals.css for why.
 */
export function StepNode({
  index,
  isDestination,
}: {
  index: number;
  isDestination?: boolean;
}) {
  if (isDestination) {
    return (
      <span className="step-node-diamond">
        <ScoutDiamond className="h-6 w-6" />
      </span>
    );
  }

  return <span className="step-node">{String(index + 1).padStart(2, "0")}</span>;
}
