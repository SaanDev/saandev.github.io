import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { PrintButton } from "../components/PrintButton";
import { projects, researchInterests, siteConfig, softwareCapabilities } from "../data/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Academic curriculum vitae of Sahan S Liyanage, including research, education, scientific software, publications, presentations, teaching, training, and leadership.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "Curriculum Vitae | Sahan S Liyanage",
    description: "Online academic CV of Sahan S Liyanage.",
    url: "/cv",
  },
};

const researchExperience = [
  {
    title: "Research Assistant",
    institution: "Astronomy and Space Science Unit, University of Colombo",
    dates: "March 2025 - Present",
    subtitle: "Analysis of Metric Type II Solar Radio Burst Drift Rates and Their Space-Weather Connections Using a GUI Tool for e-CALLISTO",
    bullets: [
      "Study metric Type II burst drift rates and their connections with CMEs, solar flares, solar energetic-particle events, and geomagnetic storms.",
      "Analyse e-CALLISTO dynamic spectra and develop a Python GUI for reading, processing, merging, visualising, and analysing FITS observations.",
      "Supervisor: Dr. Janaka Adassuriya.",
    ],
  },
  {
    title: "Undergraduate Research Project",
    institution: "Department of Physics, University of Colombo",
    dates: "May 2023 - April 2024",
    subtitle: "Determination of the Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
    bullets: [
      "Analysed 25 metric Type II solar-radio-burst datasets from the e-CALLISTO network.",
      "Developed a Python workflow for FITS reading, background-noise reduction, burst isolation, and dynamic-spectrum analysis.",
      "Derived shock-speed and source-height expressions using plasma-oscillation theory and the Newkirk coronal-density model.",
      "Supervisors: Dr. Janaka Adassuriya and Prof. K. P. S. C. Jayaratne.",
    ],
  },
  {
    title: "Raman Spectroscopy Project",
    institution: "Department of Physics, University of Colombo",
    dates: "November 2022 - March 2023",
    subtitle: "Raman Spectroscopic Analysis of Common Minerals in Sri Lanka",
    bullets: [
      "Analysed calcite, dolomite, apatite, quartz, feldspar, graphite, and mica using a 532 nm Raman system.",
      "Prepared samples and processed spectra in Python using calibration, baseline correction, smoothing, and plotting.",
      "Supervisor: Prof. H. H. E. Jayaweera.",
    ],
  },
  {
    title: "Undergraduate Research Mentor",
    institution: "Final-year research project",
    dates: "May 2025 - April 2026",
    subtitle: "Estimating Coronal Magnetic Field Strength from Band Splitting in Type II Solar Radio Bursts",
    bullets: [],
  },
];

const publications = [
  {
    citation:
      "Liyanage, G. L. S. S., Adassuriya, J., Jayaratne, K. P. S. C., & Monstein, C. (2025). Determination of speed and source height of coronal shock waves using Type II solar radio bursts. Proceedings of the Technical Sessions, 41, 59-67. Institute of Physics, Sri Lanka.",
    href: "/publications/coronal-shock-waves-type-ii-radio-bursts.pdf",
    label: "Published paper",
  },
  {
    citation:
      "Liyanage, G. L. S. S., Adassuriya, J., Jayaratne, K. P. S. C., Monstein, C., & Manoharan, P. K. (2026). e-CALLISTO FITS Analyzer: A Software Framework for CALLISTO Solar Radio Data. Manuscript submitted for publication.",
    href: "/publications/ecallisto-fits-analyzer-manuscript.pdf",
    label: "Submitted manuscript",
  },
];

const presentations = [
  {
    title: "Determination of Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
    event: "41st Technical Sessions, Institute of Physics, Sri Lanka - University of Colombo",
    date: "22 March 2025",
    detail: "On-site oral presentation.",
  },
  {
    title: "Solar Radio Bursts and Space Weather",
    event: "Physics Society, University of Colombo",
    date: "20 November 2024",
    detail: "On-site presentation to physics students about the research findings.",
  },
];

const teaching = [
  {
    role: "Teaching Assistant",
    institution: "University of Colombo School of Computing",
    dates: "August 2025 - March 2026",
    courses: [
      "Probability and Statistics for first-year Computer Science majors",
      "Digital Signal Processing for second-year students",
      "Cryptography and Information Security for second-year students",
    ],
  },
  {
    role: "Teaching Assistant",
    institution: "Department of Physics, University of Colombo",
    dates: "May 2024 - May 2025",
    courses: [
      "Computational Electrodynamics",
      "Advanced Physics Laboratory I",
      "Analogue and Digital Electronic Principles Laboratory",
      "General Physics Laboratory I and II",
    ],
  },
];

export default function CVPage() {
  return (
    <main id="main-content" className="cv-page">
      <PageIntro
        eyebrow="Curriculum Vitae"
        title="Academic experience and research practice."
        description="A verified online record drawn from my current CV, research papers, and project reports. Private address, telephone, and referee contact details are intentionally excluded."
      >
        <div className="button-row cv-actions">
          <a className="button button-primary" href={siteConfig.cvUrl} download="Sahan-Liyanage-CV.pdf">
            Download CV
          </a>
          <PrintButton />
        </div>
        <p className="last-updated">Last updated: July 2026</p>
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
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
            <a href="#teaching">Teaching</a>
            <a href="#training">Training</a>
            <a href="#skills">Technical skills</a>
            <a href="#leadership">Leadership</a>
            <a href="#referees">Referees</a>
          </nav>
        </aside>

        <div className="cv-document">
          <section id="summary" className="cv-section">
            <p className="cv-kicker">Professional summary</p>
            <h2>Sahan S Liyanage</h2>
            <p className="cv-lead">{siteConfig.title}</p>
            <p>
              Physics researcher working across solar radio astronomy, coronal shock waves, space weather, observational solar physics, and scientific software. My current work connects automated observations, physical models, and reproducible computation.
            </p>
            <div className="cv-profile-links">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href="https://linkedin.com/in/saanliyanage" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://www.researchgate.net/profile/Sahan-Liyanage" target="_blank" rel="noreferrer">ResearchGate ↗</a>
              <a href="https://orcid.org/0000-0002-0849-6739" target="_blank" rel="noreferrer">ORCID ↗</a>
            </div>
          </section>

          <section id="position" className="cv-section">
            <p className="cv-kicker">Current position</p>
            <div className="cv-record">
              <div>
                <h2>Research Assistant (Contract)</h2>
                <p>Arthur C. Clarke Institute for Modern Technologies, Sri Lanka</p>
              </div>
              <p>May 2026 - Present</p>
            </div>
            <h3 className="cv-subtitle">Spectropolarimetric Observations of Band-Split Type II Solar Radio Bursts using a Long Wave Antenna</h3>
            <ul className="arrow-list">
              <li>Contribute to an integrated CALLISTO and H-alpha solar-observation system.</li>
              <li>Work on automated data acquisition, archiving, monitoring, and visualisation of solar-radio and optical observations.</li>
              <li>Support a real-time monitoring dashboard for CALLISTO dynamic spectra and H-alpha imaging data.</li>
            </ul>
          </section>

          <section id="education" className="cv-section">
            <p className="cv-kicker">Education</p>
            <div className="cv-record">
              <div>
                <h2>Bachelor of Science Honours in Physics</h2>
                <p>Second Class (Upper Division) · University of Colombo, Sri Lanka</p>
              </div>
              <p>January 2020 - May 2024</p>
            </div>
            <div className="cv-metric-row">
              <div><span>Cumulative GPA</span><strong>3.57 / 4.00</strong><small>126 credits · 252 ECTS</small></div>
              <div><span>Physics GPA</span><strong>3.65 / 4.00</strong><small>66 credits · 132 ECTS</small></div>
            </div>
            <p><strong>Relevant coursework:</strong> Quantum Mechanics I & II, Classical Mechanics, Electromagnetic Fields I & II, Statistical Physics, Advanced Optics, Solid State Physics, Mathematical Physics I & II, Nuclear and Particle Physics, Computational Physics, Electronics, Data Acquisition and Signal Processing, and advanced physics laboratories.</p>
          </section>

          <section id="experience" className="cv-section">
            <p className="cv-kicker">Research experience</p>
            <div className="cv-entry-list">
              {researchExperience.map((entry) => (
                <article key={`${entry.title}-${entry.dates}`}>
                  <div className="cv-record">
                    <div><h2>{entry.title}</h2><p>{entry.institution}</p></div>
                    <p>{entry.dates}</p>
                  </div>
                  <h3 className="cv-subtitle">{entry.subtitle}</h3>
                  {entry.bullets.length > 0 && <ul className="arrow-list">{entry.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="cv-section">
            <p className="cv-kicker">Research projects</p>
            {projects.map((project) => (
              <div className="cv-project" key={project.id}>
                <div className="cv-record"><h2>{project.title}</h2><p>{project.duration}</p></div>
                <p>{project.summary}</p>
                <ul className="tag-list">{project.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}</ul>
                <div className="cv-project-links">{project.links.map((link) => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
              </div>
            ))}
          </section>

          <section id="software" className="cv-section">
            <p className="cv-kicker">Scientific software</p>
            <div className="cv-record"><div><h2>e-CALLISTO FITS Analyzer</h2><p>Open-source, cross-platform scientific application</p></div><p>Active</p></div>
            <ul className="two-column-list">{softwareCapabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
            <div className="cv-project-links">
              <a href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer">Official installers ↗</a>
              <a href={siteConfig.softwareUrl} target="_blank" rel="noreferrer">GitHub source ↗</a>
            </div>
          </section>

          <section id="publications" className="cv-section">
            <p className="cv-kicker">Publications</p>
            <ol className="cv-publication-list">
              {publications.map((publication) => (
                <li key={publication.href}><p>{publication.citation}</p><a href={publication.href} target="_blank" rel="noreferrer">{publication.label} ↗</a></li>
              ))}
            </ol>
          </section>

          <section id="presentations" className="cv-section">
            <p className="cv-kicker">Scientific presentations</p>
            <div className="cv-entry-list">
              {presentations.map((item) => (
                <article key={item.title}>
                  <div className="cv-record"><div><h2>{item.title}</h2><p>{item.event}</p></div><p>{item.date}</p></div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="teaching" className="cv-section">
            <p className="cv-kicker">Teaching experience</p>
            <div className="cv-entry-list">
              {teaching.map((entry) => (
                <article key={entry.institution}>
                  <div className="cv-record"><div><h2>{entry.role}</h2><p>{entry.institution}</p></div><p>{entry.dates}</p></div>
                  <ul className="arrow-list">{entry.courses.map((course) => <li key={course}>{course}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section id="training" className="cv-section">
            <p className="cv-kicker">Conferences, workshops, and training</p>
            <div className="cv-record"><div><h2>COSPAR Capacity Building Workshop 2024</h2><p>Samarkand State University, Samarkand City, Uzbekistan</p></div><p>19-30 August 2024</p></div>
            <p>Participant in training on coronal and interplanetary shocks, using SOHO, SDO, STEREO, ground-based observations, SolarSoft, SunPy, AstroPy, and Python.</p>
          </section>

          <section id="skills" className="cv-section">
            <p className="cv-kicker">Technical skills</p>
            <div className="cv-skills-grid">
              <div><h2>Research domains</h2><p>{researchInterests.map((item) => item.label).join(" · ")}</p></div>
              <div><h2>Programming</h2><p>Python · MATLAB · C/C++ · Machine Learning · Web Development · Arduino</p></div>
              <div><h2>Scientific tools</h2><p>FITS · Astropy · Matplotlib · SunPy · OriginPro · LaTeX · Data acquisition · Signal processing</p></div>
              <div><h2>Platforms and media</h2><p>Linux · Microsoft Office · Adobe Photoshop · Scientific desktop applications</p></div>
            </div>
          </section>

          <section id="leadership" className="cv-section">
            <p className="cv-kicker">Positions of responsibility</p>
            <div className="cv-entry-list compact">
              <article><div className="cv-record"><div><h2>Vice President</h2><p>Astronomical Society, University of Colombo</p></div><p>2022-2023</p></div></article>
              <article><div className="cv-record"><div><h2>Coordinator</h2><p>Astronomical Society, University of Colombo</p></div><p>2020-2022</p></div></article>
            </div>
          </section>

          <section id="referees" className="cv-section">
            <p className="cv-kicker">Referees</p>
            <p>Professional references are available on request. Referee contact details are intentionally omitted from this public website.</p>
          </section>

          <section className="cv-download-note">
            <h2>Privacy-safe downloadable CV</h2>
            <p>The downloadable web edition omits the private home address, telephone number, and referee contact details contained in the source CV.</p>
            <a className="button button-primary" href={siteConfig.cvUrl} download="Sahan-Liyanage-CV.pdf">Download PDF</a>
          </section>

          <Link className="text-link cv-contact-link" href="/contact">Contact Sahan about research or collaboration →</Link>
        </div>
      </div>
    </main>
  );
}
