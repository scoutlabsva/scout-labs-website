import type { ReactNode } from "react";

const tones = {
  default: "",
  surface: "bg-surface",
  warm: "bg-warm-subtle",
} as const;

/**
 * Standard full-width section band used by the marketing pages: a top
 * border, consistent vertical rhythm, and the shared max-width container.
 */
export function Section({
  id,
  tone = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-border/60 px-6 py-16 sm:py-20 lg:px-8 lg:py-24 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
