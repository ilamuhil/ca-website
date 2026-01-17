import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { markdownToHtml } from "@/lib/content/markdown";

export type ServiceMeta = {
  slug: string;
  title: string;
  summary?: string;
};

export type ServiceDetail = ServiceMeta & {
  html: string;
};

const servicesDir = path.join(process.cwd(), "content", "services");

async function readServiceFilenames() {
  const files = await fs.readdir(servicesDir);
  return files.filter((f) => f.endsWith(".md"));
}

export async function getAllServicesMeta(): Promise<ServiceMeta[]> {
  const files = await readServiceFilenames();
  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = await fs.readFile(path.join(servicesDir, file), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: String(data.title ?? slug),
        summary: data.summary ? String(data.summary) : undefined,
      };
    }),
  );

  return items.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getAllServiceSlugs() {
  const files = await readServiceFilenames();
  return files.map((f) => f.replace(/\.md$/, ""));
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail> {
  const raw = await fs.readFile(path.join(servicesDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    summary: data.summary ? String(data.summary) : undefined,
    html: await markdownToHtml(content),
  };
}

