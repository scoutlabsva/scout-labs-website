import type { Metadata } from "next";
import { site } from "@/lib/content";

export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Scout Labs",
} as const;

/**
 * Complete per-page metadata. Next.js merges metadata shallowly, so a page
 * that sets `openGraph` without images would silently drop the layout's
 * image. Every page builds its metadata here to get a canonical URL, Open
 * Graph, and Twitter tags together.
 *
 * `title` is the page-specific part; the layout's template appends
 * "| Scout Labs". Pass `absoluteTitle` to skip the template (homepage).
 * Pass `article` for guides so Open Graph marks them as articles.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  article,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  article?: { publishedTime: string; modifiedTime?: string };
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      images: [ogImage],
      ...(article
        ? { type: "article", ...article, authors: [site.founder] }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export const businessId = `${site.url}/#business`;

/**
 * Sitewide ProfessionalService schema. Real business details only: a
 * service-area business, so the address is the public city, never a
 * street address. No ratings, reviews, or founding dates.
 */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": businessId,
  name: site.name,
  description:
    "Practical AI and business automation consulting for small businesses in Lynchburg and Central Virginia, with remote engagements nationwide.",
  url: site.url,
  email: site.email,
  telephone: site.phoneE164,
  image: `${site.url}${ogImage.url}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Lynchburg, VA" },
    { "@type": "City", name: "Forest, VA" },
    { "@type": "City", name: "Bedford, VA" },
    { "@type": "City", name: "Amherst, VA" },
    { "@type": "AdministrativeArea", name: "Campbell County, VA" },
    { "@type": "Country", name: "United States" },
  ],
  founder: { "@type": "Person", name: site.founder },
  knowsAbout: [
    "Business process automation",
    "Workflow automation",
    "AI implementation",
    "Document processing automation",
    "Systems integration",
  ],
} as const;

export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": businessId },
    ...(areaServed ? { areaServed: { "@type": "City", name: areaServed } } : {}),
  };
}

/**
 * Home → (optional parent) → this page. Guides pass the Guides index as
 * the parent.
 */
export function breadcrumbSchema(
  name: string,
  path: string,
  parent?: { name: string; path: string },
) {
  const trail = [
    { name: "Home", item: site.url },
    ...(parent ? [{ name: parent.name, item: `${site.url}${parent.path}` }] : []),
    { name, item: `${site.url}${path}` },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...entry,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  date,
  updated,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
}) {
  const url = `${site.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    image: `${site.url}${ogImage.url}`,
    datePublished: date,
    dateModified: updated ?? date,
    author: { "@type": "Person", name: site.founder, url: `${site.url}/#about` },
    publisher: { "@id": businessId },
  };
}
