import { problems } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";
import { TextLink } from "@/components/text-link";

export function ProblemsWeSolve() {
  return (
    <section
      id="problems"
      className="scroll-mt-20 border-t border-border/60 px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow={problems.eyebrow}
          headline={problems.headline}
          description={problems.description}
          className="max-w-2xl"
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item) => (
            <li key={item.problem} className="bg-background p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.problem}</h3>
              <p className="copy mt-3 text-sm">
                <span className="font-medium text-scout-green" aria-hidden="true">
                  →{" "}
                </span>
                {item.solution}
              </p>
            </li>
          ))}
        </ul>

        <TextLink href={problems.link.href} className="mt-10">
          {problems.link.label}
        </TextLink>
      </div>
    </section>
  );
}
