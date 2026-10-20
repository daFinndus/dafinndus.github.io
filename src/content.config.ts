import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  writeups: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/writeups",
    }),
  }),
};
