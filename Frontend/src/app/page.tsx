import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Photo from "@/components/Photo";
import VoiceBars from "@/components/VoiceBars";
import { SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Communication training for international tech professionals",
  description: SITE_DESCRIPTION,
};

const HOW_IT_WORKS_STEPS = [
  {
    number: "1",
    title: "Book a session",
    description:
      "Pick a time that works for you and confirm your booking — payment is handled securely at checkout, no separate steps.",
    accent: "border-amber",
    text: "text-amber",
    image: null,
    imageAlt: "",
  },
  {
    number: "2",
    title: "Get your session details",
    description:
      "You'll get a confirmation with a video call link sent straight to your inbox — nothing else to set up.",
    accent: "border-teal",
    text: "text-teal",
    image: "/images/main/muhammad-faiz-zulkeflee-alw-CwGFmwQ-unsplash.jpg",
    imageAlt: "Two colleagues reviewing something together on a phone",
  },
  {
    number: "3",
    title: "Show up and work on it live",
    description:
      "Bring the meeting, interview, or client call you're preparing for. We work on it together, in real time.",
    accent: "border-coral",
    text: "text-coral",
    image: "/images/professionals/vitaly-gariev--R_uoeuJj6k-unsplash.jpg",
    imageAlt: "A professional engaged in a live video call at his desk",
  },
];

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
              Crosswire is communication coaching for tech professionals
              from Vietnam, China, Japan, and Korea working with Western
              clients and colleagues — and for the outsourcing firms and
              companies around them. We
              help people speak up in meetings, push back on unrealistic
              deadlines, and run client calls with confidence, so good work
              stops getting lost in translation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/professionals"
                className="rounded-md bg-coral px-6 py-3 font-medium text-paper transition-opacity hover:opacity-90"
              >
                For Professionals
              </Link>
              <Link
                href="/corporate"
                className="rounded-md bg-teal px-6 py-3 font-medium text-paper transition-opacity hover:opacity-90"
              >
                For Corporate
              </Link>
            </div>
          </div>
          <div
            className="rounded-2xl border border-line p-10 md:p-14"
            style={{
              background:
                "radial-gradient(circle at 25% 20%, rgba(214,138,44,0.08), transparent 60%), radial-gradient(circle at 80% 85%, rgba(44,110,104,0.1), transparent 55%), var(--paper-raised)",
            }}
          >
            <VoiceBars className="h-28 w-full md:h-40" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl md:text-3xl">Three ways we help</h2>

          <div className="mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-[3fr_2fr] md:items-center">
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
            <Photo
              src="/images/main/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
              alt="A diverse team gathered around a laptop, discussing work together"
            />
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

      <section className="border-t border-line py-20">
        <Container>
          <h2 className="text-2xl md:text-3xl">How it works</h2>
          <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.number} className={`border-l-2 pl-6 ${step.accent}`}>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${step.accent} ${step.text} text-sm font-medium`}
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.description}</p>
                {step.image && (
                  <Photo
                    src={step.image}
                    alt={step.imageAlt}
                    aspect="aspect-[4/3]"
                    className="mt-6"
                  />
                )}
              </div>
            ))}
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
          <Link
            href="/corporate"
            className="mt-3 inline-block text-sm text-teal underline underline-offset-4"
          >
            Book a call
          </Link>
        </Container>
      </section>
    </>
  );
}
