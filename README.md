# Independent Building Forensics – Website

Premium, litigation-grade website for **Independent Building Science & Forensics** (Southampton, Winchester & London). Positioned as a forensic consultancy—not a trades or contractor site—with instrument-led, defensible reports for disputes, insurance and litigation. Primary domain: **IndependentBuildingForensics.co.uk**. Built with Astro and Tailwind.

## Quick start

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # output in dist/
npm run preview
```

## Configuration

Edit **`src/site.config.ts`** before going live:

- **NAP** (Name, Address, Phone): Set to match your Google Business Profile exactly. Address is **15 Rockstone Pl, Southampton SO15 2EP**; `address.full` must match GBP and directory listings.
- **buildingName**: "Director General's House" is used in narrative copy (e.g. About) only—not in NAP, so it doesn’t conflict with GBP.
- **phone**, **email**, **whatsapp**, **bookingUrl**: Contact and booking links.
- **formEndpoint**: Formspree or Netlify Forms endpoint for the contact and lead-magnet forms.
- **mapEmbedUrl**: Points to 15 Rockstone Pl, Southampton SO15 2EP. Paste the embed from Google Maps (Share > Embed) for the exact pin.

## Structure

- **`src/pages/`** – Home, about, contact, blog, lead-magnet, and dynamic routes for services and locations.
- **`src/components/`** – Header, Footer, Icon.
- **`src/data/`** – Service and location copy and metadata.
- **`src/content/blog/`** – Markdown blog posts.
- **`public/`** – `robots.txt`, `sitemap.xml`, favicon (add your own).

## SEO

- Meta titles and descriptions on all pages; keyword-rich copy in service and location pages.
- JSON-LD: **LocalBusiness** on the home page; **Service** on each service page; **FAQPage** on damp and IAQ service pages.
- NAP in footer and contact; update `site.config.ts` and keep it consistent with GBP.
- Static `public/sitemap.xml` lists all main URLs; add new pages there when you add content.

## Deploy

Build outputs static files to `dist/`. Deploy to Netlify, Vercel or any static host. Point your domain to the build output and set the site URL in `astro.config.mjs` if it changes.
