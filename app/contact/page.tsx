import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageIntro } from "../components/PageIntro";
import { siteConfig, socialProfiles } from "../data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sahan S Liyanage about solar and space physics, research collaboration, scientific software, outreach, and photography.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Sahan S Liyanage",
    description:
      "Research collaboration, doctoral opportunities, scientific software, solar observation, outreach, and photography enquiries.",
    url: "/contact",
  },
};

const conversationTopics = [
  "Research collaboration",
  "PhD opportunities",
  "Scientific software discussions",
  "Solar observational projects",
  "Astronomy outreach",
  "Photography-related communication",
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Contact"
        title="Let’s discuss a research question."
        description="I welcome thoughtful messages about research collaboration, future doctoral opportunities, scientific software, solar observational projects, astronomy outreach, and photography."
      />

      <section className="section contact-main">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <p className="eyebrow">Good reasons to get in touch</p>
            <ul>
              {conversationTopics.map((topic, index) => (
                <li key={topic}><span>{String(index + 1).padStart(2, "0")}</span>{topic}</li>
              ))}
            </ul>
            <div className="direct-email">
              <span>Direct email</span>
              <a href={`mailto:${siteConfig.email}`}><strong>{siteConfig.email}</strong></a>
              <p>Use this address for research and professional enquiries.</p>
            </div>
          </aside>
          <div>
            <div className="form-heading">
              <p className="eyebrow">Send a message</p>
              <h2>What would you like to explore?</h2>
              <p>All fields are required. The form will send directly to the configured email service once connected.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section-tint profiles-section" id="profiles">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Professional profiles</p>
              <h2>Find my work elsewhere</h2>
            </div>
            <p>Links remain inactive as external profiles until verified URLs are supplied.</p>
          </div>
          <div className="profile-grid">
            {socialProfiles.map((profile) => (
              profile.url ? (
                <a href={profile.url} target="_blank" rel="noreferrer" key={profile.label}>
                  <span>{profile.short}</span>
                  <div><strong>{profile.label}</strong><small>Open profile ↗</small></div>
                </a>
              ) : (
                <div className="profile-placeholder placeholder-note" key={profile.label}>
                  <span>{profile.short}</span>
                  <div><strong>{profile.label}</strong><small>{profile.placeholder}</small></div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
