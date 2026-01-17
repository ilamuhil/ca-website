import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  FileText,
  Handshake,
  Landmark,
  ShieldCheck,
  Store,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <section className="relative overflow-hidden rounded-xl border border-border bg-background">
        <div className="absolute inset-0">
          <Image
            src="/hero-abstract.svg"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="relative p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                Chartered Accountancy Practice
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Audit, tax and compliance - delivered with clarity and professional standards.
              </h1>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Practising Chartered Accountants providing assistance in auditing, accounting
                systems, income tax practice, company law matters, indirect tax matters and
                formation of companies.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/services">
                    View services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-background/80 p-4 backdrop-blur">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Standards-based</p>
                    <p className="text-xs text-muted-foreground">
                      Clear scope, documentation, and ethical approach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-background/80 p-4 backdrop-blur">
                  <FileText className="mt-0.5 h-5 w-5 text-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Practical guidance</p>
                    <p className="text-xs text-muted-foreground">
                      Helpful checklists and service details in each page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <Card className="bg-linear-to-br from-muted/60 via-background to-background">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Services</CardTitle>
            <CardDescription className="text-xs">Core areas of practice</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="grid list-disc grid-cols-1 gap-1 pl-5 text-xs text-muted-foreground sm:grid-cols-2">
              <li>Auditing</li>
              <li>Accounting systems</li>
              <li>Income tax practice</li>
              <li>Company law matters</li>
              <li>Service tax / GST matters</li>
              <li>Sales tax matters</li>
              <li>Formation of companies</li>
            </ul>
          </CardContent>

        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Professional conduct</CardTitle>
            <CardDescription className="text-xs">Clear, compliant communication</CardDescription>
          </CardHeader>
          <CardContent className="pt-0 text-xs text-muted-foreground">
            We follow applicable professional standards and ethical requirements. Information on
            this website is general in nature and not a substitute for formal advice.
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <Card className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-muted/60 via-background to-background"
            aria-hidden="true"
          />
          <CardHeader className="relative pb-3">
            <CardTitle className="text-base">Industries served</CardTitle>
            <CardDescription className="text-xs">Representative sectors (illustrative)</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Factory className="h-4 w-4" aria-hidden="true" />
                <span>Manufacturing and trading</span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4" aria-hidden="true" />
                <span>Retail and services</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <span>SMEs and professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4" aria-hidden="true" />
                <span>Entities with compliance needs</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden md:col-span-2">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <Image src="/service-card-bg.svg" alt="" fill className="object-cover opacity-70" />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-background/20 via-background/70 to-background"
            aria-hidden="true"
          />
          <CardHeader className="relative pb-3">
            <CardTitle className="text-base">Representative engagements</CardTitle>
            <CardDescription className="text-xs">
              Examples of typical work handled (scope varies by engagement).
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Audit support for a mid-sized trading business",
                "Accounting process cleanup and month-end close checklist",
                "Income tax compliance and notice response support",
                "Indirect tax reconciliation working papers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-md border border-border bg-background/60 p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <Card className="relative overflow-hidden md:col-span-2">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <Image src="/hero-abstract.svg" alt="" fill className="object-cover opacity-70" />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-background/20 via-background/70 to-background"
            aria-hidden="true"
          />
          <CardHeader className="relative pb-3">
            <CardTitle className="text-base">How we work</CardTitle>
            <CardDescription className="text-xs">A clear process from enquiry to deliverables</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <ol className="grid gap-2 sm:grid-cols-2">
              {[
                "Understand your requirement and scope",
                "Agree engagement terms in writing",
                "Collect documents and perform checks",
                "Share outcomes and next steps",
              ].map((step) => (
                <li key={step} className="flex items-start gap-2 rounded-md border border-border bg-background/60 p-3">
                  <Handshake className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-muted/60 via-background to-background"
            aria-hidden="true"
          />
          <CardHeader className="relative pb-3">
            <CardTitle className="text-base">Testimonials</CardTitle>
            <CardDescription className="text-xs">
              Common feedback themes (general statements, no client endorsements).
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-3 text-xs text-muted-foreground">
            <blockquote className="rounded-md border border-border bg-background/60 p-3">
              “Clear documentation and timely communication.”
            </blockquote>
            <blockquote className="rounded-md border border-border bg-background/60 p-3">
              “Helpful checklists that made compliance easier.”
            </blockquote>
            <blockquote className="rounded-md border border-border bg-background/60 p-3">
              “Professional approach with practical guidance.”
            </blockquote>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
