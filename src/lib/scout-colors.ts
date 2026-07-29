/**
 * The approved Scout Mark's fixed sage palette. Single source of truth —
 * scout-mark.tsx, scout-diamond.tsx, and workflow-diagram.tsx all render
 * this same faceted diamond at different scales and previously repeated
 * these hex values independently.
 */
export const scoutMarkColors = {
  base: "#6D8F79",
  facetTopLeft: "#789B84",
  facetTopRight: "#8BAA94",
  facetBottomRight: "#587463",
} as const;
