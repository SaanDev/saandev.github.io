import type { Metadata } from "next";
import { PageIntro } from "../../components/PageIntro";
import { PersonalStoryGallery } from "../../components/PersonalStoryGallery";
import { musicImages } from "../../data/personal-images";

export const metadata: Metadata = {
  title: "Music",
  description: "Singing, percussion, and musical direction — a creative practice shaped by rehearsal and shared performance.",
  alternates: { canonical: "/beyond/music" },
  openGraph: { title: "Music | Sahan S Liyanage", description: "Singing, percussion, and musical direction — a creative practice shaped by rehearsal and shared performance.", url: "/beyond/music" },
};

export default function Page() {
  return <main id="main-content" className="photo-page">
    <PageIntro eyebrow="Beyond · Music" title="Music" description="Singing, percussion, and musical direction — a creative practice shaped by rehearsal and shared performance." dark />
      <section className="section personal-story-section personal-story-section-music" id="music">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">Rhythm & performance</p>
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
  </main>;
}
