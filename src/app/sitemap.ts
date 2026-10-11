import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/content";
import { getGuides } from "@/lib/guides";

export const dynamic = "force-static";

const pages: Array<{ path: string; priority: number; changeFrequency: "monthly" | "yearly" }> = [
  { path: routes.home, priority: 1, changeFrequency: "monthly" },
  { path: routes.lynchburg, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.automation, priority: 0.8, changeFrequency: "monthly" },
  { path: routes.examples, priority: 0.8, changeFrequency: "monthly" },
  { path: routes.assessment, priority: 0.8, changeFrequency: "monthly" },
  { path: routes.guides, priority: 0.7, changeFrequency: "monthly" },
  { path: routes.privacy, priority: 0.3, changeFrequency: "yearly" },
  { path: routes.terms, priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    changeFrequency,
    priority,
  }));

  const guides = getGuides().map((guide) => ({
    url: `${site.url}${guide.path}`,
    lastModified: guide.updated ?? guide.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...guides];
}
