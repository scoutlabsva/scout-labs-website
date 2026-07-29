/**
 * The two-tone "Scout Labs" text lockup — "Scout" in the foreground color,
 * "Labs" in Scout Sage. Shared so the split doesn't drift between the
 * header and footer.
 */
export function ScoutWordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ""}`}>
      Scout<span className="text-scout-green"> Labs</span>
    </span>
  );
}
