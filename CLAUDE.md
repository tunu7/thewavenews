# The Wave News

# Project Instructions

Production-ready regional news platform MVP.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase PostgreSQL, Auth, Storage
- Vercel deployment

## Architecture
- Server Components by default.
- Client Components only when necessary.
- Supabase SSR authentication.
- Use server-side authorization for protected operations.
- PostgreSQL RLS is mandatory.
- Never expose service role credentials.
- Keep business logic separate from UI.
- Use Server Actions for internal mutations where appropriate.

## Core Features
- Public news homepage
- Article detail and category pages
- Search
- Admin dashboard
- Article CRUD
- Editorial workflow
- Image uploads
- SEO metadata

## Database
- profiles
- categories
- articles

All schema changes must use Supabase migrations.

## Engineering Rules
- TypeScript strict mode.
- Avoid unnecessary dependencies.
- Reusable components.
- Validate all user input.
- Handle loading, error and empty states.
- Never trust client-side role checks.
- Do not hardcode production data.
- Never disable security policies to fix errors.

## Workflow
1. Inspect existing code before modifying.
2. Understand dependencies and impact.
3. Implement one feature at a time.
4. Run lint and type checks.
5. Test affected functionality.
6. Report changed files and remaining issues.
7. Never overwrite unrelated working code.
