import type { Resource } from "@/data/resources";

export default function ResourceList({ items }: { items: Resource[] }) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((item) => (
        <article key={item.slug} className="py-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg">{item.title}</h2>
            <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-muted">
              Placeholder
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-ink-soft">{item.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
