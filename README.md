## Ilamurugu and Associates - CA Website

A clean, minimal, ICAI-safe website for a Chartered Accountancy practice built with Next.js App Router.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Install & run

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Features

- **Home / About / Services / Contact** pages
- **Markdown-driven services**:
  - List: `/services`
  - Detail: `/services/[slug]` rendered from `content/services/*.md`
- **Tailwind CSS + shadcn-style components**
- **SEO basics**: metadata, sitemap, robots
- **Contact form** via Web3Forms (optional)

## Contact form (Web3Forms)

This site can submit the contact form via Web3Forms using the official React hook.

- **Required env var**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Reference: [Web3Forms React Plugin](https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-plugin)

## Content editing

### Services (Markdown)

- Add/edit markdown files in `content/services/`
- Each file supports frontmatter:
  - `title`
  - `summary`

## Configuration

Update firm details in `lib/site.ts` (name, email, phone, address, site URL).

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Notes (professional conduct)

Website content is written to be factual and professional, avoids misleading claims, and includes disclaimers. Engagement scope and terms are agreed in writing.
