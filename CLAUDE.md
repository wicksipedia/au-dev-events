# AU Dev Events

Australian software developer events listing site.

## Stack

- **Framework**: Astro 5 + TypeScript (strict)
- **Styling**: TailwindCSS 4 (via @tailwindcss/vite)
- **Package manager**: Bun
- **Linting**: Biome
- **Deployment**: GitHub Pages

## Commands

- `bun run dev` — start dev server
- `bun run build` — type-check + build (`astro check && astro build`)
- `bun run lint` — lint with Biome
- `bun run format` — format with Biome

## Project structure

- `src/data/events/*.md` — event content collection (YAML frontmatter + markdown body)
- `src/data/events/_template.md` — template for new events (excluded from collection by `_` prefix)
- `src/content.config.ts` — Zod schema for event frontmatter
- `src/components/` — Astro components
- `src/layouts/Layout.astro` — base HTML shell
- `src/pages/` — file-based routing
- `src/utils/` — utility functions
- `src/styles/global.css` — TailwindCSS 4 + CSS custom properties

## Adding events

Create a new `.md` file in `src/data/events/` following the naming convention `YYYY-MM-event-name.md`.
Copy frontmatter from `_template.md` and fill in the details.

### State codes

NSW, VIC, QLD, SA, WA, TAS, NT, ACT

### Tag vocabulary

general, cloud, ai, web, mobile, devops, security, data, iot, gaming, dotnet, java, python, javascript, rust, go

## Conventions

- Use Bun (not npm/yarn/pnpm)
- Use Biome for formatting and linting (not ESLint/Prettier)
- Tab indentation, double quotes, trailing commas, semicolons
- `.astro` files are excluded from Biome (Biome doesn't support Astro)
