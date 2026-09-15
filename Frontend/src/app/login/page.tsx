import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Crosswire account.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="w-full max-w-sm border border-line bg-paper-raised px-8 py-10">
        <h1 className="text-2xl">Log in</h1>
        <p className="mt-2 text-sm text-muted">
          Account access is coming soon. This form is a placeholder.
        </p>

        <form className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-ink-soft">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="border border-line bg-paper px-3 py-2 text-ink placeholder:text-muted focus:border-ink-soft focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm text-ink-soft">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="border border-line bg-paper px-3 py-2 text-ink placeholder:text-muted focus:border-ink-soft focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="mt-2 bg-ink px-4 py-2.5 font-medium text-paper"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-sm text-muted">
          Just here to look around?{" "}
          <Link href="/" className="text-ink-soft underline underline-offset-4">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
