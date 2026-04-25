# Content Guide

This guide defines how Projects and Lab entries should be written.

## Projects vs Lab

Projects are curated and presentable. Use them for work, builds, ideas, or prototypes that are clear enough to show as part of the main portfolio.

Lab entries are experimental. Use them for drafts, learning notes, AI-assisted builds, rough ideas, unfinished explorations, and technical notes that may change over time.

## Required Frontmatter

Every Project and Lab Markdown entry must include:

```md
---
title: "Entry Title"
description: "A short summary of the entry."
date: 2026-04-25
status: "draft"
tags:
  - Astro
  - Notes
---
```

Fields:

- `title`: Clear title shown in lists.
- `description`: One short sentence explaining the entry.
- `date`: Use `YYYY-MM-DD`.
- `status`: Current state of the entry.
- `tags`: Short labels for topics, tools, or themes.

## Suggested Status Values

Use simple lowercase values:

- `draft`
- `in-progress`
- `published`
- `archived`
- `experiment`

Projects usually use `draft`, `in-progress`, `published`, or `archived`.

Lab entries may also use `experiment`.

## Tag Style

Keep tags short and consistent.

Good examples:

- `Astro`
- `AI`
- `Frontend`
- `Notes`
- `Learning`

Avoid long tags, joke tags, and near-duplicates like `frontend`, `Front-end`, and `Frontend`.

## File Naming

Use lowercase, hyphen-separated file names:

```text
sample-project.md
astro-content-notes.md
ai-assisted-build.md
```

The file name should describe the entry clearly. Do not use spaces, dates, or vague names like `test.md`.

## When It Belongs In Projects

Put something in Projects when:

- It is curated enough to show publicly.
- It represents a build, idea, or piece of work clearly.
- The description can be understood without extra context.
- It feels more presentable than experimental.

## When It Belongs In Lab

Put something in Lab when:

- It is a draft, experiment, or learning note.
- It may be incomplete or change later.
- It documents a process, test, or exploration.
- It is useful to keep, but not polished enough for Projects.

## Project Example

```md
---
title: "Personal Website Foundation"
description: "A simple Astro foundation for a static personal website."
date: 2026-04-25
status: "in-progress"
tags:
  - Astro
  - Website
---

This project documents the first version of a personal website structure, including basic pages, navigation, and Markdown-based content.
```

## Lab Example

```md
---
title: "Markdown Content Experiment"
description: "A small test of using Astro content collections for future notes."
date: 2026-04-25
status: "experiment"
tags:
  - Astro
  - Learning
---

This lab note explores how Markdown entries can be used for lightweight content without adding a CMS or database.
```
