import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PublicationsClient } from "../components/PublicationsClient";
import { publicationCategories, siteConfig } from "../data/content";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Verified journal articles, conference contributions, software publications, and other scientific outputs by Sahan S Liyanage.",
  alternates: { canonical: "/publications" },
  openGraph: {
    title: "Publications | Sahan S Liyanage",
    description: "Academic publications and scientific outputs by Sahan S Liyanage.",
    url: "/publications",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Publications by Sahan S Liyanage",
  url: `${siteConfig.siteUrl}/publications`,
  description:
    "A publication list prepared for verified academic citations. Placeholder entries are excluded from scholarly-article markup.",
  author: { "@type": "Person", name: siteConfig.name },
};

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Publications"
        title="Research outputs, clearly documented."
        description="This page is structured for verified journal articles, conference work, software publications, manuscripts, and related scientific outputs. Citation details remain visibly marked until confirmed from an authoritative source."
      />

      <section className="section publication-categories-section">
        <div className="container">
          <div className="publication-editor-note placeholder-note" role="note">
            <strong>Editing note</strong>
            <p>
              Replace all sample publication entries with verified citations from Sahan’s CV, ORCID, Google Scholar, or publication list before publication.
            </p>
          </div>
          <div className="category-strip" aria-label="Publication categories">
            {publicationCategories.map((category, index) => (
              <div key={category}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{category}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint publications-browser">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Publication index</p>
              <h2>Browse scientific outputs</h2>
            </div>
            <p>Filter by year, publication type, or research topic.</p>
          </div>
          <PublicationsClient />
        </div>
      </section>

      <section className="section citation-guidance">
        <div className="container split-heading-layout">
          <div>
            <p className="eyebrow">Citation integrity</p>
            <h2>Verified records only</h2>
          </div>
          <div className="prose-large">
            <p>
              Each completed entry can include its full author list, year, title, venue, volume and page information, DOI, abstract, publisher page, PDF, code or data, and a BibTeX export.
            </p>
            <p>
              Scholarly-article structured data will be added only after a citation has been verified. This prevents placeholder details from entering search indexes as academic records.
            </p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </main>
  );
}
