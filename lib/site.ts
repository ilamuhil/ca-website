export const siteConfig = {
  name: "Ilamurugu Associates",
  description:
    "Practising Chartered Accountants offering professional services in auditing, accounting systems, income tax practice, company law matters, indirect tax matters, and formation of companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: "ilamuruguassociates@gmail.com",
  phone: "+91 7200190475",
  address: {
    line1: "No 18,Old 17, Flat B Shree Apartments",
    line2: "New 7th Main Road,",
    line3: "RA Puram, Chennai, Tamil Nadu, 600028",
    country: "India",
    full:
      "No 18,Old 17, Flat B Shree Apartments, New 7th Main Road, RA Puram, Chennai, Tamil Nadu, 600028 India",
  },
} as const;

