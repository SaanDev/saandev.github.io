import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "./components/PlaceholderMedia";
import { ProjectCards } from "./components/ProjectCards";
import {
  outreachEntries,
  researchInterests,
  siteConfig,
  softwareCapabilities,
} from "./data/content";

export const metadata: Metadata = {
  title: { absolute: "Sahan S Liyanage | Solar and Space Physics Researcher" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Physics · computation · observation</p>
            <h1>{siteConfig.name}</h1>
            <p className="hero-title">{siteConfig.title}</p>
            <p className="hero-intro">
              I am a physics graduate and Research Assistant at the Arthur C. Clarke Institute for Modern Technologies in Sri Lanka. My research interests include solar radio bursts, coronal shock waves, space weather, plasma physics, solar observations, and scientific software development. I am particularly interested in connecting observations, physical models, and computational methods to study dynamic processes in the solar atmosphere.
            </p>
            <p className="hero-secondary">
              I am also interested in future doctoral research opportunities in solar, space, and plasma physics, as well as related areas of astrophysics.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/research">
                Explore my research
              </Link>
              <Link className="button button-secondary" href="/cv">
                View CV
              </Link>
              <Link className="button button-quiet" href="/contact">
                Contact me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-annotation" aria-hidden="true">
              <span>Solar radius</span>
              <span>01 AU</span>
            </div>
            <PlaceholderMedia
              label=""
              src="/images/sahan-liyanage-portrait.jpg"
              alt="Professional portrait of Sahan S Liyanage"
              className="portrait-frame"
              eager
            />
            <p className="image-caption">Sahan S Liyanage</p>
          </div>
        </div>
        <div className="container hero-footnote">
          <span>Based in Sri Lanka</span>
          <span>Working across solar radio, imaging, and scientific software</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container split-heading-layout">
          <div>
            <p className="eyebrow">Profile</p>
            <h2>About Me</h2>
          </div>
          <div className="prose-large">
            <p>
              I am a physics graduate from the University of Colombo, Sri Lanka, and currently work as a Research Assistant at the Arthur C. Clarke Institute for Modern Technologies. My work lies mainly within solar and space physics, with particular attention to solar radio observations, coronal shock waves, space-weather events, and scientific data analysis.
            </p>
            <p>
              My research combines observational data, physical modelling, and software development. I am interested in understanding how energetic processes in the solar atmosphere produce observable signatures across radio, extreme-ultraviolet, magnetic-field, and white-light measurements.
            </p>
            <p>
              Beyond research, I am interested in astronomy outreach, astrophotography, wildlife photography, and music.
            </p>
            <Link className="text-link" href="/research">
              Read my research statement <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section position-section">
        <div className="container">
          <div className="position-panel">
            <p className="eyebrow">Current position</p>
            <div className="position-grid">
              <div>
                <h2>Research Assistant</h2>
                <p>Arthur C. Clarke Institute for Modern Technologies, Sri Lanka</p>
                <p>May 2026 - Present</p>
              </div>
              <div>
                <p>
                  Working on spectropolarimetric observations of band-split Type II solar radio bursts, an integrated CALLISTO and H-alpha observing system, automated data acquisition, and real-time solar-data monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="interests">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Areas of enquiry</p>
              <h2>Research Interests</h2>
            </div>
            <p>
              A connected programme of observational solar physics, plasma interpretation, and computational methods.
            </p>
          </div>
          <div className="interest-grid">
            {researchInterests.map((interest) => (
              <article className="interest-item" key={interest.label}>
                <span className="interest-symbol" aria-hidden="true">{interest.code}</span>
                <h3>{interest.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="featured-research">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Featured Research</h2>
            </div>
            <Link className="text-link" href="/research">
              View all research <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ProjectCards />
        </div>
      </section>

      <section className="section software-home" id="software">
        <div className="container software-panel">
          <div className="software-copy">
            <p className="eyebrow">Scientific software</p>
            <h2>e-CALLISTO FITS Analyzer</h2>
            <p>
              A cross-platform scientific application for visualizing, preparing, and analysing solar-radio dynamic spectra, with an expanding set of tools for complementary solar imaging and space-weather data.
            </p>
            <p className="platform-line"><strong>Supported platforms</strong> Windows · macOS · Linux</p>
            <div className="button-row">
              <a className="button button-primary" href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer">
                Access through e-CALLISTO
              </a>
              <Link className="button button-secondary" href="/research#ecallisto-fits-analyzer">
                Technical overview
              </Link>
            </div>
          </div>
          <PlaceholderMedia
            label=""
            src="/images/research/ecallisto-interface.png"
            alt="e-CALLISTO FITS Analyzer interface showing a Type II solar-radio burst"
            className="software-screenshot"
          />
          <ul className="capability-list">
            {softwareCapabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          <div className="software-links">
            <a href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer">Official e-CALLISTO installers ↗</a>
            <a href={siteConfig.softwareUrl} target="_blank" rel="noreferrer">GitHub source code ↗</a>
          </div>
        </div>
      </section>

      <section className="section section-tint education-preview">
        <div className="container split-heading-layout">
          <div>
            <p className="eyebrow">Academic foundation</p>
            <h2>Education</h2>
          </div>
          <article className="timeline-entry">
            <div className="timeline-marker" aria-hidden="true" />
            <p>January 2020 - May 2024</p>
            <h3>Bachelor of Science Honours in Physics</h3>
            <p className="timeline-institution">University of Colombo, Sri Lanka</p>
            <p>
              Undergraduate studies in physics with research focused on solar radio bursts and coronal shock waves.
            </p>
            <Link className="button button-secondary" href="/cv">
              View full CV
            </Link>
          </article>
        </div>
      </section>

      <section className="section photography-preview">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Observation beyond the laboratory</p>
              <h2>Photography</h2>
            </div>
            <Link className="text-link" href="/photography">
              Enter the gallery <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="photo-preview-grid">
            <article className="photo-preview-card">
              <PlaceholderMedia label="[UPLOAD ASTROPHOTOGRAPHY IMAGE]" alt="User-supplied astrophotography placeholder" />
              <div>
                <p className="eyebrow">Night sky & solar observation</p>
                <h3>Astrophotography</h3>
                <p>
                  A visual record of the night sky, solar observations, and astronomical events, accompanied by notes on the equipment, location, and imaging process.
                </p>
                <Link href="/photography#gallery-heading" className="text-link">Explore astrophotography →</Link>
              </div>
            </article>
            <article className="photo-preview-card">
              <PlaceholderMedia label="[UPLOAD WILDLIFE PHOTOGRAPHY IMAGE]" alt="User-supplied wildlife photography placeholder" />
              <div>
                <p className="eyebrow">Field observation</p>
                <h3>Wildlife Photography</h3>
                <p>
                  Photographs of birds, mammals, insects, and natural landscapes, with attention to animal behaviour and the environments in which each image was made.
                </p>
                <Link href="/photography#gallery-heading" className="text-link">Explore wildlife photography →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section music-section">
        <div className="container music-grid">
          <div>
            <p className="eyebrow">Practice & expression</p>
            <h2>Music</h2>
            <p>
              Music has remained an important part of my life alongside physics and astronomy. I play the violin and value music as a different way of developing patience, concentration, and expression. This section will later include photographs, performances, and selected recordings.
            </p>
          </div>
          <div className="music-gallery">
            <PlaceholderMedia label="[UPLOAD VIOLIN PHOTO 1]" alt="Placeholder for a violin photograph" />
            <PlaceholderMedia label="[UPLOAD PERFORMANCE PHOTO]" alt="Placeholder for a performance photograph" />
            <PlaceholderMedia label="[ADD VIDEO OR AUDIO LINK]" alt="Placeholder for a video or audio thumbnail" />
          </div>
        </div>
      </section>

      <section className="section section-tint outreach-section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Community & participation</p>
              <h2>Outreach and Extracurricular Activities</h2>
            </div>
            <p>Editable records for verified talks, observing programmes, teaching, training, and public engagement.</p>
          </div>
          <div className="outreach-grid">
            {outreachEntries.map((entry, index) => (
              <article className="outreach-card" key={entry.id}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{entry.title}</h3>
                <dl>
                  <div><dt>Role</dt><dd className="placeholder-text">{entry.role}</dd></div>
                  <div><dt>Event</dt><dd className="placeholder-text">{entry.institution}</dd></div>
                  <div><dt>Date</dt><dd className="placeholder-text">{entry.date}</dd></div>
                </dl>
                <p className="placeholder-text">{entry.description}</p>
                <div className="outreach-options placeholder-note">
                  <span>{entry.image}</span>
                  <span>{entry.link}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-callout">
        <div className="container contact-callout-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Research thrives through exchange.</h2>
            <p>
              I welcome conversations about research collaboration, solar and space physics, scientific software, observational projects, and future doctoral research.
            </p>
          </div>
          <div className="button-row">
            <Link className="button button-primary" href="/contact">Contact me</Link>
            <Link className="button button-secondary" href="/cv">View CV</Link>
            <Link className="button button-quiet" href="/contact#profiles">LinkedIn ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
