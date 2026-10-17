import type { Metadata } from "next";
import { PageIntro } from "../../components/PageIntro";
import { PersonalStoryGallery } from "../../components/PersonalStoryGallery";
import { wildlifeFieldImages } from "../../data/personal-images";

export const metadata: Metadata = {
  title: "Nature & fieldwork",
  description: "Time outdoors as a part-time naturalist and wildlife photographer, observing habitats and learning alongside others.",
  alternates: { canonical: "/beyond/nature" },
  openGraph: { title: "Nature & fieldwork | Sahan S Liyanage", description: "Time outdoors as a part-time naturalist and wildlife photographer, observing habitats and learning alongside others.", url: "/beyond/nature" },
};

export default function Page() {
  return <main id="main-content" className="photo-page">
    <PageIntro eyebrow="Beyond · Nature & fieldwork" title="Nature & fieldwork" description="Time outdoors as a part-time naturalist and wildlife photographer, observing habitats and learning alongside others." dark />
      <section className="section personal-story-section personal-story-section-dark" id="wildlife-fieldwork">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">Behind the lens</p>
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
  </main>;
}
