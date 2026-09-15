import type { Metadata } from "next";
import Container from "@/components/Container";
import { RESOURCES, type ResourceCategory } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources — Blog, Podcast & Learning Materials",
  description:
    "Articles, podcast episodes, and learning materials on speaking up, pushing back on deadlines, and handling client calls with confidence.",
};

const CATEGORIES: {
  key: ResourceCategory;
  label: string;
  sectionClass: string;
}[] = [
  {
    key: "blog",
    label: "Blog",
    sectionClass: "hidden w-full peer-checked/all:block peer-checked/blog:block",
  },
  {
    key: "podcast",
    label: "Podcast",
    sectionClass:
      "hidden w-full peer-checked/all:block peer-checked/podcast:block",
  },
  {
    key: "learning",
    label: "Learning materials",
    sectionClass:
      "hidden w-full peer-checked/all:block peer-checked/learning:block",
  },
];

function byCategory(category: ResourceCategory) {
  return RESOURCES.filter((r) => r.category === category);
}

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            Resources
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Articles, podcast episodes, and learning materials on speaking
            up, pushing back on deadlines, and handling client calls with
            confidence. This is a placeholder library — more is on the way.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap gap-x-8 gap-y-8">
            <input
              type="radio"
              name="resource-filter"
              id="filter-all"
              defaultChecked
              className="peer/all hidden"
            />
            <input
              type="radio"
              name="resource-filter"
              id="filter-blog"
              className="peer/blog hidden"
            />
            <input
              type="radio"
              name="resource-filter"
              id="filter-podcast"
              className="peer/podcast hidden"
            />
            <input
              type="radio"
              name="resource-filter"
              id="filter-learning"
              className="peer/learning hidden"
            />

            <span className="sr-only" id="resource-filter-legend">
              Filter resources by category
            </span>

            <div
              role="tablist"
              aria-labelledby="resource-filter-legend"
              className="flex w-full flex-wrap gap-6 border-b border-line pb-4"
            >
              <label
                htmlFor="filter-all"
                className="cursor-pointer text-muted peer-checked/all:font-medium peer-checked/all:text-ink"
              >
                All
              </label>
              <label
                htmlFor="filter-blog"
                className="cursor-pointer text-muted peer-checked/blog:font-medium peer-checked/blog:text-ink"
              >
                Blog
              </label>
              <label
                htmlFor="filter-podcast"
                className="cursor-pointer text-muted peer-checked/podcast:font-medium peer-checked/podcast:text-ink"
              >
                Podcast
              </label>
              <label
                htmlFor="filter-learning"
                className="cursor-pointer text-muted peer-checked/learning:font-medium peer-checked/learning:text-ink"
              >
                Learning materials
              </label>
            </div>

            {CATEGORIES.map(({ key, label, sectionClass }) => (
              <section key={key} aria-label={label} className={sectionClass}>
                <div className="pt-10">
                  <h2 className="text-2xl">{label}</h2>
                  <div className="mt-6 divide-y divide-line border-t border-line">
                    {byCategory(key).map((item) => (
                      <article key={item.slug} className="py-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg">{item.title}</h3>
                          <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-muted">
                            Placeholder
                          </span>
                        </div>
                        <p className="mt-2 max-w-2xl text-ink-soft">
                          {item.excerpt}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
