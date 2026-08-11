import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PersonalStoryGallery } from "../components/PersonalStoryGallery";
import { musicImages, wildlifeFieldImages } from "../data/personal-images";

export const metadata: Metadata = {
  title: "Beyond",
  description:
    "Music, naturalist work, and wildlife photography by Sahan S Liyanage.",
  alternates: { canonical: "/beyond" },
  openGraph: {
    title: "Beyond | Sahan S Liyanage",
    description: "Creative practice, field observation, natural history, and music.",
    url: "/beyond",
  },
};

const pursuits = [
  {
    number: "01",
    title: "Naturalist",
    text: "Part-time naturalist work brings together a personal commitment to wildlife, careful field observation, and communication about the living world.",
  },
  {
    number: "02",
    title: "Wildlife Photography",
    text: "A visual record of species, behaviour, habitats, and field encounters, developed through patient and respectful observation.",
  },
  {
    number: "03",
    title: "Music Pursuits",
    text: "A continuing creative practice shaped through ensemble performance, rhythm, rehearsal, and the shared focus of the stage.",
  },
];

export default function BeyondPage() {
  return (
    <main id="main-content" className="photo-page beyond-page">
      <PageIntro
        eyebrow="Beyond"
        title="Wild places, patient observation, and rhythm."
        description="Natural history, wildlife photography, and music are the personal pursuits through which I spend time outdoors, pay attention, and create."
        dark
      />

      <section className="section beyond-pursuits-section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Pursuits</p>
              <h2>Ways of seeing and making</h2>
            </div>
            <p>Three personal pursuits shaped by curiosity, attention, and sustained engagement.</p>
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

      <section className="section personal-story-section personal-story-section-music" id="music">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">02 · Rhythm & performance</p>
              <h2>Music in rehearsal and on stage</h2>
            </div>
            <div>
              <p>
                Music is built through listening closely, responding in real time, and contributing to a larger ensemble. Rehearsal, performance, and musical direction remain an important creative practice in my life.
              </p>
            </div>
          </div>
          <PersonalStoryGallery images={musicImages} label="Sahan's music performances" />
        </div>
      </section>
    </main>
  );
}
