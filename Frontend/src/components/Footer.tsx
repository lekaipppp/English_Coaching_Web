import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-headline text-lg">{SITE_NAME}</p>
            <p className="mt-3 max-w-xs text-sm text-paper/70">
              Communication training for international tech professionals
              and the teams they work with.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <Link href="/professionals" className="text-paper/80 hover:text-paper">
              For Professionals
            </Link>
            <Link href="/corporate" className="text-paper/80 hover:text-paper">
              For Corporate
            </Link>
            <Link href="/resources" className="text-paper/80 hover:text-paper">
              Resources
            </Link>
            <Link href="/pricing" className="text-paper/80 hover:text-paper">
              Pricing
            </Link>
          </nav>

          <div className="text-sm">
            <p className="text-paper/70">Get in touch</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block text-paper hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-1 text-paper/50">(placeholder contact)</p>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6 text-xs text-paper/50">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
