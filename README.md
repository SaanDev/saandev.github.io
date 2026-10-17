# Sahan S Liyanage — Academic Website

A multi-page personal academic website for solar and space physics research,
scientific software, publications, photography, outreach, music, and a web CV.

## Content editing

Repeated content is stored in `app/data/content.ts`. Add verified project,
publication, gallery, social-profile, CV, and external-link details there.
Placeholders are intentionally written in square brackets and can be hidden
from the interface with the editing-mode control in the footer.

The contact form requires `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` before it can
deliver email. The canonical site address can be configured with
`NEXT_PUBLIC_SITE_URL`.

## Local development

```bash
npm install
npm run dev
npm test
```

`npm test` creates a production build and verifies every primary page renders.

## GitHub Pages deployment

The `Deploy Next.js site to Pages` workflow builds a static export and deploys
it whenever `main` is updated, or when started manually from GitHub Actions.
In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. The export is configured for this user site at
`https://saandev.github.io` (no repository subpath).

Use `npm run build:pages` to verify the Pages export locally. To enable contact
form delivery, configure `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` as a repository
Actions variable; set `NEXT_PUBLIC_SITE_URL` only if the site's public URL
changes.
