import Link from "next/link";
import ResourcesNav from "@/components/ResourcesNav";

const PRIMARY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/professionals", label: "For Professionals" },
  { href: "/corporate", label: "For Corporate" },
];

const TRAILING_LINKS = [{ href: "/pricing", label: "Pricing" }];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-headline text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          Crosswire
        </Link>

        <input type="checkbox" id="nav-toggle" className="peer hidden" />

        <label
          htmlFor="nav-toggle"
          aria-label="Toggle menu"
          className="z-10 flex cursor-pointer flex-col gap-1.5 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </label>

        <nav
          aria-label="Primary"
          className="absolute top-full left-0 hidden w-full flex-col gap-1 border-b border-line bg-paper px-6 py-4 peer-checked:flex md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0"
        >
          {PRIMARY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-ink-soft transition-colors hover:text-ink md:py-0"
            >
              {link.label}
            </Link>
          ))}
          <ResourcesNav />
          {TRAILING_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-ink-soft transition-colors hover:text-ink md:py-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="self-start rounded-md border border-ink-soft/50 px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink md:self-center"
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}
