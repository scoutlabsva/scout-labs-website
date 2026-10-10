import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { routes } from "@/lib/content";
import { automationExamples, examplesPage as page, type AutomationExample } from "@/lib/pages/examples";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...page.meta, path: page.path });

export default function AutomationExamplesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(page.breadcrumb, page.path)} />
      <Header />
      <main>
        <PageHero
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          lead={page.hero.lead}
          secondaryCta={{ label: "How automation works", href: routes.automation }}
        >
          <p className="mt-8 max-w-2xl border-l-2 border-border-strong pl-3 text-sm leading-relaxed text-muted">
            {page.notice}
          </p>
        </PageHero>

        <Section tone="surface">
          <nav aria-label="Examples on this page">
            <p className="eyebrow text-xs">Jump to an example</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {automationExamples.map((example) => (
                <li key={example.id}>
                  <a
                    href={`#${example.id}`}
                    className="inline-block rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground outline-none transition-colors hover:border-accent/50 hover:bg-accent-subtle focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {example.industry}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col gap-8">
            {automationExamples.map((example) => (
              <ExampleCard key={example.id} example={example} />
            ))}
          </div>
        </Section>

        <CtaBand
          headline={page.cta.headline}
          description={page.cta.description}
          secondaryCta={{ label: "Business process automation", href: routes.automation }}
        />
      </main>
      <Footer />
    </>
  );
}

function ExampleCard({ example }: { example: AutomationExample }) {
  const labels = page.sectionLabels;
  return (
    <article
      id={example.id}
      className="scroll-mt-20 rounded-lg border border-border bg-background p-6 shadow-soft sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="eyebrow">{example.industry}</p>
        <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
          {page.kindLabels[example.kind]}
        </span>
      </div>
      <h2 className="heading-card mt-3 text-balance">{example.title}</h2>

      <h3 className="mt-6 text-xs font-medium uppercase tracking-wide text-muted-subtle">{labels.problem}</h3>
      <p className="mt-2 max-w-3xl leading-relaxed text-foreground">{example.problem}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-md bg-surface p-5">
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted-subtle">{labels.manual}</h3>
          <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-muted marker:text-muted-subtle">
            {example.manual.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="rounded-md border border-scout-green/40 bg-background p-5">
          <h3 className="text-xs font-medium uppercase tracking-wide text-accent">{labels.automated}</h3>
          <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-foreground marker:text-scout-green">
            {example.automated.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted-subtle">{labels.benefits}</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-foreground">
            {example.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scout-green" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted-subtle">{labels.considerations}</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
            {example.considerations.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {example.outcome && (
        <div className="mt-8 border-t border-border pt-5">
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted-subtle">{labels.outcome}</h3>
          <p className="mt-2 leading-relaxed text-foreground">{example.outcome}</p>
        </div>
      )}
    </article>
  );
}
