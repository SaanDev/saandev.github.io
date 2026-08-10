import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PersonalStoryGallery } from "../components/PersonalStoryGallery";
import { PhotographyGallery } from "../components/PhotographyGallery";
import { astronomyImages, musicImages, wildlifeFieldImages } from "../data/personal-images";

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
    text: "Music is a continuing creative practice alongside physics, shaped through ensemble performance, rhythm, rehearsal, and the shared focus of the stage.",
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
        description="Music, natural history, field photography, astronomy camps, and public observation are complementary parts of how I observe, document, and engage with the world."
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

      <section className="section personal-story-section personal-story-section-dark" id="wildlife-fieldwork">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">01 · Behind the lens</p>
              <h2>Wildlife photography in the field</h2>
            </div>
            <div>
              <p>
                Wildlife photography asks for patience, respect for distance, an understanding of habitat, and readiness for a moment that may never repeat. These images document me working in the field and learning alongside other photographers.
              </p>
              <p className="personal-story-note">
                Documentary note: these photographs feature me as a wildlife photographer; they are not presented as photographs from my wildlife portfolio.
              </p>
            </div>
          </div>
          <PersonalStoryGallery images={wildlifeFieldImages} label="Sahan working as a wildlife photographer" />
        </div>
      </section>

      <section className="section personal-story-section personal-story-section-light" id="astronomy-life">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">02 · Camps & observation</p>
              <h2>Astronomy as a shared experience</h2>
            </div>
            <div>
              <p>
                My astronomical background was built not only through research, but also through nights at the telescope, solar-observation sessions, student camps, equipment preparation, public demonstrations, and the teamwork of university astronomy societies.
              </p>
              <p>
                These moments connect practical observing with public engagement: setting up instruments, helping students see through a telescope, speaking to an audience, and keeping a programme running after dark.
              </p>
            </div>
          </div>
          <PersonalStoryGallery images={astronomyImages} label="Astronomy camps, outreach, and observation sessions" />
        </div>
      </section>

      <section className="section personal-story-section personal-story-section-music" id="music">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">03 · Rhythm & performance</p>
              <h2>Music in rehearsal and on stage</h2>
            </div>
            <div>
              <p>
                Music offers a different kind of concentration from physics: listening closely, responding in real time, and contributing to a larger ensemble. Performance and musical direction have remained an important part of my university life.
              </p>
            </div>
          </div>
          <PersonalStoryGallery images={musicImages} label="Sahan's music performances" />
        </div>
      </section>

      <section className="photo-gallery-section" id="gallery" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="photo-gallery-heading">
            <p className="eyebrow">Work made behind the camera</p>
            <h2 id="gallery-heading">Photography portfolio</h2>
            <p className="gallery-context-note">
              This separate gallery is reserved for finished wildlife and astronomical photographs taken by me. The documentary images above show my practice and participation, rather than the resulting portfolio work.
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
