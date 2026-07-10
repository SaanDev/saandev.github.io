import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { PrintButton } from "../components/PrintButton";
import { projects, researchInterests, siteConfig, softwareCapabilities } from "../data/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Academic curriculum vitae of Sahan S Liyanage, including research, education, scientific software, presentations, training, and outreach.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "Curriculum Vitae | Sahan S Liyanage",
    description: "Online academic CV of Sahan S Liyanage.",
    url: "/cv",
  },
};

const placeholderSections = [
  {
    id: "publications",
    title: "Publications",
    content: "[ADD VERIFIED PUBLICATIONS OR LINK TO THE COMPLETED PUBLICATIONS PAGE]",
  },
  {
    id: "presentations",
    title: "Conference Presentations",
    content: "[ADD VERIFIED CONFERENCE, PRESENTATION TITLE, LOCATION, AND DATE]",
  },
  {
    id: "training",
    title: "Workshops and Training",
    content: "[ADD VERIFIED WORKSHOP OR TRAINING PROGRAMME, PROVIDER, AND DATE]",
  },
  {
    id: "teaching",
    title: "Teaching Experience",
    content: "[ADD VERIFIED TEACHING OR STUDENT-SUPPORT ROLE, INSTITUTION, AND DATES]",
  },
  {
    id: "awards",
    title: "Awards and Honours",
    content: "[ADD VERIFIED AWARD, AWARDING BODY, AND YEAR]",
  },
  {
    id: "outreach",
    title: "Outreach",
    content: "[ADD VERIFIED OUTREACH ACTIVITY, ROLE, EVENT, AND DATE]",
  },
  {
    id: "memberships",
    title: "Professional Memberships",
    content: "[ADD VERIFIED PROFESSIONAL MEMBERSHIP AND DATES, IF APPLICABLE]",
  },
  {
    id: "extracurricular",
    title: "Extracurricular Activities",
    content: "[ADD VERIFIED MUSIC, ASTRONOMY-SOCIETY, PHOTOGRAPHY, OR OTHER ACTIVITY]",
  },
  {
    id: "languages",
    title: "Languages",
    content: "[ADD VERIFIED LANGUAGE AND PROFICIENCY LEVEL]",
  },
];

export default function CVPage() {
  const cvHref = siteConfig.cvUrl || "#download-note";

  return (
    <main id="main-content" className="cv-page">
      <PageIntro
        eyebrow="Curriculum Vitae"
        title="Academic experience and research practice."
        description="A concise online record of research, education, technical work, teaching, presentations, training, and public engagement. Unverified details remain explicitly marked for editing."
      >
        <div className="button-row cv-actions">
          <a className="button button-primary" href={cvHref}>Download CV</a>
          <PrintButton />
        </div>
        <p className="last-updated placeholder-text">Last updated: [ADD LAST UPDATED DATE]</p>
      </PageIntro>

      <div className="container cv-layout">
        <aside className="cv-sidebar" aria-label="CV section navigation">
          <p>On this page</p>
          <nav>
            <a href="#summary">Professional summary</a>
            <a href="#position">Current position</a>
            <a href="#education">Education</a>
            <a href="#experience">Research experience</a>
            <a href="#projects">Research projects</a>
            <a href="#software">Scientific software</a>
            <a href="#skills">Technical skills</a>
            {placeholderSections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
            <a href="#referees">Referees</a>
          </nav>
        </aside>

        <div className="cv-document">
          <section id="summary" className="cv-section">
            <p className="cv-kicker">Professional summary</p>
            <h2>Sahan S Liyanage</h2>
            <p className="cv-lead">{siteConfig.title}</p>
            <p>
              Physics graduate and Research Assistant working across solar and space physics, with interests in solar radio bursts, coronal shock waves, space weather, plasma physics, solar observations, and scientific software development. Research practice connects observations, physical models, and computational analysis.
            </p>
          </section>

          <section id="position" className="cv-section">
            <p className="cv-kicker">Current position</p>
            <div className="cv-record">
              <div>
                <h2>Research Assistant</h2>
                <p>Arthur C. Clarke Institute for Modern Technologies, Sri Lanka</p>
              </div>
              <p className="placeholder-text">[ADD EMPLOYMENT DATES]</p>
            </div>
            <p>
              Working on observational and computational projects related to solar radio astronomy, solar imaging, space weather, and scientific instrumentation.
            </p>
            <p className="placeholder-note">[REPLACE WITH VERIFIED INSTITUTIONAL RESPONSIBILITIES]</p>
          </section>

          <section id="education" className="cv-section">
            <p className="cv-kicker">Education</p>
            <div className="cv-record">
              <div>
                <h2>Bachelor of Science Honours in Physics</h2>
                <p>University of Colombo, Sri Lanka</p>
              </div>
              <p className="placeholder-text">[ADD GRADUATION YEAR]</p>
            </div>
            <p>Undergraduate studies in physics with research focused on solar radio bursts and coronal shock waves.</p>
            <p className="placeholder-note">[ADD VERIFIED CLASSIFICATION, AWARDS, AND ACADEMIC DETAILS, IF APPROVED]</p>
          </section>

          <section id="experience" className="cv-section">
            <p className="cv-kicker">Research experience</p>
            <div className="cv-record placeholder-note">
              <div>
                <h2>[ADD VERIFIED RESEARCH ROLE OR PROJECT]</h2>
                <p>[ADD INSTITUTION, GROUP, OR SUPERVISOR]</p>
              </div>
              <p>[ADD DATES]</p>
            </div>
            <p className="placeholder-text">[ADD VERIFIED RESPONSIBILITIES, METHODS, AND CONTRIBUTIONS]</p>
          </section>

          <section id="projects" className="cv-section">
            <p className="cv-kicker">Research projects</p>
            {projects.map((project) => (
              <div className="cv-project" key={project.id}>
                <h2 className={project.title.startsWith("[") ? "placeholder-text" : ""}>{project.title}</h2>
                <p>{project.summary}</p>
                <ul className="tag-list">
                  {project.keywords.map((keyword) => <li key={keyword} className={keyword.startsWith("[") ? "placeholder-note" : ""}>{keyword}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section id="software" className="cv-section">
            <p className="cv-kicker">Scientific software</p>
            <h2>e-CALLISTO FITS Analyzer</h2>
            <p>Cross-platform scientific software for solar-radio dynamic-spectrum visualization and analysis.</p>
            <ul className="two-column-list">
              {softwareCapabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <p className="placeholder-note">[ADD OFFICIAL E-CALLISTO SOFTWARE URL] · [ADD PUBLIC DOCUMENTATION OR REPOSITORY]</p>
          </section>

          <section id="skills" className="cv-section">
            <p className="cv-kicker">Technical skills</p>
            <div className="cv-skills-grid">
              <div><h2>Research domains</h2><p>{researchInterests.map((item) => item.label).join(" · ")}</p></div>
              <div><h2>Verified software context</h2><p>Python · PySide6 · FITS data · Scientific visualization · Data analysis · Interactive scientific software</p></div>
              <div className="placeholder-note"><h2>Additional programming</h2><p>[ADD VERIFIED LANGUAGES, LIBRARIES, AND TOOLS]</p></div>
              <div className="placeholder-note"><h2>Instrumentation</h2><p>[ADD VERIFIED INSTRUMENTS AND OBSERVATIONAL EXPERIENCE]</p></div>
            </div>
          </section>

          {placeholderSections.map((section) => (
            <section id={section.id} className="cv-section placeholder-note" key={section.id}>
              <p className="cv-kicker">{section.title}</p>
              <p>{section.content}</p>
            </section>
          ))}

          <section id="referees" className="cv-section">
            <p className="cv-kicker">Referees, optional</p>
            <p className="placeholder-note">
              [ADD “AVAILABLE ON REQUEST” OR APPROVED PROFESSIONAL REFEREES. DO NOT PUBLISH PRIVATE CONTACT DETAILS WITHOUT EXPLICIT PERMISSION.]
            </p>
          </section>

          <section id="download-note" className="cv-download-note placeholder-note">
            <h2>[UPLOAD CURRENT CV PDF]</h2>
            <p>
              Add the verified PDF path to <code>siteConfig.cvUrl</code>. Do not include a private address, identification numbers, signatures, personal telephone numbers, or unapproved referee contact details.
            </p>
          </section>

          <Link className="text-link cv-contact-link" href="/contact">Contact Sahan about research or collaboration →</Link>
        </div>
      </div>
    </main>
  );
}
