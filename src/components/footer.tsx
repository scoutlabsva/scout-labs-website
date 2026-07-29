import { footer, navLinks } from "@/lib/content";
import { ScoutMark } from "@/components/scout-mark";
import { ScoutChevron } from "@/components/scout-chevron";
import { ScoutWordmark } from "@/components/scout-wordmark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-strong px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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
          </nav>
        </div>

        <div className="mt-10 flex items-center gap-2.5 border-t border-border pt-6">
          <ScoutChevron
            direction="up"
            className="h-3 w-2.5 shrink-0 text-muted-subtle"
          />
          <p className="text-sm text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
