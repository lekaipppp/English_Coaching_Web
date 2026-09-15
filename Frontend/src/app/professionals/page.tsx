import type { Metadata } from "next";
import Container from "@/components/Container";
import { CALENDLY_PROFESSIONALS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Professionals — 1:1 Communication Coaching",
  description:
    "1:1 coaching for developers and IT professionals working in Western companies: speaking up in meetings, interview prep, and handling client calls with confidence.",
};

const FEATURES = [
  {
    title: "1:1, not cohort-based",
    description:
      "Sessions are built around your role, your accent, your meetings — not a generic curriculum shared with a group.",
    accent: "border-coral",
  },
  {
    title: "Interview prep included",
    description:
      "Practice technical and behavioral interviews out loud, with feedback on clarity and confidence, not just content.",
    accent: "border-coral",
  },
  {
    title: "Flexible scheduling",
    description:
      "Sessions fit around your work hours and time zone, including before a specific call or interview that's coming up.",
    accent: "border-coral",
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <p className="text-sm text-coral">For Professionals</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            You know the answer. Say it like you do.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            1:1 coaching for developers and IT professionals working in
            Western companies. We work on speaking up in meetings, prepping
            for interviews, and handling client calls — so the way you say
            something stops undercutting what you actually know.
          </p>
          <a
            href={CALENDLY_PROFESSIONALS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b-2 border-coral pb-1 font-medium text-ink"
          >
            Book a session
          </a>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl">How it works</h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`grid gap-2 border-l-2 py-6 pl-6 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-8 ${feature.accent}`}
              >
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-ink-soft">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-raised py-16">
        <Container className="flex flex-col items-start gap-4">
          <p className="max-w-xl text-lg text-ink-soft">
            Bring a specific meeting, interview, or client call you&rsquo;re
            preparing for, and we&rsquo;ll work on it directly.
          </p>
          <a
            href={CALENDLY_PROFESSIONALS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b-2 border-coral pb-1 font-medium text-ink"
          >
            Book a session
          </a>
        </Container>
      </section>
    </>
  );
}
