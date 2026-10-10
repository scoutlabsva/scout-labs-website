import Link from "next/link";
import { footer, footerLinks, privacy, routes } from "@/lib/content";
import { ScoutMark } from "@/components/scout-mark";
import { ScoutChevron } from "@/components/scout-chevron";
import { ScoutWordmark } from "@/components/scout-wordmark";
import { ShareButton } from "@/components/share-button";
import { ContactDetails } from "@/components/contact-details";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-strong px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <ScoutMark className="h-6 w-6" />
              <ScoutWordmark className="text-lg" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{footer.description}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="eyebrow text-xs">Explore</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <ShareButton className="nav-link" location="footer" />
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-xs">Contact</p>
            <ContactDetails className="mt-3" />
            <p className="mt-3 text-sm text-muted">
              Serving Lynchburg, Forest, Bedford, Amherst, and Campbell County.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <ScoutChevron direction="up" className="h-3 w-2.5 shrink-0 text-muted-subtle" />
            <p className="text-sm text-muted">{footer.copyright}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            <Link href={routes.privacy} className="nav-link text-xs">
              Privacy Policy
            </Link>
            <Link href={routes.terms} className="nav-link text-xs">
              Terms of Service
            </Link>
          </nav>
        </div>

        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted">{privacy.note}</p>
      </div>
    </footer>
  );
}
