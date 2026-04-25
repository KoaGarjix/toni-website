import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entrySchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	status: z.string(),
	tags: z.array(z.string()).default([]),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: entrySchema,
});

const lab = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/lab' }),
	schema: entrySchema,
});

export const collections = { projects, lab };
