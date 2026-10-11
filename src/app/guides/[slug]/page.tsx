import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ScoutChevron } from "@/components/scout-chevron";
import { site } from "@/lib/content";
import { formatGuideDate, getGuide, getGuides, guidesPage } from "@/lib/guides";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Static export: every guide is generated at build time; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.path,
    article: { publishedTime: guide.date, modifiedTime: guide.updated },
  });
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(guide),
          breadcrumbSchema(guide.title, guide.path, {
            name: guidesPage.breadcrumb,
            path: guidesPage.path,
          }),
        ]}
      />
      <Header />
      <main>
        <article className="px-6 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href={guidesPage.path}
              className="nav-link group inline-flex items-center gap-2 font-medium text-accent"
            >
              <ScoutChevron className="h-3 w-2.5 rotate-180 transition-transform group-hover:-translate-x-0.5" />
              All guides
            </Link>

            <header className="mt-8">
              <h1 className="heading-display text-balance text-4xl leading-[1.1] sm:text-5xl">
                {guide.title}
              </h1>
              <p className="body-copy mt-6">{guide.description}</p>
              <p className="mt-6 text-sm text-muted">
                By {site.founder} ·{" "}
                <time dateTime={guide.date}>{formatGuideDate(guide.date)}</time>
                {guide.updated && (
                  <>
                    {" "}· Updated <time dateTime={guide.updated}>{formatGuideDate(guide.updated)}</time>
                  </>
                )}
              </p>
            </header>

            <div
              className="article-copy mt-10 border-t border-border pt-10"
              // Trusted, build-time Markdown from content/guides/.
              dangerouslySetInnerHTML={{ __html: guide.html }}
            />
          </div>
        </article>

        <CtaBand
          headline={guidesPage.articleCta.headline}
          description={guidesPage.articleCta.description}
        />
      </main>
      <Footer />
    </>
  );
}
