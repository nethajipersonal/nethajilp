# Portfolio

Next.js 16 + TypeScript + Tailwind CSS portfolio. Projects and the contact form
are backed by Prisma/Postgres; blog posts are backed by MongoDB Atlas.

## Stack

- **Next.js (App Router)** + TypeScript + Tailwind CSS v4
- **Prisma 6** + PostgreSQL (works with Vercel Postgres / Neon out of the box) —
  projects and contact form submissions
- **MongoDB Atlas** (native `mongodb` driver, see [`src/lib/mongodb.ts`](src/lib/mongodb.ts)) —
  blog posts
- Content (projects, blog posts) falls back to static data in
  [`src/lib/fallback-data.ts`](src/lib/fallback-data.ts) until each database has
  rows, so the site works before either is connected.

## Local development

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL / DIRECT_URL and MONGODB_URI
npm run db:push        # create Postgres tables from prisma/schema.prisma
npm run db:seed        # load starter projects into Postgres
npm run db:seed:blog   # load starter posts into MongoDB
npm run dev
```

Without `DATABASE_URL`/`MONGODB_URI`, the site still runs and renders the fallback
content — the contact form just won't be able to save messages, and blog posts
won't be editable.

## Connecting a Postgres database on Vercel

1. Push this project to GitHub and import it into Vercel (**Add New → Project**).
2. In the Vercel project, go to **Storage → Create Database → Postgres** (powered by
   Neon) and create a database.
3. Click **Connect Project** to link it — Vercel will add Postgres connection env
   vars to your project automatically.
4. Open **Project Settings → Environment Variables** and make sure two variables
   exist (rename/add if Vercel used different names for the pooled/direct URLs):
   - `DATABASE_URL` — the **pooled** connection string
   - `DIRECT_URL` — the **direct** (non-pooled) connection string
5. Redeploy. On build, `prisma generate` runs automatically (see `postinstall` /
   `build` scripts in `package.json`).
6. Push the schema and seed data to the production database from your machine:
   ```bash
   vercel env pull .env        # pulls the Vercel env vars locally
   npm run db:push
   npm run db:seed
   ```

After that, projects can be managed with `npm run db:studio` (Prisma Studio), and
contact form submissions land in the `contact_messages` table.

## Connecting MongoDB Atlas for the blog

1. In [MongoDB Atlas](https://cloud.mongodb.com), create (or reuse) a cluster and
   a database user, then grab its connection string
   (`mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority`).
2. Add it as `MONGODB_URI` in `.env` locally, and in Vercel under
   **Project Settings → Environment Variables** for production.
3. Seed the starter posts: `npm run db:seed:blog` (safe to re-run — it upserts by
   slug and won't duplicate).
4. In Atlas Network Access, allow connections from `0.0.0.0/0` (or Vercel's IP
   ranges) so the deployed app can reach the cluster.

Posts live in the `posts` collection of the `portfolio` database. Add/edit them
directly in Atlas, or extend `scripts/seed-blog.ts`.

## Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server                    |
| `npm run build`        | `prisma generate` + production build    |
| `npm run lint`         | ESLint                                  |
| `npm run format`       | Prettier (writes)                       |
| `npm run db:push`      | Sync `prisma/schema.prisma` to Postgres |
| `npm run db:seed`      | Seed starter projects into Postgres     |
| `npm run db:seed:blog` | Seed starter blog posts into MongoDB    |
| `npm run db:studio`    | Open Prisma Studio                      |
