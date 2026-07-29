import { contact } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-warm-subtle px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionIntro
            eyebrow={contact.eyebrow}
            headline={contact.headline}
            description={contact.description}
            className="lg:col-span-7"
          />

          <div className="flex flex-col justify-center gap-4 lg:col-span-5">
            <a
              href={contact.cta.href}
              className="btn btn-lg btn-primary w-fit"
            >
              {contact.cta.label}
            </a>
            <p className="text-sm text-muted">{contact.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
