# Independent Building Science & Forensics – Website

Static marketing site for Independent Building Science & Forensics (Southampton, Winchester & London). Built with Astro and Tailwind, optimised for local SEO and conversion.

## Quick start

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # output in dist/
npm run preview
```

## Configuration

Edit **`src/site.config.ts`** before going live:

- **NAP** (Name, Address, Phone): Must match your Google Business Profile and directory listings exactly.
- **phone**, **email**, **whatsapp**, **bookingUrl**: Contact and booking links.
- **formEndpoint**: Formspree or Netlify Forms endpoint for the contact and lead-magnet forms.
- **mapEmbedUrl**: Google Maps embed URL for the contact page.

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
