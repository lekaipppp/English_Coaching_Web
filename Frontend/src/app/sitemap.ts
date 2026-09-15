import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/professionals", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/corporate", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/resources", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
