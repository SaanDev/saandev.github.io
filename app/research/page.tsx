import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { PlaceholderMedia } from "../components/PlaceholderMedia";
import {
  projects,
  researchMethods,
  researchThemes,
  siteConfig,
  softwareCapabilities,
} from "../data/content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research by Sahan S Liyanage in solar radio astronomy, coronal shock waves, space weather, plasma physics, solar imaging, and scientific software.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research | Sahan S Liyanage",
    description:
      "Observations, plasma physics, physical models, and computation applied to dynamic solar and space phenomena.",
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Research"
        title="Observing dynamic processes in the solar atmosphere."
        description="My research interests centre on linking observations, plasma physics, physical models, and computation to study solar and space phenomena—from radio signatures of coronal shocks to the software needed for reliable, reproducible analysis."
      >
        <div className="button-row">
          <a className="button button-primary" href="#projects">View featured projects</a>
          <Link className="button button-secondary" href="/contact">Discuss collaboration</Link>
        </div>
      </PageIntro>

      <section className="section research-overview">
        <div className="container split-heading-layout">
          <div>
            <p className="eyebrow">01 · Research overview</p>
            <h2>A multi-observational approach</h2>
          </div>
          <div className="prose-large">
            <p>
              Dynamic events in the solar atmosphere reveal themselves differently across the electromagnetic spectrum. Radio observations can trace plasma emission and shock propagation, while extreme-ultraviolet images, magnetic-field measurements, and white-light coronagraph data provide complementary views of the evolving solar environment.
            </p>
            <p>
              My work is motivated by the value of bringing those observations together with physically meaningful models and transparent computational tools. The aim is not only to extract measurements, but to understand which physical interpretation is supported by the combined evidence and how sensitive it is to the assumptions used in the analysis.
            </p>
            <p>
              I am interested in future doctoral research opportunities that would allow me to deepen my work in solar, space, and plasma physics while expanding into broader problems in astrophysics.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">02 · Current interests</p>
              <h2>Connected research themes</h2>
            </div>
            <p>Topics that shape current projects and possible future directions.</p>
          </div>
          <ol className="theme-list">
            {researchThemes.map((theme, index) => (
              <li key={theme}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{theme}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section project-details-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">03 · Featured projects</p>
            <h2>Research and development in detail</h2>
          </div>
          <div className="project-details-list">
            {projects.map((project, projectIndex) => (
              <article className="project-detail" id={project.id} key={project.id}>
                <div className="project-detail-head">
                  <div>
                    <p className="eyebrow">Project {String(projectIndex + 1).padStart(2, "0")} · {project.eyebrow}</p>
                    <h2>{project.title}</h2>
                    <p className="project-detail-duration">{project.duration}</p>
                    <p>{project.summary}</p>
                  </div>
                  <PlaceholderMedia
                    label={project.imageLabel}
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-detail-hero"
                  />
                </div>

                <div className="project-detail-grid">
                  <section>
                    <h3>Scientific background</h3>
                    <p className={project.background.startsWith("[") ? "placeholder-text" : ""}>{project.background}</p>
                  </section>
                  <section>
                    <h3>Research questions</h3>
                    <ul className="arrow-list">
                      {project.questions.map((question) => (
                        <li className={question.startsWith("[") ? "placeholder-text" : ""} key={question}>{question}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3>Data or experimental methods</h3>
                    <ul className="arrow-list">
                      {project.dataMethods.map((method) => (
                        <li className={method.startsWith("[") ? "placeholder-text" : ""} key={method}>{method}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3>Analysis methods</h3>
                    <ul className="arrow-list">
                      {project.analysisMethods.map((method) => (
                        <li className={method.startsWith("[") ? "placeholder-text" : ""} key={method}>{method}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <section className="project-findings-panel">
                  <p className="eyebrow">Verified findings</p>
                  <ul className="arrow-list">
                    {project.findings.map((finding) => <li key={finding}>{finding}</li>)}
                  </ul>
                </section>

                <div className="project-record-grid">
                  <div><span>Current status</span><strong>{project.status}</strong></div>
                  <div><span>Collaborators & supervisors</span><strong>{project.people}</strong></div>
                  <div className="project-links-cell">
                    <span>Related outputs</span>
                    {project.links.map((link) => (
                      <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
                    ))}
                  </div>
                </div>

                <div className="project-gallery" aria-label={`${project.title} document figures`}>
                  {project.gallery.map((image) => (
                    <figure key={image.src}>
                      <PlaceholderMedia label="" src={image.src} alt={image.alt} />
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">04 · Research methods</p>
              <h2>From signal to physical interpretation</h2>
            </div>
            <p>A working cycle that connects multiple observations with computation and physical reasoning.</p>
          </div>
          <div className="method-grid">
            {researchMethods.map((method) => (
              <article key={method.number}>
                <span>{method.number}</span>
                <h3>{method.title}</h3>
                <p>{method.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="scientific-software">
        <div className="container research-software-grid">
          <div>
            <p className="eyebrow">05 · Scientific software</p>
            <h2>Tools designed around the analysis process</h2>
            <p className="prose-large">
              The e-CALLISTO FITS Analyzer brings data preparation, visualization, interactive measurement, model-based estimation, and scientific export into a single cross-platform workflow.
            </p>
            <ul className="capability-list compact">
              {softwareCapabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <div className="button-row" id="software-access-note">
              <a
                className="button button-primary"
                href={siteConfig.eCallistoUrl || "#software-access-note"}
                aria-describedby={!siteConfig.eCallistoUrl ? "ecallisto-url-note" : undefined}
              >
                Access through e-CALLISTO
              </a>
              <a
                className="button button-secondary"
                href={siteConfig.softwareUrl || "#software-access-note"}
              >
                GitHub or documentation
              </a>
            </div>
            <p id="ecallisto-url-note" className="editing-note verified-note">
              Native installers are available through the official e-CALLISTO software page, and the source code is published on GitHub.
            </p>
          </div>
          <PlaceholderMedia
            label=""
            src="/images/research/ecallisto-interface.png"
            alt="e-CALLISTO FITS Analyzer interface showing Type II solar-radio analysis"
            className="research-software-image"
          />
        </div>
      </section>

      <section className="section section-tint research-experience">
        <div className="container split-heading-layout">
          <div>
            <p className="eyebrow">06 · Research experience</p>
            <h2>Academic appointments and project work</h2>
          </div>
          <div className="experience-list">
            <article>
              <p>May 2026 - Present</p>
              <h3>Research Assistant</h3>
              <p>Arthur C. Clarke Institute for Modern Technologies, Sri Lanka</p>
              <p>Working on spectropolarimetric observations of band-split Type II solar radio bursts using a long-wave antenna; contributing to an integrated CALLISTO and H-alpha observing system, automated data acquisition, archiving, monitoring, visualization, and a real-time dashboard.</p>
            </article>
            <article>
              <p>March 2025 - Present</p>
              <h3>Research Assistant</h3>
              <p>Astronomy and Space Science Unit, University of Colombo</p>
              <p>Studying metric Type II burst drift rates and their links with CMEs, solar flares, solar energetic-particle events, and geomagnetic storms; developing and applying the e-CALLISTO FITS Analyzer under the supervision of Dr. Janaka Adassuriya.</p>
            </article>
            <article>
              <p>May 2025 - April 2026</p>
              <h3>Undergraduate Research Mentor</h3>
              <p>Final-year project: Estimating Coronal Magnetic Field Strength from Band Splitting in Type II Solar Radio Bursts.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section future-directions">
        <div className="container future-directions-grid">
          <div>
            <p className="eyebrow">07 · Future directions</p>
            <h2>Deepening the connection between observation, theory, and computation.</h2>
          </div>
          <div>
            <p>
              I am interested in extending current work on coronal shocks and solar-radio signatures through coordinated multi-wavelength observations, more detailed plasma and MHD interpretation, and reproducible computational methods. I am also interested in carefully evaluated machine-learning approaches for event detection and prediction, particularly where physical understanding and uncertainty remain visible within the analysis.
            </p>
            <p>
              Future doctoral research could provide a valuable setting for pursuing these questions while expanding into related problems in solar, space, plasma, and broader astrophysics.
            </p>
          </div>
        </div>
      </section>

      <section className="section research-contact">
        <div className="container contact-callout-inner">
          <div>
            <p className="eyebrow">08 · Research collaboration contact</p>
            <h2>Interested in a shared question?</h2>
            <p>I welcome conversations about observational projects, scientific software, complementary data, and future research directions.</p>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
