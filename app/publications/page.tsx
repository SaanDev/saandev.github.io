import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PublicationsClient } from "../components/PublicationsClient";
import { publicationCategories, publications, siteConfig } from "../data/content";

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
    "Peer-reviewed journal and conference publications by Sahan S Liyanage.",
  author: { "@type": "Person", name: siteConfig.name },
  hasPart: publications.map((publication) => ({
    "@type": "ScholarlyArticle",
    name: publication.title,
    author: publication.authors,
    datePublished: publication.year,
    isPartOf: publication.venue,
    url: publication.links[0]?.href,
  })),
};

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Publications"
        title="Research outputs, clearly documented."
        description="Peer-reviewed work in solar radio astronomy, coronal-shock analysis, and scientific software, with direct links to each publication and its supporting research materials."
      />

      <section className="section publication-categories-section">
        <div className="container">
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
              <p className="eyebrow">Verified publication index</p>
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
            <h2>Citations ready to use</h2>
          </div>
          <div className="prose-large">
            <p>
              Each entry includes the full author list, year, title, venue, publication details, a concise research summary, and the available DOI, PDF, thesis, or code links.
            </p>
            <p>
              Copyable BibTeX records and scholarly-article metadata make the work easier to cite and discover.
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
