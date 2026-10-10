import Link from "next/link";
import { ScoutChevron } from "@/components/scout-chevron";

/** A standalone "go deeper" link with the Scout chevron, used at the end of sections. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`nav-link group inline-flex items-center text-base font-medium text-accent ${className}`}
    >
      {children}
      <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
