# 🎵 Space Heard Us — Admin Guide

## Accessing the Admin Panel
Visit: `your-site.com/admin`
Password: `spaceheardus2025` *(change this in `/app/admin/page.tsx`)*

---

## What You Can Edit in the Admin Panel (No Code!)

### 🏠 Home Tab
- Hero title and subtitle
- Mission statement text

### 🎵 Players Tab
- Player names, roles, and bios
- Photo paths (after uploading new photos to `/public/images/`)

### 📅 Events Tab
- Page titles
- Group photo caption
- Video titles and descriptions
- Add/remove upcoming events (title, date, location, description)

### ⚙️ Settings Tab
- Site name and tagline
- Volunteer SignupGenius URL

---

## 📸 How to Swap a Player Photo

1. Add your new photo to `/public/images/` (e.g., `courtney-new.jpg`)
2. Go to Admin → Players tab
3. Change the **Photo Path** to `/images/courtney-new.jpg`
4. Click **Save Changes**
5. Run `git add -A && git commit -m "Update photo" && git push origin main`

---

## 🎬 How to Add Performance Videos

1. Place your `.mp4` file in `/public/videos/`
   - Name it `performance1.mp4` or `performance2.mp4`
2. Go to Admin → Events tab
3. Update the **Video File Path** field if needed
4. Push changes to GitHub

> ⚠️ If videos are over 50MB, upload to YouTube and use an `<iframe>` embed instead.

---

## 🔗 How to Update the Volunteer URL

1. Get your real SignupGenius link
2. Go to Admin → Settings tab
3. Paste the URL in the Volunteer URL field
4. Also manually update it in:
   - `/components/Header.tsx` (line with `href="https://www.signupgenius.com/PLACEHOLDER"`)
   - `/app/page.tsx` (two places with the same placeholder)
   - `/app/events/page.tsx` (bottom CTA section)

---

## 🚀 Deploying Changes

After making changes via the admin panel or editing files:

```bash
git add -A
git commit -m "Update site content"
git push origin main
```

Cloudflare will automatically redeploy within ~2 minutes.

---

## 📂 Key File Locations

| What | Where |
|------|-------|
| All site text & content | `/content/site-content.json` |
| Player/group photos | `/public/images/` |
| Performance videos | `/public/videos/` |
| Navigation menu | `/components/Header.tsx` |
| Home page | `/app/page.tsx` |
| Players page | `/app/meet-the-players/page.tsx` |
| Events page | `/app/events/page.tsx` |
| Admin panel | `/app/admin/page.tsx` |
