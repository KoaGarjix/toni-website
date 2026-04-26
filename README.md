# Toni Website

This repository contains the foundation for a static-first personal website built with Astro. The goal is a clean, maintainable site with simple pages, curated Projects, and experimental Lab notes.

## Folder Structure

```text
.
├── docs/
│   ├── PLANNING.md
│   ├── AI_INSTRUCTIONS.md
│   └── CONTENT_GUIDE.md
└── site/
    ├── src/
    │   ├── content/
    │   │   ├── projects/
    │   │   └── lab/
    │   ├── layouts/
    │   └── pages/
    ├── public/
    └── package.json
```

## Run Locally

From the Astro project folder:

```bash
cd site
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321/`.

## Deployment

The site is deployed through Cloudflare Pages. Build the Astro project from `site/` and publish the generated `site/dist/` output.

## Content

Markdown content lives in:

- `site/src/content/projects/`
- `site/src/content/lab/`

Projects are curated, presentable entries. Lab entries are for experiments, drafts, learning notes, and setup notes.

Each entry uses frontmatter with:

- `title`
- `description`
- `date`
- `status`
- `tags`

Project entries are listed at `/projects` and have detail pages at `/projects/[slug]`. Lab entries are listed at `/lab` and have detail pages at `/lab/[slug]`.

## Docs

The `docs/` folder contains planning notes, AI working instructions, and the content guide. Use `docs/PLANNING.md`, `docs/AI_INSTRUCTIONS.md`, and `docs/CONTENT_GUIDE.md` as the source of direction for structure, tone, and content decisions.
