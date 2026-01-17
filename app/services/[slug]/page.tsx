import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllServiceSlugs, getServiceBySlug } from "@/lib/content/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const service = await getServiceBySlug(slug);
    return {
      title: service.title,
      description: service.summary,
    };
  } catch {
    return {};
  }
}

export default async function ServiceDetailPage(props: PageProps) {
  const { slug } = await props.params;

  let service: Awaited<ReturnType<typeof getServiceBySlug>>;
  try {
    service = await getServiceBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-xl border border-border bg-background">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/service-card-bg.svg" alt="" fill className="object-cover opacity-90" />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-background/30 via-background/75 to-background" aria-hidden="true" />
        <div className="relative p-3 sm:p-5">
          <p className="text-xs text-muted-foreground">
            <Link href="/services" className="underline underline-offset-4">
              Services
            </Link>{" "}
            / {service.title}
          </p>
          <h1 className="mt-5 text-lg font-semibold tracking-tight sm:text-2xl">{service.title}</h1>
          {service.summary ? <p className="mt-2 text-xs text-muted-foreground">{service.summary}</p> : null}
        </div>
      </section>

      <div
        className="prose prose-sm prose-zinc max-w-none prose-headings:tracking-tight prose-a:underline prose-a:underline-offset-4"
        dangerouslySetInnerHTML={{ __html: service.html }}
      />

      <div className="rounded-lg border border-border bg-muted p-3 text-xs text-muted-foreground">
        <p>
          Note: The above is general information and not a substitute for professional advice. Scope
          and deliverables depend on facts, documents and applicable law.
        </p>
      </div>
    </div>
  );
}

