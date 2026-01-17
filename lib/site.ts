export const siteConfig = {
  name: "Ilamurugu and Associates",
  description:
    "Practising Chartered Accountants offering professional services in auditing, accounting systems, income tax practice, company law matters, indirect tax matters, and formation of companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: "ilamsca@gmail.com",
  phone: "+91 44-24982536",
  address: {
    line1: "Flat No 23, 3rd Floor, Sri Iyyappa Flats,",
    line2: "New No 5, Old No 3 Ramachandra Road,",
    line3: "Mylapore Chennai, Tamil Nadu, 600004",
    country: "India",
    full:
      "Flat No 23, 3rd Floor, Sri Iyyappa Flats, New No 5, Old No 3 Ramachandra Road, Mylapore Chennai, Tamil Nadu, 600004 India",
  },
} as const;

