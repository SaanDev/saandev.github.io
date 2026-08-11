import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PersonalStoryGallery } from "../components/PersonalStoryGallery";
import { outreachEntries } from "../data/content";
import { astronomyImages } from "../data/personal-images";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "Astronomy, physics, science communication, teaching, and public-engagement activities by Sahan S Liyanage.",
  alternates: { canonical: "/outreach" },
  openGraph: {
    title: "Outreach | Sahan S Liyanage",
    description: "Science communication, public observing, teaching, training, and community participation.",
    url: "/outreach",
  },
};

export default function OutreachPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Outreach"
        title="Astronomy made shared."
        description="Astronomy camps, public observing, science communication, student programmes, and volunteering bring instruments, ideas, and people together."
      />

      <section className="section outreach-visual-section">
        <div className="container">
          <div className="personal-story-heading">
            <div>
              <p className="eyebrow">Astronomy in community</p>
              <h2>Camps, observation, and public engagement.</h2>
            </div>
            <div>
              <p>
                My astronomical background was built through nights at the telescope, solar-observation sessions, student camps, equipment preparation, public demonstrations, and the teamwork of university astronomy societies.
              </p>
              <p>
                These moments connect practical observing with public engagement: setting up instruments, helping students see through a telescope, speaking to an audience, and keeping a programme running after dark.
              </p>
            </div>
          </div>
          <PersonalStoryGallery
            images={astronomyImages}
            label="Astronomy camps, outreach, and observation sessions"
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Activities</p>
              <h2>Outreach and participation</h2>
            </div>
            <p>Selected activities from my current CV, spanning national research forums, university societies, rural outreach, and public observing.</p>
          </div>
          <div className="outreach-grid">
            {outreachEntries.map((entry, index) => (
              <article className="outreach-card" key={entry.id}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{entry.title}</h3>
                <dl>
                  <div><dt>Role</dt><dd>{entry.role}</dd></div>
                  <div><dt>Event</dt><dd>{entry.institution}</dd></div>
                  <div><dt>Date</dt><dd>{entry.date}</dd></div>
                </dl>
                <p>{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
