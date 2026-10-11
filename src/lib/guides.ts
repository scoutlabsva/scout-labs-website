import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { routes } from "@/lib/content";

// Guides are Markdown files in content/guides/, read at build time. The
// filename (minus .md) is the URL slug: what-to-automate-first.md →
// /guides/what-to-automate-first.

const guidesDir = path.join(process.cwd(), "content", "guides");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type Guide = {
  slug: string;
  path: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  updated?: string;
  html: string;
};

/**
 * Minimal front matter: `key: value` lines between `---` fences. Enough for
 * title/description/date without pulling in a YAML parser.
 */
function parseFrontMatter(source: string, file: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing front matter`);

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const pair = line.match(/^(\w+):\s*(.*)$/);
    if (pair) data[pair[1]] = pair[2].trim().replace(/^"(.*)"$/, "$1");
  }
  return { data, body: match[2] };
}

function readGuide(file: string): Guide | null {
  const slug = file.replace(/\.md$/, "");
  if (!slugPattern.test(slug)) {
    throw new Error(`${file}: filename must be lowercase words joined by hyphens`);
  }

  const { data, body } = parseFrontMatter(fs.readFileSync(path.join(guidesDir, file), "utf8"), file);
  for (const key of ["title", "description", "date"]) {
    if (!data[key]) throw new Error(`${file}: front matter needs "${key}"`);
  }
  if (data.draft === "true") return null;

  return {
    slug,
    path: `${routes.guides}/${slug}`,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated || undefined,
    html: marked.parse(body, { async: false }),
  };
}

/** Published guides, newest first. Files with `draft: true` are skipped. */
export function getGuides(): Guide[] {
  if (!fs.existsSync(guidesDir)) return [];
  return fs
    .readdirSync(guidesDir)
    .filter((file) => file.endsWith(".md"))
    .map(readGuide)
    .filter((guide): guide is Guide => guide !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getGuide(slug: string): Guide | undefined {
  return getGuides().find((guide) => guide.slug === slug);
}

export function formatGuideDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export const guidesPage = {
  path: routes.guides,
  meta: {
    title: "Guides to Small Business Automation",
    description:
      "Plain-language guides to AI and automation for small businesses: what to automate first, what it involves, and when it isn't worth it.",
  },
  breadcrumb: "Guides",
  hero: {
    eyebrow: "Guides",
    title: "Practical guides to automation for small businesses",
    lead: "Straightforward answers to the questions owners ask most about AI and automation: where to start, what it involves, and when it isn't worth it.",
  },
  empty: "The first guides are on their way.",
  articleCta: {
    headline: "Want to know what's worth automating in your business?",
    description:
      "The free assessment is a short, no-obligation conversation about where your time goes and what could realistically be improved.",
  },
} as const;
