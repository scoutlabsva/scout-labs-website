import { SectionIntro } from "@/components/section-intro";

/**
 * Question-and-answer list built on native <details>, so it works without
 * JavaScript, is keyboard accessible, and keeps every answer in the HTML
 * for search engines.
 */
export function Faq({
  eyebrow,
  headline,
  items,
}: {
  eyebrow: string;
  headline: string;
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <SectionIntro eyebrow={eyebrow} headline={headline} className="lg:col-span-4" />
      <div className="divide-y divide-border border-y border-border lg:col-span-8">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm py-5 text-lg font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="mt-1 font-mono text-base text-muted-subtle transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="copy max-w-2xl pb-6">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
