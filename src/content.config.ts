import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
});

export const collections = {
  // English
  positive: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/positive' }),
    schema: articleSchema,
  }),
  performance: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/performance' }),
    schema: articleSchema,
  }),
  // Japanese
  'ja-positive': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/ja/positive' }),
    schema: articleSchema,
  }),
  'ja-performance': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/ja/performance' }),
    schema: articleSchema,
  }),
};
