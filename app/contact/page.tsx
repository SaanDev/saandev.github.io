import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { siteConfig, socialProfiles } from "../data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sahan S Liyanage about physics research, doctoral opportunities, scientific software, outreach, and photography.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Sahan S Liyanage",
    description:
      "Physics research collaboration, doctoral opportunities, scientific software, outreach, and photography enquiries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Contact"
        title="Let’s connect."
        description="Get in touch about graduate study, physics research, or scientific software."
      />

      <section className="section contact-main">
        <div className="container">
          <p className="eyebrow">Email me</p>
          <h2>Graduate study & research opportunities</h2>
          <p>I’m seeking graduate study opportunities in physics and welcome conversations about potential projects and research groups.</p>
          <a className="button button-primary" href={`mailto:${siteConfig.email}`}>{siteConfig.email} ↗</a>
        </div>
      </section>

      <section className="section section-tint profiles-section" id="profiles">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Professional profiles</p>
              <h2>Find my work elsewhere</h2>
            </div>
            <p>Research, publications, and open-source work.</p>
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
