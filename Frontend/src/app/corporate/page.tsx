import type { Metadata } from "next";
import Container from "@/components/Container";
import Photo from "@/components/Photo";
import {
  CALENDLY_OUTSOURCING_URL,
  CALENDLY_WESTERN_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Corporate — Cohort Training for Outsourcing Firms & Client Teams",
  description:
    "Cohort-based communication training: for outsourcing and staffing firms whose clients renew on how their team communicates, and for Western companies managing international developers and IT staff directly.",
};

const OUTSOURCING_FEATURES = [
  {
    title: "2–4 week cohort format",
    description:
      "Placed developers and IT staff train together in a focused cohort, not a one-off workshop that's forgotten by the next sprint.",
  },
  {
    title: "Real client-call scenarios",
    description:
      "We rehearse the actual situations that strain client relationships: status updates, scope pushback, and delivering bad news early.",
  },
  {
    title: "A retention story for your clients",
    description:
      "Show clients you're investing in how your team communicates, not just what they build — something to point to at renewal time.",
  },
];

const WESTERN_FEATURES = [
  {
    title: "Diagnosis before training",
    description:
      "We start by observing how your team actually communicates in meetings, not by running a generic curriculum on day one.",
  },
  {
    title: "Live small-group sessions",
    description:
      "Training happens with your actual team, on real scenarios from your meetings — not a pre-recorded course.",
  },
  {
    title: "Measurable before-after tracking",
    description:
      "We track specific, observable changes — meeting participation, frequency of proactive updates, comfort raising concerns — so the impact isn't just a feeling.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            For Corporate
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Two tracks, depending on where you sit: outsourcing and staffing
            firms whose clients judge them on more than code, and Western
            companies managing international developers and IT staff
            directly.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap gap-x-10 gap-y-8">
            <input
              type="radio"
              name="corp-tab"
              id="tab-outsourcing"
              defaultChecked
              className="peer/outsourcing hidden"
            />
            <input
              type="radio"
              name="corp-tab"
              id="tab-western"
              className="peer/western hidden"
            />

            <span className="sr-only" id="corp-tab-legend">
              Choose your organization type
            </span>

            <div
              role="tablist"
              aria-labelledby="corp-tab-legend"
              className="flex w-full gap-10 border-b border-line"
            >
              <label
                htmlFor="tab-outsourcing"
                className="cursor-pointer border-b-2 border-transparent pb-4 text-lg text-muted peer-checked/outsourcing:border-amber peer-checked/outsourcing:text-ink"
              >
                Outsourcing &amp; Staffing Firms
              </label>
              <label
                htmlFor="tab-western"
                className="cursor-pointer border-b-2 border-transparent pb-4 text-lg text-muted peer-checked/western:border-teal peer-checked/western:text-ink"
              >
                Western Companies
              </label>
            </div>

            {/* Tab A — Outsourcing & Staffing Firms */}
            <section
              aria-labelledby="tab-outsourcing"
              className="hidden w-full peer-checked/outsourcing:block"
            >
              <div className="pt-12">
                <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
                  <div>
                    <p className="text-sm text-amber">Outsourcing &amp; Staffing Firms</p>
                    <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
                      Your clients don&rsquo;t leave over code quality. They
                      leave over how it feels to work with your team.
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg text-ink-soft">
                      Cohort-based training for the developers and IT staff you
                      place with Western clients, so contracts renew on
                      communication as well as delivery.
                    </p>
                    <a
                      href={CALENDLY_OUTSOURCING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-block border-b-2 border-amber pb-1 font-medium text-ink"
                    >
                      Book a call
                    </a>
                  </div>
                  <Photo
                    src="/images/corporate/fiqih-alfarish-dz2ApK93Idc-unsplash.jpg"
                    alt="A team presenting project results in a meeting room, city skyline behind them"
                  />
                </div>

                <div className="mt-12 divide-y divide-line border-t border-line">
                  {OUTSOURCING_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="grid gap-2 border-l-2 border-amber py-6 pl-6 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-8"
                    >
                      <h3 className="text-xl">{feature.title}</h3>
                      <p className="text-ink-soft">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tab B — Western Companies */}
            <section
              aria-labelledby="tab-western"
              className="hidden w-full peer-checked/western:block"
            >
              <div className="pt-12">
                <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
                  <div>
                    <p className="text-sm text-teal">Western Companies</p>
                    <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
                      The skill is there. The hesitation in meetings is what
                      you&rsquo;re actually losing.
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg text-ink-soft">
                      Training for teams directly managing international
                      developers and IT staff — built around how your team
                      actually communicates, not a generic workshop.
                    </p>
                    <a
                      href={CALENDLY_WESTERN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-block border-b-2 border-teal pb-1 font-medium text-ink"
                    >
                      Book a call
                    </a>
                  </div>
                  <Photo
                    src="/images/corporate/pexels-a-darmel-7710147.jpg"
                    alt="A diverse team discussing results together around a whiteboard"
                  />
                </div>

                <div className="mt-12 divide-y divide-line border-t border-line">
                  {WESTERN_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="grid gap-2 border-l-2 border-teal py-6 pl-6 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-8"
                    >
                      <h3 className="text-xl">{feature.title}</h3>
                      <p className="text-ink-soft">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
