# Studio Console - Prasanna

An interactive architecture portfolio for **Prasanna Chaurasia**, designed as a premium studio operating interface rather than a conventional portfolio page.

The website presents conceptual architecture, real projects, BIM documentation, CV material, and portfolio PDFs through a calmer workstation-style experience with project filters, search, live source preview, and case-study routes.

## Current Direction

**Studio Console - Prasanna** treats the portfolio as a working design archive.

The interface is built around three ideas:

- **Authorship:** projects are presented as a curated body of work rather than a folder of disconnected sheets.
- **Range:** conceptual futures, urban systems, BIM, real projects, and CV details are separated clearly while still feeling like one practice.
- **Interaction:** visitors can filter, search, select, preview, and move through the portfolio like a compact architectural workstation.

## Current Pages

- `index.html` - refined interactive workstation homepage with source preview, filters, search, project dock, and selected brief.
- `work.html` - selected work index.
- `conceptuals.html` - conceptual project family.
- `real-projects.html` - professional and real project area.
- `bim.html` - BIM and documentation area.
- `profile.html` - profile, CV, software, education, and experience structure.
- `archive.html` - portfolio PDF archive.
- `contact.html` - contact and availability page.
- `aeon-flux.html` - Aeon Flux case-study route.
- `resilient-nexus.html` - The Resilient Nexus case-study route.
- `veridian-elan.html` - Veridian Elan BIM case-study route.

## Interaction Features

- Project filtering by `All`, `Conceptual`, `Urban`, `BIM`, and `Real`.
- Search across project names, tags, categories, and descriptions.
- Clickable project dock that updates the live preview, project title, source link, and selected brief.
- Responsive layout designed to avoid overlap on desktop and mobile.
- Mobile navigation with active route highlighting.
- Direct PDF access from archive and project pages.

## Portfolio Sources

The local build links to these source documents:

- `Prasanna_Chaurasia_Portfolio (Conceptuals+Real).pdf`
- `Prasanna_Chaurasia_Portfolio_2025_LowQuality.pdf`
- `Prasanna_Chaurasia_Real Projects.pdf`
- `Veridian Elan - BIM Novatr 2025.pdf`
- `FuturlyxFiguraxUrbanMatrix-The Resilient Nexus-Prasanna-2025_compressed.pdf`
- `Prasanna Chaurasia_Aeon Flux_MCStudio_2025.pdf`
- `Prasanna Chaurasia_CV.pdf`

## Next.js Full Stack Preview

The portfolio has been migrated to a Vercel-primary Next.js app with a Neon-ready project CMS and contact lead capture.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and set:

- `DATABASE_URL` - Neon Postgres connection string.
- `ADMIN_PASSWORD` - password for `/admin`.
- `ADMIN_SESSION_SECRET` - long random value for the admin session cookie.
- `NEXT_PUBLIC_SITE_URL` - deployed or local site URL.

Without `DATABASE_URL`, the public site uses seeded fallback project data and contact/admin writes return a configuration message.

## Database

Run the schema and seed against Neon:

```bash
npm run db:seed
```

This creates `projects` and `contact_leads`, then seeds the current portfolio projects.

## Deployment

- Vercel is the primary production host. Use the Vercel CLI or dashboard to link the GitHub repo and add the environment variables.
- Netlify is configured through `netlify.toml` with the Next.js plugin as a secondary deployment target.
- Legacy `.html` routes redirect to the new route structure.

## Next Development Goals

- Extract project images from PDFs and replace placeholder imagery with actual portfolio boards/renders.
- Build richer case studies for Aeon Flux, The Resilient Nexus, and Veridian Elan.
- Extract final CV content into the profile page.
- Add a portrait section when the final profile image is available.
- Upload binary PDFs/assets through Git or GitHub web upload so the GitHub Pages version can preview them.
