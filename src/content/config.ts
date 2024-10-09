import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    body: z.optional(z.string()),
  }),
});

export const collections = {
  blog,
};
