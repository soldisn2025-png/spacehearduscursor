# Space Heard Us — Website

Production-ready website for **Space Heard Us**, a nonprofit music group that spreads hope through music with kids with and without autism. Built with Next.js, TypeScript, and Tailwind CSS, optimized for Cloudflare (static export).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server               |
| `npm run build`| Static export to `out/`        |
| `npm run start`| Serve `out/` (after build)     |
| `npm run lint` | Run ESLint                     |

## Project structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home
│   ├── team/
│   ├── schedule/
│   ├── gallery/
│   ├── donation/
│   └── connect/
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage sections (Hero, About, etc.)
│   └── ui/                 # CTA, SectionHeading
├── content/                 # Editable content (no layout code)
│   ├── site.ts             # Site name, email, tagline
│   ├── navigation.ts       # Nav links
│   ├── links.ts            # Donate, volunteer, contact form, social URLs
│   ├── organization.ts     # Story, mission, values
│   ├── team.ts             # Team members
│   ├── events.ts           # Schedule/events
│   ├── gallery.ts          # Gallery images
│   └── videos.ts           # Featured videos
└── public/
    ├── images/
    │   ├── hero/           # Hero image (hero.jpg or hero.svg)
    │   ├── team/           # Team photos
    │   └── gallery/        # Gallery photos
    └── videos/
        └── performances/   # Performance videos
```

## Where to place photos and videos

| Asset            | Location                          | Config file        |
|------------------|-----------------------------------|--------------------|
| Hero image       | `public/images/hero/hero.jpg`     | Hero.tsx (HERO_IMAGE) |
| Team photos      | `public/images/team/*.jpg`        | `content/team.ts`  |
| Gallery photos   | `public/images/gallery/*.jpg`     | `content/gallery.ts` |
| Performance videos | `public/videos/performances/*.mp4` | `content/videos.ts` |

See `public/images/*/README.md` and `public/videos/performances/README.md` for details.

**Using your own folders:** To use photos from e.g. `OneDrive\Desktop\Spaceheardus\Pictures` or videos from `Performance Video`, copy the files into `public/images/events/` (for the group photo) and `public/videos/performances/` (for videos), then set the filenames in `content/events-media.ts`.

## Admin (edit without code)

Go to **/admin/** on your deployed site to edit site settings, team, and events (and swap photos) in the browser. See **ADMIN.md** for setup and GitHub login.

## How to update content

- **Site info (name, email, tagline):** `content/site.ts`
- **Team members:** `content/team.ts` — add/edit entries; set `image` to `/images/team/filename.jpg`
- **Events/schedule:** `content/events.ts` — add events with date, time, location, type, RSVP link
- **Gallery:** `content/gallery.ts` — add entries with `src`, `alt`, `category`
- **Videos:** `content/videos.ts` — add entries with `src`, `title`, optional `featured`
- **Donation link:** `content/links.ts` → `donate` (Zeffy, PayPal, Stripe, etc.)
- **Volunteer sign-up link:** `content/links.ts` → `volunteer` (SignupGenius, Google Form, etc.)
- **Contact form URL:** `content/links.ts` → `contactForm` (Formspree, Netlify Form, or your backend)
- **Social links:** `content/links.ts` → `social`

## Cloudflare deployment

The site is built as a **static export** (`output: 'export'` in `next.config.mjs`). To deploy to Cloudflare Pages:

1. **Connect repository**
   - Cloudflare Dashboard → Pages → Create project → Connect to Git (e.g. GitHub).
   - Select this repo.

2. **Build settings**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (leave empty if repo root is the project)

3. **Environment**
   - No env vars required for basic static site. Add if you later use server-side features.

4. **Custom domain**
   - After deploy: Pages → your project → Custom domains → Add `spaceheardus.org` and follow DNS instructions.

### Deploy via Wrangler (optional)

```bash
npm run build
npx wrangler pages deploy out --project-name=space-heard-us
```

## Manual steps before going live

1. Replace placeholder links in `content/links.ts`: donation URL, volunteer sign-up URL, contact form URL, social links.
2. Add real hero image at `public/images/hero/hero.jpg` and set `HERO_IMAGE` in `components/sections/Hero.tsx` if needed.
3. Add team photos under `public/images/team/` and update `content/team.ts` with correct `image` paths.
4. Add gallery images and update `content/gallery.ts`.
5. Add performance videos and update `content/videos.ts` (or remove the featured video section until ready).
6. Optional: Add `public/images/og-image.jpg` (1200×630) for social previews and reference it in `app/layout.tsx` Open Graph images.
7. Optional: Add favicon at `app/favicon.ico`.

## Tech stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Fonts:** Inter, Crimson Pro (Google Fonts)

## License

Private. © Space Heard Us.
