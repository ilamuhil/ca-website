import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Chartered Accountant",
    "Chartered Accountants",
    "Auditing",
    "Accounting Systems",
    "Income Tax",
    "Company Law",
    "GST",
    "Service Tax",
    "Sales Tax",
    "Company Formation",
  ],
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: [{ url: "/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh bg-linear-to-br from-sky-100 via-white to-emerald-100 font-sans text-foreground antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl px-4 py-8 text-[15px] leading-6 sm:px-6 sm:py-9 min-h-[calc(100dvh-200px)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
