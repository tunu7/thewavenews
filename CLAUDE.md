# The Wave News

News website for Arunachal Pradesh and Northeast India. Next.js 16 (App Router), React 19, Tailwind CSS v4, plain JavaScript (JSX — no TypeScript).

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build — run before pushing
npm run lint     # ESLint (eslint-config-next)
npm start        # serve the production build
```

There is no test suite yet. Verify changes with `npm run build && npm run lint`, and check the page in the browser.

## Structure

```
src/
  app/                  # App Router — routes, layout, global styles
    layout.jsx          # Root layout: fonts, metadata, Navbar/BreakingNews/Footer
    page.jsx            # Home: Hero + Latest News grid
    news/[id]/page.jsx  # Article page, statically generated from src/data/news.js
    not-found.jsx       # 404 page
    sitemap.js, robots.js, icon.svg
    globals.css         # Tailwind import + design tokens (@theme)
  components/           # Navbar, BreakingNews, Hero, NewsCard, Footer
  data/news.js          # Article data (placeholder — no CMS/database yet)
  lib/                  # Small helpers (formatDate, site config)
```

Import from `src` with the `@/` alias (`@/components/Hero`), not relative `../` paths.

## Conventions

- **Server Components by default.** Only add `"use client"` when a component needs state, effects or browser APIs (currently just `Navbar`).
- **Styling is Tailwind only.** Use the design tokens from `globals.css` rather than raw colours:
  - Colours: `ink` (text), `paper` (background), `rule` (borders), `muted` (secondary text), `brand` / `brand-dark` (blue accent), `alert` (red — reserve for Breaking / Top Story)
  - Fonts: `font-serif` (Newsreader) for headlines and article body, `font-sans` (Inter) for UI text
  - Section headings use the `border-t-2 border-ink pt-4` rule style; category labels are `text-xs font-semibold uppercase tracking-wider text-brand`
- **Images** use `next/image`. Remote hosts must be allowed in `next.config.mjs` → `images.remotePatterns` (only `images.unsplash.com` today).
- **Article shape** (`src/data/news.js`): `id` (number), `title`, `image`, `category`, `author`, `date` (`YYYY-MM-DD`), `readTime` (minutes), `description`, `content`. Blank lines in `content` split paragraphs.
- Format dates with `formatDate` from `@/lib/format` (fixed UTC timezone to avoid hydration mismatches).
- Route params are async in Next.js 16: `const { id } = await params;`
- Icons come from `react-icons` (`react-icons/fa`).

## Deployment

- Hosted on Vercel, project `tunus-projects/thewavenews` → https://thewavenews.vercel.app
- **Every push to `main` deploys to production** via the GitHub integration. Make sure `npm run build` passes before pushing.
- `vercel.json` pins the framework to Next.js (the Vercel project was originally set up for Vite).
- Environment variables: see `.env.example`. Never commit `.env*` files; `.vercel/` is also ignored.

## Not built yet

- Search box, category pages and footer links are placeholders (they link to `/`).
- `@supabase/supabase-js` and `@supabase/ssr` are installed but not used yet. If wiring it up, add the env vars from `.env.example`.
