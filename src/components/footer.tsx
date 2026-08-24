import { footer, navLinks, privacy } from "@/lib/content";
import { ScoutMark } from "@/components/scout-mark";
import { ScoutChevron } from "@/components/scout-chevron";
import { ScoutWordmark } from "@/components/scout-wordmark";
import { ShareButton } from "@/components/share-button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-strong px-6 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <ScoutMark className="h-6 w-6" />
            <ScoutWordmark className="text-lg" />
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <ShareButton className="nav-link" location="footer" />
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <ScoutChevron
              direction="up"
              className="h-3 w-2.5 shrink-0 text-muted-subtle"
            />
            <p className="text-sm text-muted">{footer.copyright}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            <a href="/privacy" className="nav-link text-xs">
              Privacy Policy
            </a>
            <a href="/terms" className="nav-link text-xs">
              Terms of Service
            </a>
          </nav>
        </div>

        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted">{privacy.note}</p>
      </div>
    </footer>
  );
}
