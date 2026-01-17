import Link from "next/link";
import { Mail, MessageSquare, Phone, ShieldCheck } from "lucide-react";

import { getAllServicesMeta } from "@/lib/content/services";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export async function SiteFooter() {
  const services = await getAllServicesMeta();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="text-sm text-zinc-300">
              Practising Chartered Accountants providing professional services in audit, accounting,
              tax and compliance.
            </p>
            <p className="flex items-start gap-2 text-xs text-zinc-400">
              <span className="italic">{siteConfig.address.full}</span>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Quick links</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-zinc-100 hover:underline hover:underline-offset-4" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Services</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    className="hover:text-zinc-100 hover:underline hover:underline-offset-4"
                    href={`/services/${s.slug}`}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Contact</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-zinc-200" aria-hidden="true" />
                <Link className="hover:text-zinc-100 hover:underline hover:underline-offset-4" href="/contact">
                  Get in touch
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-zinc-200" aria-hidden="true" />
                <a className="underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-zinc-200" aria-hidden="true" />
                <a className="underline underline-offset-4" href={`tel:${siteConfig.phone.replace(/\\s+/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1 text-xs text-zinc-400">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <span>Ethical and standards-based approach</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 bg-zinc-900">
        <div className="mx-auto w-full max-w-5xl px-4 py-3 text-[11px] leading-relaxed text-zinc-300 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            <p>
              Disclaimer: Information on this website is general in nature and does not constitute professional advice.
              Engagements are undertaken only after agreeing scope and terms in writing.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
        <div className="mx-auto w-full max-w-5xl px-4 py-2 text-center text-[12px] sm:px-6">
          <span>Made with </span>
          <span aria-hidden="true">❤️</span>
          <span className="sr-only">love</span>
          <span> by </span>
          <a
            className="font-medium text-zinc-100 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            href="https://ilamuhil.com"
            target="_blank"
            rel="noreferrer"
          >
            Ilamuhil
          </a>
        </div>
      </div>
    </footer>
  );
}

