import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { CALENDLY_PROFESSIONALS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "1:1 coaching pricing for professionals, and custom cohort pricing for outsourcing firms and companies.",
};

const PROFESSIONAL_PLANS = [
  {
    name: "Single session",
    price: "$120",
    unit: "per session",
    description:
      "A single 1:1 session — a good starting point, or useful before a specific call or interview.",
  },
  {
    name: "Package of 6 sessions",
    price: "$650",
    unit: "per package",
    description:
      "Six sessions over several weeks, for building speaking-up and client-call skills over time.",
  },
];

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
          <p className="text-sm text-coral">For Professionals</p>
          <h2 className="mt-3 text-2xl md:text-3xl">1:1 coaching</h2>

          <div className="mt-8 divide-y divide-line border-t border-line">
            {PROFESSIONAL_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="grid gap-2 border-l-2 border-coral py-6 pl-6 md:grid-cols-[1fr_1fr_2fr] md:items-baseline md:gap-8"
              >
                <h3 className="text-xl">{plan.name}</h3>
                <p className="text-lg text-ink">
                  {plan.price}{" "}
                  <span className="text-sm text-muted">{plan.unit}</span>
                </p>
                <p className="text-ink-soft">{plan.description}</p>
              </div>
            ))}
          </div>

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

      <section className="border-t border-line bg-paper-raised py-16">
        <Container>
          <p className="text-sm text-teal">For Corporate</p>
          <h2 className="mt-3 text-2xl md:text-3xl">
            Custom pricing — book a call
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Cohort pricing for outsourcing and staffing firms, and team
            training pricing for Western companies, depends on group size
            and format. Book a call and we&rsquo;ll put together a quote.
          </p>
          <Link
            href="/corporate"
            className="mt-6 inline-block border-b-2 border-teal pb-1 font-medium text-ink"
          >
            Go to For Corporate
          </Link>
        </Container>
      </section>
    </>
  );
}
