import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Practising Chartered Accountants providing professional services in auditing, accounting systems, income tax practice, company law matters, indirect tax matters, and formation of companies.",
};

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <section className="relative overflow-hidden rounded-xl border border-border bg-background">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/about-hero.svg" alt="" fill className="object-cover opacity-95" priority />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-background/25 via-background/80 to-background" aria-hidden="true" />
        <div className="relative p-7 sm:p-9">
          <h1 className="text-2xl font-semibold tracking-tight">About</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            A practising firm of Chartered Accountants focused on professional standards, clear
            documentation and practical guidance.
          </p>
        </div>
      </section>

      <div className="space-y-2">
        <p className="text-muted-foreground">
          Practising profession of Chartered Accountants providing professional services in:
        </p>
      </div>
      <Separator />
      <ul className="list-disc pl-5 text-muted-foreground">
        <li>Auditing</li>
        <li>Accounting systems</li>
        <li>Income tax practice</li>
        <li>Company law matters</li>
        <li>Service tax / GST matters</li>
        <li>Sales tax matters</li>
        <li>Formation of companies</li>
      </ul>

      <Separator />

      <div className="space-y-4 text-sm text-muted-foreground">
        <p>
          Our practice is built on clear documentation, timely communication and a standards-based
          approach to every engagement. We aim to be practical and thorough, with checklists and
          working papers that make ongoing compliance easier for clients.
        </p>
        <p>
          <span className="font-medium text-foreground">Professional ethics:</span> We follow
          applicable professional standards and the ICAI Code of Ethics. We maintain confidentiality
          and independence as applicable, and we avoid any representation that could be misleading.
        </p>
        <p>
          <span className="font-medium text-foreground">Service dedication:</span> Each assignment is
          approached with care - we confirm scope in writing, request and review supporting documents,
          and provide clear next steps.
        </p>
      </div>
      <Separator />
      <div className="rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
        <p>
          We communicate in a factual and professional manner, and we avoid misleading claims. Any
          engagement is undertaken only after agreeing scope and terms in writing.
        </p>
      </div>
    </div>
  );
}

