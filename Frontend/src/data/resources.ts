export type ResourceCategory = "blog" | "podcast" | "learning";

export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
};

export const RESOURCES: Resource[] = [
  {
    slug: "how-to-push-back-on-a-deadline",
    title: "How to push back on a deadline without sounding difficult",
    excerpt:
      "A simple structure for raising a scope or timeline concern in a way that reads as competent, not combative.",
    category: "blog",
  },
  {
    slug: "why-quiet-in-meetings-reads-as-unsure",
    title: "Why staying quiet in meetings can read as being unsure",
    excerpt:
      "Silence is often the safest-feeling option — and the one most likely to be misread by a Western client or manager.",
    category: "blog",
  },
  {
    slug: "the-first-five-minutes-of-a-client-call",
    title: "The first five minutes of a client call set the tone",
    excerpt:
      "What to say in the opening minutes of a status call to establish confidence before a single technical detail comes up.",
    category: "blog",
  },
  {
    slug: "ep-01-saying-no-to-a-client",
    title: "Episode 1: Saying no to a client without damaging the relationship",
    excerpt:
      "A conversation on how to decline scope creep while keeping the client relationship intact.",
    category: "podcast",
  },
  {
    slug: "ep-02-interviewing-in-a-second-language",
    title: "Episode 2: Interviewing for a technical role in a second language",
    excerpt:
      "What changes about interview prep when you're being evaluated in a language that isn't your first.",
    category: "podcast",
  },
  {
    slug: "direct-vs-indirect-communication-worksheet",
    title: "Worksheet: mapping direct vs. indirect phrasing",
    excerpt:
      "A short exercise for rewriting indirect phrasing into direct, clear statements for client-facing situations.",
    category: "learning",
  },
  {
    slug: "client-call-phrase-bank",
    title: "Phrase bank for common client-call situations",
    excerpt:
      "Ready-to-adapt phrasing for status updates, pushback, and flagging risk early.",
    category: "learning",
  },
];
