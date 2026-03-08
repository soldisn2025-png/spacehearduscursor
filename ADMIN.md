# Admin — Edit content without touching code

You can edit **site settings**, **team members**, and **events** (and swap photos) from the browser.

## How to open the admin

1. Deploy your site to Cloudflare (or run it locally).
2. Open: **https://yoursite.com/admin/**  
   (e.g. `https://spaceheardus.org/admin/` or `https://space-heard-us.pages.dev/admin/`)

## First-time setup (GitHub login)

1. Go to **https://yoursite.com/admin/**.
2. Click **Login with GitHub**.
3. Authorize Decap CMS to access your repo (`soldisn2025-png/spaceheardus-v3`).
4. You’ll see collections: **Site settings**, **Team**, **Events**.

## What you can edit

- **Site settings** — Name, tagline, email, phone, description, etc. (from `content/site.json`).
- **Team** — Add/remove/reorder members, change names, roles, bios, and **photos** (from `content/team.json`).  
  Upload a new image and it’s saved under `public/images`; the path is set automatically.
- **Events** — Add/edit/remove events, dates, locations, RSVP links (from `content/events.json`).

After you click **Publish**, changes are committed to GitHub. If the site is connected to Cloudflare Pages, a new deploy will run and the site updates in a few minutes.

## Repo and config

- Admin config: `public/admin/config.yml`.  
  To add more editable sections or fields, edit that file and the matching `content/*.json` structure.
- Donation, volunteer, and social links are still in **content/links.ts** (edit in the repo or add a collection later).
