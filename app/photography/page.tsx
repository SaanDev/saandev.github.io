import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PersonalStoryGallery } from "../components/PersonalStoryGallery";
import { PhotographyGallery } from "../components/PhotographyGallery";
import { wildlifeFieldImages } from "../data/personal-images";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Astrophotography and wildlife photography by Sahan S Liyanage, with observational notes and technical image details.",
  alternates: { canonical: "/photography" },
  openGraph: {
    title: "Photography | Sahan S Liyanage",
    description:
      "A dark, immersive gallery for astrophotography, solar observations, wildlife, and field notes.",
    url: "/photography",
  },
};

const astroSubcategories = [
  "Solar Photography",
  "Milky Way",
  "Comets",
  "Moon",
  "Planets",
  "Deep-Sky Objects",
  "Astronomical Events",
  "Observatory Work",
];

const wildlifeSubcategories = [
  "Birds",
  "Mammals",
  "Insects",
  "Reptiles",
  "Landscapes",
  "Animal Behaviour",
];

export default function PhotographyPage() {
  return (
    <main id="main-content" className="photo-page">
      <PageIntro
        eyebrow="Photography"
        title="Field notes in light."
        description="Photography is another form of observation: a way to record astronomical events, changing light, animal behaviour, and the conditions under which an image was made."
        dark
      />

      <section className="photo-index-section">
        <div className="container photo-index-grid">
          <div>
            <span>01</span>
            <h2>Astrophotography</h2>
            <p>Night-sky, solar, planetary, and observatory work with equipment and processing notes.</p>
            <ul>{astroSubcategories.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <span>02</span>
            <h2>Wildlife Photography</h2>
            <p>Field observations of animals, landscapes, and behaviour, presented with respectful context.</p>
            <ul>{wildlifeSubcategories.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section photographer-field-section">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">Behind the lens</p>
              <h2>The practice before the photograph</h2>
            </div>
            <div>
              <p>
                Wildlife photography begins before the shutter: reading a landscape, carrying the right equipment, waiting without disturbing the subject, and learning from other field photographers.
              </p>
              <p className="personal-story-note">
                These documentary images feature me working as a wildlife photographer. They are not samples of the wildlife photographs I have made.
              </p>
            </div>
          </div>
          <PersonalStoryGallery
            images={wildlifeFieldImages.slice(0, 6)}
            label="Sahan working behind the camera in the field"
            compact
          />
        </div>
      </section>

      <section className="photo-gallery-section" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="photo-gallery-heading">
            <p className="eyebrow">Image archive</p>
            <h2 id="gallery-heading">Selected photographs</h2>
            <p className="gallery-context-note">
              This gallery is reserved for finished astrophotography and wildlife photographs taken by me. Documentary photographs of me in the field are presented separately above.
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
