# Independent Building Science and Forensics (IBSF) – Website

Premium, litigation-grade website for **Independent Building Science and Forensics (IBSF)** — forensic building investigations in Southampton, Winchester & London. Instrument-led, data-logged diagnostics for damp, moisture, water ingress, ventilation failure and building pathology. Reports for disputes, insurance and litigation. Domain: **IndependentBuildingForensics.co.uk**. Built with Astro and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # output in dist/
npm run preview
```

## Configuration

Edit **`src/site.config.ts`** before going live:

- **NAP** (Name, Address, Phone): Match your Google Business Profile exactly. Address is **15 Rockstone Pl, Southampton SO15 2EP**.
- **buildingName**: "Director General's House" — used in narrative copy only, not in NAP.
- **phone**, **email** (`enquiries@independentbuildingforensics.co.uk`), **whatsapp**, **bookingUrl**: Contact and booking links.
- **formEndpoint**: Formspree or Netlify Forms endpoint.
- **mapEmbedUrl**: Google Maps embed for 15 Rockstone Pl.

## Structure

- **`src/pages/`** – Home, about, contact, blog, lead-magnet, 3 location pages, 5 high-intent landing pages, dynamic service routes.
- **`src/components/`** – Header, Footer, Icon.
- **`src/data/`** – Service and location copy.
- **`src/content/blog/`** – Markdown blog posts.
- **`public/images/`** – Conversion images (thermal investigation, moisture mapping, instruments, report diagrams).
- **`public/`** – `robots.txt`, `sitemap.xml`, favicon (add your own).

## SEO & Schema

- Meta titles and descriptions on all pages with high-intent keywords.
- JSON-LD: **ProfessionalService** on home + each location page; **Service** on each service page; **FAQPage** on home page.
- NAP consistent across footer, contact, location pages and schema.
- Static `public/sitemap.xml` with all pages.

## High-Intent Pages

- `/damp-survey-near-me` – captures "damp survey near me" searches.
- `/building-inspection-near-me` – captures "building inspection near me" searches.
- `/landlord-tenant-damp-dispute` – captures dispute-related searches.
- `/independent-building-expert-london` – captures London expert searches.
- `/mould-inspection-london` – captures mould/black mould London searches.

## Deploy

Static output to `dist/`. Deploy to Vercel, Netlify or any static host. Update `site` in `astro.config.mjs` if domain changes.
