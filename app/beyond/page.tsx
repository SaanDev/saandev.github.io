import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PhotographyGallery } from "../components/PhotographyGallery";

export const metadata: Metadata = {
  title: "Beyond",
  description:
    "Music, naturalist work, wildlife photography, and astrophotography by Sahan S Liyanage.",
  alternates: { canonical: "/beyond" },
  openGraph: {
    title: "Beyond | Sahan S Liyanage",
    description: "Creative practice, field observation, natural history, and photography beyond academic research.",
    url: "/beyond",
  },
};

const pursuits = [
  {
    number: "01",
    title: "Music Pursuits",
    text: "Music is a continuing creative practice alongside physics. This section will later include instruments, performances, recordings, and selected milestones.",
  },
  {
    number: "02",
    title: "Naturalist",
    text: "Part-time naturalist work brings together a personal commitment to wildlife, careful field observation, and communication about the living world.",
  },
  {
    number: "03",
    title: "Wildlife Photography",
    text: "A visual record of species, behaviour, habitats, and field encounters, developed through patient and respectful observation.",
  },
  {
    number: "04",
    title: "Astrophotography",
    text: "Night-sky, solar, lunar, planetary, and astronomical-event photography, accompanied by observational and technical notes.",
  },
];

export default function BeyondPage() {
  return (
    <main id="main-content" className="photo-page beyond-page">
      <PageIntro
        eyebrow="Beyond"
        title="Observation, creativity, and life beyond research."
        description="Music, natural history, and photography are complementary parts of how I observe, document, and engage with the world. This page will grow as further stories and records are added."
        dark
      />

      <section className="section beyond-pursuits-section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Pursuits</p>
              <h2>Beyond academic work</h2>
            </div>
            <p>Four areas of practice shaped by curiosity, attention, and sustained engagement.</p>
          </div>
          <div className="beyond-pursuits-grid">
            {pursuits.map((pursuit) => (
              <article key={pursuit.title}>
                <span>{pursuit.number}</span>
                <h3>{pursuit.title}</h3>
                <p>{pursuit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-gallery-section" id="gallery" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="photo-gallery-heading">
            <p className="eyebrow">Wildlife and astrophotography</p>
            <h2 id="gallery-heading">Photo gallery</h2>
            <p className="placeholder-note">
              [UPLOAD USER-SUPPLIED IMAGES AND VERIFIED CAPTIONS. EMPTY SLOTS CAN BE HIDDEN WITH THE EDITING-MODE CONTROL.]
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
