
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={50}
            height={50}
            priority
          />
          <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="sm:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background sm:hidden">
          <div className="mx-auto w-full max-w-5xl px-4 py-3 sm:px-6">
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

