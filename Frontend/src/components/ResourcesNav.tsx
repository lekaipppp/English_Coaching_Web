"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const RESOURCES_LINKS = [
  { href: "/resources/blog", label: "Blog" },
  { href: "/resources/podcast", label: "Podcast" },
  { href: "/resources/learning-materials", label: "Learning Materials" },
];

export default function ResourcesNav() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Reset on route change — resetting state during render (rather than in an
  // effect) avoids an extra commit where the dropdown is briefly still open.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <div ref={containerRef} className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-1 py-2 text-ink-soft transition-colors hover:text-ink md:w-auto md:py-0"
      >
        Resources
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""} md:group-hover:rotate-180`}
        >
          <path
            d="M1.5 3.5L5 7L8.5 3.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`${open ? "flex" : "hidden"} flex-col gap-1 pl-4 md:group-hover:flex md:focus-within:flex md:absolute md:top-full md:left-0 md:w-52 md:gap-0 md:border md:border-line md:bg-paper md:p-2 md:pl-2 md:shadow-sm`}
      >
        {RESOURCES_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(event) => {
              setOpen(false);
              // A clicked link keeps focus after navigating (this header
              // never unmounts), which would keep the panel open via
              // :focus-within — release it so the menu actually closes.
              event.currentTarget.blur();
            }}
            className="rounded px-2 py-2 text-sm text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
