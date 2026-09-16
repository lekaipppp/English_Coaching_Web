import type { Metadata } from "next";
import Container from "@/components/Container";
import ResourceList from "@/components/ResourceList";
import { RESOURCES } from "@/data/resources";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on speaking up, pushing back on deadlines, and handling client calls with confidence.",
};

const ITEMS = RESOURCES.filter((r) => r.category === "blog");

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            Blog
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Articles on speaking up, pushing back on deadlines, and handling
            client calls with confidence.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ResourceList items={ITEMS} />
        </Container>
      </section>
    </>
  );
}
