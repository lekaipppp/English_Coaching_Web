import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/professionals", label: "For Professionals" },
  { href: "/corporate", label: "For Corporate" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-headline text-xl text-ink">
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
          {NAV_LINKS.map((link) => (
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
            className="border-b border-transparent py-2 text-sm text-muted transition-colors hover:border-ink-soft hover:text-ink-soft md:py-0"
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}
