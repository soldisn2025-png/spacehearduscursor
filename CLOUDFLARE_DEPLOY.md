# Deploy to Cloudflare Pages

Your code is already on GitHub: **https://github.com/soldisn2025-png/spaceheardus-v3**

Follow these steps to put the site live on Cloudflare.

---

## 1. Log in to Cloudflare

Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign in.

---

## 2. Create a Pages project

1. In the left sidebar, click **Workers & Pages**.
2. Click **Create** → **Pages** → **Connect to Git**.
3. Click **Connect GitHub** (or GitLab) and authorize Cloudflare if asked.
4. Choose the repository: **soldisn2025-png/spaceheardus-v3**.
5. Click **Begin setup**.

---

## 3. Set build settings

Use these **exact** values:

| Field | Value |
|-------|--------|
| **Project name** | `space-heard-us` (or any name you like) |
| **Production branch** | `main` |
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | *(leave blank)* |

Then click **Save and Deploy**.

---

## 4. Wait for the first deploy

Cloudflare will run `npm install` and `npm run build` and then deploy the `out` folder. This usually takes 2–5 minutes.

When it’s done, you’ll get a URL like:

`https://space-heard-us.pages.dev`

---

## 5. Add your domain (optional)

1. In your Pages project, go to **Custom domains**.
2. Click **Set up a custom domain**.
3. Enter **spaceheardus.org** and follow the steps.
4. In the Cloudflare DNS tab for your domain, add the CNAME record they show (or use their automatic setup if you use Cloudflare DNS).

---

## Troubleshooting

- **Build fails**  
  Check the build log in the Cloudflare dashboard. Common fixes: ensure **Build output directory** is `out` and **Build command** is `npm run build`.

- **404 on page refresh**  
  For static export, client-side routing is used; direct hits to paths like `/team` need to work. If you see 404s on refresh, in **Settings** → **Builds & deployments** → **Build configuration**, confirm output directory is `out`. For SPA-style fallback, you may need to enable **Redirects** and add a rule so unknown paths serve `index.html` (Cloudflare Pages sometimes offers this for static SPAs).

- **Need to redeploy**  
  Push new commits to the `main` branch on GitHub; Cloudflare will build and deploy automatically.
