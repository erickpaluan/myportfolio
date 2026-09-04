# Erick Paluan — Portfolio

My personal portfolio and professional website.

The project presents my work across **UI Engineering, Design Systems, front-end architecture, product thinking and visual design**, bringing together the two sides of my background: design and software engineering.

## Live website

[erickpaluan.com.br](https://erickpaluan.com.br)

## What this project includes

- bilingual content with `next-intl`
- project and case study pages
- responsive UI
- dark and light theme support
- SEO metadata
- sitemap and robots configuration
- RSS/feed support
- Vercel Analytics
- Vercel Speed Insights
- MDX/content tooling

## Tech stack

**Framework**  
Next.js 14 · React 18

**Language**  
TypeScript

**Styling**  
Tailwind CSS

**Internationalization**  
next-intl

**Content**  
MDX · next-mdx-remote · KaTeX

**Analytics**  
Vercel Analytics · Speed Insights

## Project structure

```text
.
├── messages/          # localized content
├── public/            # static assets
├── src/
│   ├── app/           # Next.js App Router
│   └── ...
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Running locally

This project declares pnpm as its package manager.

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
pnpm build
pnpm start
```

## Why this repository exists

The portfolio is not only a gallery of finished work.

It is also an active front-end project where I can refine:

- information architecture
- component structure
- visual consistency
- accessibility
- localization
- performance
- the relationship between design decisions and implementation

## Status

**Active.**

The website evolves alongside my professional work, projects and positioning.

## License

MIT
