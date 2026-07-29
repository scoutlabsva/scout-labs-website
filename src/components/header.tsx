import Link from "next/link";
import { navLinks } from "@/lib/content";
import { ScoutMark } from "@/components/scout-mark";
import { ScoutWordmark } from "@/components/scout-wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ScoutMark className="h-7 w-7" />
          <ScoutWordmark className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-sm btn-primary">
          Free assessment
        </a>
      </div>
    </header>
  );
}
