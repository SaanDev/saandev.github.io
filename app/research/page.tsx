import type { Metadata } from "next";
import Link from "next/link";
import { DashboardShowcase } from "../components/DashboardShowcase";
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
    "Current physics research by Sahan S Liyanage spanning space, solar, plasma, and astrophysical phenomena, supported by experiment, modelling, computation, and scientific software.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research | Sahan S Liyanage",
    description:
      "Current projects and wider research interests connected through experiment, physical modelling, and computation.",
    url: "/research",
  },
};

const cosparWorkshopImages = [
  {
    src: "/images/research/cospar-2024/workshop-group.webp",
    alt: "COSPAR Capacity Building Workshop participants and instructors at Samarkand State University",
    layout: "wide",
  },
  {
    src: "/images/research/cospar-2024/analysis-session-group.webp",
    alt: "Workshop participants and instructors after a solar radio analysis session",
    layout: "landscape",
  },
  {
    src: "/images/research/cospar-2024/certificate-presentation.webp",
    alt: "Sahan Liyanage receiving his COSPAR workshop certificate of attendance",
    layout: "portrait",
  },
  {
    src: "/images/research/cospar-2024/computational-session.webp",
    alt: "Participants working with scientific software during a computational session",
    layout: "landscape",
  },
  {
    src: "/images/research/cospar-2024/workshop-instructor-portrait.webp",
    alt: "Sahan Liyanage with a COSPAR workshop instructor in the lecture room",
    layout: "portrait",
  },
  {
    src: "/images/research/cospar-2024/international-participants.webp",
    alt: "Sahan Liyanage with fellow international participants at the COSPAR workshop",
    layout: "landscape",
  },
  {
    src: "/images/research/cospar-2024/solar-physics-instructor.webp",
    alt: "Sahan Liyanage with a solar physics instructor during the COSPAR workshop",
    layout: "portrait",
  },
] as const;

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Research"
        title="Following physical questions across scales."
        description="My current projects use observations, experiments, physical models, and computation to study solar, space, plasma, and astrophysical phenomena. The same approach shapes a wider interest in matter, radiation, fields, and energy across diverse physical systems."
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
            <h2>A broad experimental and computational foundation</h2>
          </div>
          <div className="prose-large">
            <p>
              My present research examines dynamic processes in the solar atmosphere and near-Earth environment. Radio, extreme-ultraviolet, magnetic-field, and white-light observations provide complementary evidence, while plasma theory and numerical analysis connect those measurements to physical mechanisms.
            </p>
            <p>
              These projects have developed a research approach that is not tied to one instrument or scale: define a measurable question, understand the governing physics, test interpretations against data, and make the analysis transparent and reproducible. Experimental spectroscopy and scientific software development provide complementary experience beyond astronomical observations.
            </p>
            <p>
              Questions involving light–matter interactions, atomic and molecular systems, nuclei and energetic particles, material behaviour, plasmas, and astrophysical environments share many of these habits of thought. This breadth guides the kind of doctoral training and research problems I am seeking.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">02 · Research interests</p>
              <h2>Questions across physical scales</h2>
            </div>
            <p>A spectrum of interests connected by measurement, modelling, and quantitative analysis.</p>
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
                <div className={`project-detail-head${project.image ? "" : " project-detail-head-text-only"}`}>
                  <div>
                    <p className="eyebrow">Project {String(projectIndex + 1).padStart(2, "0")} · {project.eyebrow}</p>
                    <h2>{project.title}</h2>
                    <p className="project-detail-duration">{project.duration}</p>
                    <p>{project.summary}</p>
                  </div>
                  {project.image && (
                    <PlaceholderMedia
                      label=""
                      src={project.image}
                      alt={project.imageAlt}
                      className={`project-detail-hero${project.imageFit === "cover" ? " project-detail-hero-cover" : ""}`}
                    />
                  )}
                </div>

                {project.id === "space-weather-dashboard" && <DashboardShowcase />}

                {project.gallery && (
                  <section className="project-gallery" aria-labelledby={`${project.id}-gallery-title`}>
                    <div className="project-gallery-heading">
                      <p className="eyebrow">Laboratory record</p>
                      <h3 id={`${project.id}-gallery-title`}>Raman spectroscopy setup</h3>
                    </div>
                    <div className="project-gallery-grid">
                      {project.gallery.map((image) => (
                        <figure
                          className={`project-gallery-image project-gallery-image-${image.layout}`}
                          key={image.src}
                        >
                          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                        </figure>
                      ))}
                    </div>
                  </section>
                )}

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

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="workshops-training">
        <div className="container">
          <div className="split-heading-layout">
            <div>
              <p className="eyebrow">04 · Workshops and trainings</p>
              <h2>Developing research practice through shared learning.</h2>
            </div>
            <article className="timeline-entry">
              <div className="timeline-marker" aria-hidden="true" />
              <p>19-30 August 2024</p>
              <h3>COSPAR Capacity Building Workshop 2024</h3>
              <p className="timeline-institution">Samarkand State University, Samarkand City, Uzbekistan</p>
              <p>
                Training on coronal and interplanetary shocks using SOHO, SDO, STEREO, ground-based observations, SolarSoft, SunPy, Astropy, and Python.
              </p>
            </article>
          </div>

          <section className="workshop-gallery" aria-labelledby="cospar-gallery-title">
            <div className="workshop-gallery-heading">
              <div>
                <p className="eyebrow">Workshop record</p>
                <h3 id="cospar-gallery-title">Collaboration, analysis, and shared learning</h3>
              </div>
              <p>Samarkand · August 2024</p>
            </div>
            <div className="workshop-gallery-grid">
              {cosparWorkshopImages.map((image) => (
                <figure
                  className={`workshop-gallery-image workshop-gallery-image-${image.layout}`}
                  key={image.src}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">05 · Research methods</p>
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
            <p className="eyebrow">06 · Scientific software</p>
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
            src="/images/research/Analyzer/main_window.png"
            alt="Main window of the e-CALLISTO FITS Analyzer software"
            className="research-software-image"
          />
        </div>
      </section>

      <section className="section section-tint research-experience">
        <div className="container split-heading-layout">
          <div>
            <p className="eyebrow">07 · Research experience</p>
            <h2>Academic appointments and project work</h2>
          </div>
          <div className="experience-list">
            <article>
              <p>May 2026 - Present</p>
              <h3>Research Assistant</h3>
              <p>Astronomy and Space Applications Division, Arthur C. Clarke Institute for Modern Technologies</p>
              <p>Conducting calibrated e-CALLISTO solar-radio observations, H-alpha imaging, and astronomical spectroscopy; maintaining observing hardware; and developing automated pipelines for data acquisition, processing, archiving, and monitoring.</p>
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
            <p className="eyebrow">08 · Future directions</p>
            <h2>Building transferable insight through experiment, theory, and computation.</h2>
          </div>
          <div>
            <p>
              My current work on coronal shocks and solar-radio signatures continues to develop my experience in multi-instrument observations, plasma interpretation, signal analysis, and reproducible computation. Raman spectroscopy, instrumentation, and software development have also strengthened my interest in experimental measurement and the interaction of radiation with matter.
            </p>
            <p>
              At the doctoral level, I hope to pursue a well-defined physical problem whose methods can reveal deeper connections across scales—whether through precision measurement, spectroscopy, material or particle behaviour, field and plasma dynamics, astrophysical observation, or computational modelling.
            </p>
          </div>
        </div>
      </section>

      <section className="section research-contact">
        <div className="container contact-callout-inner">
          <div>
            <p className="eyebrow">09 · Research collaboration contact</p>
            <h2>Interested in a shared question?</h2>
            <p>I welcome conversations about observational projects, scientific software, complementary data, and future research directions.</p>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
