import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Briefcase,
  Building2,
  Calculator,
  FileSearch,
  Landmark,
  ReceiptIndianRupee,
  Settings,
} from "lucide-react";
import type React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllServicesMeta } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services include auditing, accounting systems, income tax practice, company law matters, indirect tax matters, and formation of companies.",
};

export default async function ServicesPage() {
  const services = await getAllServicesMeta();

  const iconBySlug: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> =
    {
      "auditing": FileSearch,
      "accounting-systems": Settings,
      "income-tax-practice": Calculator,
      "company-law-matters": Landmark,
      "service-tax": ReceiptIndianRupee,
      "sales-tax-matters": Building2,
      "formation-of-companies": BookOpenCheck,
    };

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-xl border border-border bg-background">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/service-card-bg.svg" alt="" fill className="object-cover opacity-90" />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-background/30 via-background/75 to-background" aria-hidden="true" />
        <div className="relative p-7 sm:p-9">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Services</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            We provide professional services across audit, accounting, tax and compliance. Service
            details are published as individual pages.
          </p>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        {services.map((s) => (
          (() => {
            const Icon = iconBySlug[s.slug] ?? Briefcase;
            return (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group">
            <Card className="relative h-[176px] overflow-hidden transition-colors group-hover:bg-muted">
              <div className="absolute inset-0">
                <Image src="/service-card-bg.svg" alt="" fill className="object-cover opacity-80" aria-hidden="true" />
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-background/30 via-background/70 to-background" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-[0.08]">
                <Icon className="h-28 w-28" aria-hidden={true} />
              </div>

              <CardHeader className="relative gap-2 p-4 pb-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/70 backdrop-blur">
                      <Icon className="h-4 w-4 text-foreground" aria-hidden={true} />
                    </span>
                    <div>
                      <CardTitle className="text-base leading-5">{s.title}</CardTitle>
                      {s.summary ? (
                        <CardDescription className="mt-2 text-xs leading-5 line-clamp-2">
                          {s.summary}
                        </CardDescription>
                      ) : (
                        <CardDescription className="mt-2 text-xs leading-5 text-muted-foreground">
                          Learn more about this service.
                        </CardDescription>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative flex h-[40px] items-end p-4 pt-0">
                <div className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background/60 text-muted-foreground">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          </Link>
            );
          })()
        ))}
      </div>
    </div>
  );
}

