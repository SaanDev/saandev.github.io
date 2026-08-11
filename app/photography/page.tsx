import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PhotographyGallery } from "../components/PhotographyGallery";
import { galleryItems, type GalleryCategory } from "../data/photography";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Astrophotography, wildlife photography, landscapes, and other photographic work by Sahan S Liyanage.",
  alternates: { canonical: "/photography" },
  openGraph: {
    title: "Photography | Sahan S Liyanage",
    description:
      "A dark, immersive collection of astrophotography, wildlife, landscapes, and other photographic work.",
    url: "/photography",
  },
};

const collections: { number: string; title: GalleryCategory; text: string }[] = [
  {
    number: "01",
    title: "Astrophotography",
    text: "Moonlight, eclipses, the Milky Way, and transient objects recorded under the night sky.",
  },
  {
    number: "02",
    title: "Wildlife Photography",
    text: "Birds and animals photographed through patient, low-impact observation in the field.",
  },
  {
    number: "03",
    title: "Other Photography",
    text: "Landscapes, architecture, light, and moments that sit outside the two primary collections.",
  },
];

export default function PhotographyPage() {
  return (
    <main id="main-content" className="photo-page">
      <PageIntro
        eyebrow="Photography"
        title="A living archive of light."
        description="A growing collection moves between the night sky, wildlife encounters, landscapes, architecture, and the changing character of light."
        dark
      />

      <section className="photo-index-section">
        <div className="container photo-index-grid">
          {collections.map((collection) => (
            <div key={collection.title}>
              <span>{collection.number}</span>
              <strong>
                {String(galleryItems.filter((item) => item.category === collection.title).length).padStart(2, "0")} photographs
              </strong>
              <h2>{collection.title}</h2>
              <p>{collection.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="photo-gallery-section" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="photo-gallery-heading">
            <p className="eyebrow">The collection</p>
            <h2 id="gallery-heading">{galleryItems.length} frames. Three ways of seeing.</h2>
            <p className="gallery-context-note">
              Browse the complete collection or isolate one body of work. Select any frame for an uninterrupted full-screen view; arrow keys and swipe gestures move through the sequence.
            </p>
          </div>
          <PhotographyGallery />
          <p className="gallery-copyright">
            Unless otherwise stated, all photographs are © Sahan S Liyanage.
          </p>
        </div>
      </section>
    </main>
  );
}
