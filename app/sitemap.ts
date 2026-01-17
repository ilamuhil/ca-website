import type { MetadataRoute } from "next";

import { getAllServiceSlugs } from "@/lib/content/services";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllServiceSlugs();

  const base = siteConfig.url.replace(/\/$/, "");

  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.5 },
    ...slugs.map((slug) => ({
      url: `${base}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

