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
