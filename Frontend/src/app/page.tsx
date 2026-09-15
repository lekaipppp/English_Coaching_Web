import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import VoiceBars from "@/components/VoiceBars";
import { SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Communication training for international tech professionals",
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-28">
        <Container className="grid items-center gap-12 md:grid-cols-[3fr_2fr]">
          <div>
            <h1 className="text-4xl leading-[1.1] md:text-6xl">
              Say it directly, so it lands.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Crosswire is communication coaching for international tech
              professionals working with Western clients and colleagues —
              and for the outsourcing firms and companies around them. We
              help people speak up in meetings, push back on unrealistic
              deadlines, and run client calls with confidence, so good work
              stops getting lost in translation.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="/professionals"
                className="border-b-2 border-coral pb-1 font-medium text-ink"
              >
                For Professionals
              </Link>
              <Link
                href="/corporate"
                className="border-b-2 border-teal pb-1 font-medium text-ink"
              >
                For Corporate
              </Link>
            </div>
          </div>
          <VoiceBars className="h-28 w-full md:h-40" />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl md:text-3xl">Three ways we help</h2>

          <div className="mt-10 border-t border-line pt-10">
            <div className="grid gap-3 md:grid-cols-[1fr_2fr] md:items-baseline">
              <p className="text-sm text-muted">Individuals</p>
              <div className="border-l-2 border-coral pl-6">
                <h3 className="text-xl">
                  <Link href="/professionals">For Professionals</Link>
                </h3>
                <p className="mt-2 max-w-xl text-ink-soft">
                  1:1 coaching for developers and IT professionals who want
                  to speak up in meetings, prep for interviews, and handle
                  client calls without losing their footing.
                </p>
                <Link
                  href="/professionals"
                  className="mt-3 inline-block text-sm text-coral underline underline-offset-4"
                >
                  Explore 1:1 coaching
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
            <div className="border-l-2 border-amber pl-6">
              <p className="text-sm text-muted">Outsourcing &amp; staffing firms</p>
              <h3 className="mt-2 text-xl">
                <Link href="/corporate">Keep your clients renewing</Link>
              </h3>
              <p className="mt-2 text-ink-soft">
                Cohort training for placed developers and IT staff, so the
                teams you deploy communicate as well as they code.
              </p>
              <Link
                href="/corporate"
                className="mt-3 inline-block text-sm text-amber underline underline-offset-4"
              >
                See the cohort format
              </Link>
            </div>

            <div className="border-l-2 border-teal pl-6">
              <p className="text-sm text-muted">Western companies</p>
              <h3 className="mt-2 text-xl">
                <Link href="/corporate">Get more from your team&rsquo;s meetings</Link>
              </h3>
              <p className="mt-2 text-ink-soft">
                Training for teams directly managing international
                developers and IT staff — starting with a diagnosis, not a
                generic workshop.
              </p>
              <Link
                href="/corporate"
                className="mt-3 inline-block text-sm text-teal underline underline-offset-4"
              >
                See the diagnosis-first approach
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-raised py-16">
        <Container>
          <p className="max-w-2xl text-lg text-ink-soft">
            Currently running pilot cohorts. We&rsquo;re working closely with a
            small number of teams and professionals as we refine the
            program.
          </p>
        </Container>
      </section>
    </>
  );
}
