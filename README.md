# Psychology Notes

A bilingual (EN/JA) study notes website covering introductory **Positive Psychology** and **Performance Psychology**, built as a personal learning record and portfolio project.

## Overview

Study notes from two college general education courses at Georgian College:

- **Positive Psychology** — Well-being, strengths, resilience, flow, and the science of human flourishing
- **Performance Psychology in Sport** — Motivation, focus, goal-setting, and peak performance techniques

## Tech Stack


|            |                                                                                  |
| ---------- | -------------------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build/) v5                                                 |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) v4 + [DaisyUI](https://daisyui.com/) v5 |
| Typography | [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)        |
| Fonts      | Google Fonts — Lora (headings) + Inter (body)                                    |
| Content    | Astro Content Collections (Markdown)                                             |
| i18n       | Astro built-in i18n + Vercel language redirects                                  |
| Deployment | [Vercel](https://vercel.com/)                                                    |


## Key Features

- **Bilingual support** — English and Japanese with automatic language detection via browser `Accept-Language` header (Vercel redirects)
- **Content Collections** — Markdown-based articles managed with Astro's typed content collections and glob loader
- **Static Site Generation** — Zero client-side JavaScript by default; fully static output
- **Responsive design** — Mobile-first layout with DaisyUI components
- **Custom theming** — Nord base theme with custom OKLCH color palette

## Project Structure

```
src/
├── content/
│   ├── positive/         # English articles — Positive Psychology
│   ├── performance/      # English articles — Performance Psychology
│   └── ja/
│       ├── positive/     # Japanese articles — Positive Psychology
│       └── performance/  # Japanese articles — Performance Psychology
├── i18n/
│   └── translations.ts   # UI strings for EN/JA
├── layouts/
│   └── Layout.astro      # Shared layout with navbar & footer
└── pages/
    ├── index.astro        # Home (EN)
    ├── positive/          # Article list & detail pages (EN)
    ├── performance/       # Article list & detail pages (EN)
    └── ja/                # Japanese equivalents
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Adding Articles

Create a Markdown file in the appropriate content directory:

```markdown
---
title: 'Article Title'
description: 'One-line summary'
date: '2024-01-15'
tags: ['Tag1', 'Tag2']
---

Article content here...
```


| Language | Positive Psychology        | Performance Psychology        |
| -------- | -------------------------- | ----------------------------- |
| English  | `src/content/positive/`    | `src/content/performance/`    |
| Japanese | `src/content/ja/positive/` | `src/content/ja/performance/` |


