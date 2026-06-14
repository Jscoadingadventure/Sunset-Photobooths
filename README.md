# Sunset Photobooths

Marketing website for **Sunset Photobooths** — a Toronto-based premium photobooth rental company.

Built with Next.js, TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Before you go live

Edit [`lib/constants.ts`](lib/constants.ts) to replace placeholders:

- `PLACEHOLDER_EMAIL` — your business email
- `PLACEHOLDER_PHONE` — your phone number
- Package prices, testimonials, and stats

Add real event photos to `public/gallery/` and update the `GALLERY_ITEMS` array in `lib/constants.ts`.

---

## Deploy to Vercel (no domain needed)

You get a free preview URL like `https://sunset-photobooths.vercel.app`.

### Step 1: Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `sunset-photobooths` (or similar)
3. Do **not** initialize with a README

### Step 2: Push the code

```bash
git init
git add .
git commit -m "Initial Sunset Photobooths marketing site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sunset-photobooths.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Add New → Project**
3. Import your `sunset-photobooths` repository
4. Leave all settings as defaults (Vercel auto-detects Next.js)
5. Click **Deploy**

Every push to `main` automatically redeploys.

---

## Connect your domain (when ready)

The site works on the free Vercel URL until you buy a domain.

### Step 1: Buy a domain

Recommended registrars:

- [Namecheap](https://namecheap.com)
- [Squarespace Domains](https://domains.squarespace.com)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

Suggested: `sunsetphotobooths.ca` (ideal for a Toronto business).

### Step 2: Add domain in Vercel

1. Vercel dashboard → your project → **Settings → Domains**
2. Enter your domain (e.g. `sunsetphotobooths.ca`) and click **Add**
3. Add these DNS records at your registrar:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME record**: `www` → `cname.vercel-dns.com`
4. Wait 5–60 minutes for DNS propagation
5. Vercel auto-provisions HTTPS

### Step 3: Update SEO metadata

After your domain is live, update `SITE.url` in [`lib/constants.ts`](lib/constants.ts) and verify `metadataBase` in [`app/layout.tsx`](app/layout.tsx) matches your domain.

---

## Wire up the contact form

The form UI is built but does not send emails yet. Recommended: **Formspree** (free tier).

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your form ID (e.g. `xyzabc123`)
3. In Vercel → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_FORMSPREE_ID` = `your-form-id`
4. Uncomment the Formspree code in [`components/sections/Contact.tsx`](components/sections/Contact.tsx) (marked with `TODO`)
5. Push to GitHub

---

## Project structure

```
app/
  layout.tsx          # Fonts, SEO metadata, JSON-LD
  page.tsx            # Main page composing all sections
  globals.css         # Brand colors and theme
components/
  layout/             # Header, Footer
  sections/           # Hero, Services, Packages, Gallery, etc.
  ui/                 # Button, Card, Accordion, Badge
lib/
  constants.ts        # All site content (edit this!)
  utils.ts            # Utility helpers
public/
  logo.png            # Brand logo
  gallery/            # Your event photos go here
```

## Ongoing maintenance

| Task | How |
|---|---|
| Update text or pricing | Edit `lib/constants.ts`, push to GitHub |
| Add gallery photos | Drop files in `public/gallery/`, update constants |
| Change colors | Edit `app/globals.css` |
| Form not working | Check Vercel env vars and Formspree dashboard |

## Expected costs

- **Vercel hosting**: Free (Hobby plan)
- **Domain (.ca)**: ~$15–20 CAD/year
- **Formspree**: Free up to 50 submissions/month

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
