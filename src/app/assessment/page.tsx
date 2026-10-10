import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact-cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { Section } from "@/components/section";
import { SectionIntro } from "@/components/section-intro";
import { contact, routes } from "@/lib/content";
import { assessmentPage as page } from "@/lib/pages/assessment";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...page.meta, path: page.path });

export default function AssessmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(page.breadcrumb, page.path)} />
      <Header />
      <main>
        <PageHero
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          lead={page.hero.lead}
          showPrimaryCta={false}
        />

        <ContactCTA
          id="assessment-form"
          intro={{
            eyebrow: page.form.eyebrow,
            headline: page.form.headline,
            description: page.form.description,
            note: contact.note,
          }}
          aside={
            <div className="lg:mt-8">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {page.form.identifiesHeading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {page.form.identifies.map((item) => (
                  <li key={item} className="flex gap-3 leading-snug text-foreground">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scout-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        <Section>
          <SectionIntro
            eyebrow={page.nextSteps.eyebrow}
            headline={page.nextSteps.headline}
            className="max-w-2xl"
          />
          <ProcessSteps steps={page.nextSteps.steps} />
          <p className="mt-12 max-w-2xl border-l-2 border-border-strong pl-3 font-mono text-sm leading-snug text-muted-subtle">
            {page.nextSteps.note}
          </p>
        </Section>

        <Section tone="surface">
          <Faq eyebrow={page.faq.eyebrow} headline={page.faq.headline} items={page.faq.items} />
          <p className="copy mt-8 text-sm">
            Read our{" "}
            <a href={routes.privacy} className="nav-link text-sm text-accent">
              privacy policy
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
