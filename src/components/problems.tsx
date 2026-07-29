import { problems } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";

export function Problems() {
  return (
    <section id="problems" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow={problems.eyebrow}
          headline={problems.headline}
          description={problems.description}
          className="max-w-2xl"
        />

        <ul className="mt-16 divide-y divide-border border-t border-border">
          {problems.items.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8 lg:py-10"
            >
              <span className="font-mono text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="heading-card text-xl">{item.title}</h3>
                <p className="copy mt-2 max-w-2xl">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
