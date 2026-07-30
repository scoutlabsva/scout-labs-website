import { hiddenWork } from "@/lib/content";

export function HiddenWork() {
  return (
    <section className="border-t border-border/60 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">{hiddenWork.eyebrow}</p>
          <h2 className="heading-section mt-4">{hiddenWork.headline}</h2>

          <div className="mt-6 flex flex-col gap-4">
            {hiddenWork.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-6 max-w-xl border-l-2 border-border-strong pl-3 font-mono text-sm leading-snug text-muted-subtle">
            {hiddenWork.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
