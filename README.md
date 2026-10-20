# polaris

Minimal personal portfolio built with [Astro](https://astro.build/).

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Type-check Astro files |
| `npm run build` | Build the static site |
| `npm run preview` | Preview the production build |

Writeups live in `src/content/writeups` as `.mdx` files. Their metadata is kept in
`src/data/writeups.ts`, which generates both the overview filters and one static
route per writeup.
