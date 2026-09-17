import type { Metadata } from "next";
import Container from "@/components/Container";
import { CALENDLY_PROFESSIONALS_URL, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "1:1 coaching pricing for professionals, and custom cohort pricing for outsourcing firms and companies.",
};

const PRICING_CARDS = [
  {
    heading: "1:1 Coaching",
    subheading:
      "Work on the meetings, interviews, and calls that matter, with a coach who knows your context.",
    price: "$35",
    priceUnit: "/ trial lesson",
    cta: {
      label: "Book a trial session",
      href: CALENDLY_PROFESSIONALS_URL,
      external: true,
    },
    features: [
      "1:1 sessions, not shared with a group",
      "Interview and high-stakes meeting prep",
      "Flexible scheduling around your time zone",
      "Session packages available after your trial",
    ],
    whoFor:
      "For developers and IT professionals preparing for interviews, promotions, or high-stakes client calls.",
    accent: "border-coral",
    text: "text-coral",
    bg: "bg-coral",
  },
  {
    heading: "Teams & Organizations",
    subheading:
      "Cohort-based training for outsourcing firms and Western companies managing international teams.",
    price: "Custom pricing",
    priceUnit: null,
    cta: {
      label: "Contact us",
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
    },
    features: [
      "2–4 week cohort format",
      "Real client-call scenario rehearsal",
      "Diagnosis before training begins",
      "Volume pricing for larger teams",
    ],
    whoFor:
      "For outsourcing/staffing firms and Western companies managing international developers and IT staff.",
    accent: "border-teal",
    text: "text-teal",
    bg: "bg-teal",
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-5 w-5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5 8 14l7.5-7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            Pricing
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Placeholder pricing for 1:1 coaching. Corporate pricing is
            custom, based on cohort size and format.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {PRICING_CARDS.map((card) => (
              <div
                key={card.heading}
                className={`flex flex-col border ${card.accent} p-8 md:p-10`}
              >
                <h2 className="text-2xl md:text-3xl">{card.heading}</h2>
                <p className="mt-3 text-ink-soft">{card.subheading}</p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl text-ink">
                    {card.price}
                  </span>
                  {card.priceUnit && (
                    <span className="text-sm text-muted">
                      {card.priceUnit}
                    </span>
                  )}
                </div>

                <a
                  href={card.cta.href}
                  target={card.cta.external ? "_blank" : undefined}
                  rel={card.cta.external ? "noopener noreferrer" : undefined}
                  className={`mt-6 inline-block rounded-md ${card.bg} px-6 py-3 text-center font-medium text-paper transition-opacity hover:opacity-90`}
                >
                  {card.cta.label}
                </a>

                <ul className="mt-8 space-y-3 border-t border-line pt-8">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-ink-soft">
                      <CheckIcon className={card.text} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-line pt-6">
                  <p className="text-sm text-muted">Who it&rsquo;s for:</p>
                  <p className="mt-1 text-ink-soft">{card.whoFor}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
