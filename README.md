# The Wave News

Delivering trusted news from Arunachal Pradesh and Northeast India.

**Live site:** https://thewavenews.vercel.app

Built with [Next.js](https://nextjs.org) (App Router), React and [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional — see below
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Check the code with ESLint           |

## Project structure

```
src/
  app/          Pages and layout (App Router)
  components/   Navbar, BreakingNews, Hero, NewsCard, Footer
  data/         Article data (news.js)
  lib/          Helpers
```

## Adding an article

Articles currently live in `src/data/news.js`. Add an object to the array:

```js
{
  id: 7,                       // unique number, used in the URL (/news/7)
  title: "Headline",
  image: "https://images.unsplash.com/photo-…",
  category: "Arunachal",
  author: "Staff Reporter",
  date: "2026-10-01",          // YYYY-MM-DD
  readTime: 3,                 // minutes
  description: "One or two sentence summary.",
  content: "First paragraph.\n\nSecond paragraph."
}
```

Images from a new domain must be added to `images.remotePatterns` in `next.config.mjs`.

## Environment variables

See `.env.example`. None are required to run the site locally.

| Variable               | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for the sitemap, robots.txt and social previews |

## Deployment

The site is connected to Vercel through GitHub: every push to `main` is deployed to production automatically. Run `npm run build` locally before pushing to catch errors.
