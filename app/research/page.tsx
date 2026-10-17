import type { Metadata } from "next";
import Link from "next/link";
import { DashboardShowcase } from "../components/DashboardShowcase";
import { PageIntro } from "../components/PageIntro";
import { PlaceholderMedia } from "../components/PlaceholderMedia";
import {
  projects,
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

const cospar2026Images = [
  { file: "workshop-group", alt: "COSPAR 2026 workshop participants gathered outside NRIAG in Cairo", width: 1800, height: 1200, layout: "wide" },
  { file: "teaching-session", alt: "Sahan speaking into a microphone while working at a laptop during COSPAR 2026", width: 1200, height: 1800, layout: "portrait" },
  { file: "presentation-team", alt: "Sahan with a workshop team in front of their Earth-affecting CME analysis presentation", width: 1800, height: 1200, layout: "landscape" },
  { file: "certificate-presentation", alt: "Certificate presentation at the COSPAR 2026 workshop in Cairo", width: 1800, height: 1200, layout: "landscape" },
  { file: "workshop-colleague", alt: "Sahan with a colleague beside the COSPAR 2026 workshop banners", width: 1800, height: 1200, layout: "wide" },
] as const;

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Research"
        title="Research & projects."
        description="My work spans solar-radio research, spectroscopy, and scientific software. These projects bring together observation, experiment, and computation."
      >
        <div className="button-row">
          <a className="button button-primary" href="#projects">View featured projects</a>
          <Link className="button button-secondary" href="/contact">Discuss collaboration</Link>
        </div>
      </PageIntro>

      <section className="section project-details-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
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
                {project.id === "ecallisto-fits-analyzer" && <div className="analyzer-gallery">
                  <img src="/images/research/Analyzer/solar.webp" alt="Solar image analysis in e-CALLISTO FITS Analyzer" loading="lazy" />
                  <img src="/images/research/Analyzer/gcs.webp" alt="Coronal mass ejection modelling in e-CALLISTO FITS Analyzer" loading="lazy" />
                </div>}

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
              <p className="eyebrow">Workshops and teaching</p>
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

          <article className="timeline-entry" style={{ marginTop: "32px" }}>
            <p>31 August - 11 September 2026 · Cairo, Egypt</p>
            <h3>Instructor - COSPAR Capacity Building Workshop 2026</h3>
            <p>Taught solar-radio data analysis using Python at the workshop on Earth-Affecting Solar Transients, hosted by NRIAG.</p>
          </article>

          <section className="workshop-gallery" id="cospar-2026" aria-labelledby="cospar-2026-title">
            <div className="workshop-gallery-heading">
              <div>
                <p className="eyebrow">COSPAR 2026</p>
                <h3 id="cospar-2026-title">Teaching, collaboration, and shared discoveries</h3>
              </div>
              <p>Cairo · August–September 2026</p>
            </div>
            <div className="cospar-2026-grid">
              {cospar2026Images.map((image) => (
                <figure className={`cospar-2026-photo cospar-2026-photo-${image.layout}`} key={image.file}>
                  <img
                    src={`/images/research/cospar-2026/${image.file}.webp`}
                    srcSet={`/images/research/cospar-2026/${image.file}-900.webp ${image.layout === "portrait" ? 600 : 900}w, /images/research/cospar-2026/${image.file}.webp ${image.width}w`}
                    sizes={image.layout === "wide" ? "(max-width: 820px) calc(100vw - 36px), (max-width: 1248px) calc(100vw - 48px), 1200px" : "(max-width: 820px) calc(100vw - 36px), (max-width: 1248px) calc((100vw - 62px) / 2), 593px"}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </section>

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

      <section className="section research-contact">
        <div className="container contact-callout-inner">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Interested in a shared question?</h2>
            <p>I welcome conversations about observational projects, scientific software, complementary data, and future research directions.</p>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
