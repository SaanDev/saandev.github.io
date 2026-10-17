import { Icon } from "../components/Icons";
import { SocialLinks } from "../components/SocialLinks";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { PrintButton } from "../components/PrintButton";
import { projects, publications, siteConfig } from "../data/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Academic curriculum vitae of Sahan S Liyanage, including research, education, software, publications, presentations, teaching, awards, leadership, and outreach.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "Curriculum Vitae | Sahan S Liyanage",
    description: "Online academic CV of Sahan S Liyanage.",
    url: "/cv",
  },
};

const researchExperience = [
  {
    title: "Undergraduate Research Project",
    institution: "Department of Physics, University of Colombo",
    dates: "May 2023 - April 2024",
    subtitle: "Determination of the Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
    bullets: [
      "Analysed 25 metric Type II solar radio bursts recorded by the e-CALLISTO network between January 2022 and October 2023.",
      "Built a Python noise-reduction and burst-isolation pipeline using maximum-intensity points from each dynamic spectrum.",
      "Derived shock speeds of 343-1032 km/s and source heights of 1.317-1.724 solar radii from plasma-oscillation theory and the Newkirk coronal-density model.",
      "Validated the fitted power-law index against Aguilar-Rodríguez et al. (2005) to 99.4% agreement and found no correlation between shock speed and associated CME speed.",
      "Supervisors: Dr. Janaka Adassuriya and Prof. K. P. S. C. Jayaratne.",
    ],
  },
  {
    title: "Raman Spectroscopy Project",
    institution: "Department of Physics, University of Colombo",
    dates: "November 2022 - March 2023",
    subtitle: "Raman Spectroscopic Analysis of Common Minerals in Sri Lanka",
    bullets: [
      "Recorded spectra of eleven Sri Lankan mineral samples using an Andor Kymera 328i-A spectrograph, 532 nm laser, and sulphur calibration reference.",
      "Processed spectra in Python using asymmetric least-squares baseline correction and Savitzky-Golay smoothing, then assigned characteristic vibrational modes.",
      "Worked with the Geological Survey and Mines Bureau of Sri Lanka toward a reference Raman dataset for common Sri Lankan minerals.",
      "Supervisor: Prof. H. H. E. Jayaweera.",
    ],
  },
  {
    title: "Final-Year Undergraduate Research Mentor",
    institution: "Department of Physics, University of Colombo",
    dates: "May 2025 - April 2026",
    subtitle: "Estimating Coronal Magnetic Field Strength from Band Splitting in Type II Solar Radio Bursts",
    bullets: [],
  },
];

const presentations = [
  {
    title: "Determination of Speed and Source Height of Coronal Shock Waves Using Type II Solar Radio Bursts",
    event: "41st Technical Sessions, Institute of Physics, Sri Lanka - University of Colombo",
    date: "22 March 2025",
    detail: "On-site oral presentation of undergraduate research findings to the national physics research community.",
  },
  {
    title: "Solar Radio Bursts and Space Weather",
    event: "Physics Society, University of Colombo",
    date: "20 November 2024",
    detail: "On-site oral presentation for physics undergraduates.",
  },
  {
    title: "Introduction to Solar Physics",
    event: "Astronomical Society, Rajarata University of Sri Lanka",
    date: "18 July 2024",
    detail: "Online introductory lecture for university students.",
  },
];

const teaching = [
  { role: "Visiting Lecturer", institution: "Department of Physics, University of Colombo", dates: "October 2026 - Present", courses: ["Certificate in Astronomy course"] },
  {
    role: "Teaching Assistant",
    institution: "University of Colombo School of Computing",
    dates: "August 2025 - March 2026",
    courses: [
      "Probability and Statistics for first-year Computer Science majors",
      "Digital Signal Processing for second-year Computer Science majors",
      "Cryptography and Information Security for second-year Computer Science majors",
    ],
  },
  {
    role: "Teaching Assistant",
    institution: "Department of Physics, University of Colombo",
    dates: "May 2024 - May 2025",
    courses: [
      "Instructor in charge of fourth-year Computational Electrodynamics (10 students)",
      "Instructor in charge of third-year Advanced Physics Laboratory I (10 students)",
      "Instructor for second-year Analogue and Digital Electronic Principles Laboratory (120 students)",
      "Instructor for first-year General Physics Laboratory I and II (120 and 77 students)",
    ],
  },
];

export default function CVPage() {
  return (
    <main id="main-content" className="cv-page">
      <PageIntro
        eyebrow="Curriculum Vitae"
        title="Academic experience and research practice."
        description="Physics graduate seeking graduate study opportunities, with experience in research, scientific computing, and university teaching."
      >
        <div className="button-row cv-actions">
          <a className="button button-primary" href={siteConfig.cvUrl} download="GLSS_Liyanage_CV.pdf">
            <Icon name="download" /> Download CV
          </a>
          <PrintButton />
        </div>
        <p className="last-updated">The original PDF is available to download or open in your browser to print.</p>
      </PageIntro>

      <div className="container cv-layout">
        <aside className="cv-sidebar" aria-label="CV section navigation">
          <p>On this page</p>
          <nav>
            <a href="#summary">Professional summary</a>
            <a href="#position">Current position</a>
            <a href="#education">Education</a>
            <a href="#experience">Research experience</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
            <a href="#teaching">Teaching</a>
            <a href="#engagements">Academic engagements</a>
            <a href="#skills">Skills and techniques</a>
          </nav>
        </aside>

        <div className="cv-document">
          <section id="summary" className="cv-section">
            <p className="cv-kicker">Professional summary</p>
            <h2>Sahan S Liyanage</h2>
            <p className="cv-lead">{siteConfig.title}</p>
            <p>
              I hold a BSc Honours in Physics from the University of Colombo and am seeking graduate study opportunities in physics. My experience includes solar-radio research, optical spectroscopy, scientific software development, and university teaching.
            </p>
            <SocialLinks />
          </section>

          <section id="position" className="cv-section">
            <p className="cv-kicker">Professional experience</p>
            <div className="cv-record">
              <div>
                <h2>Research Assistant - Astronomy and Space Applications Division</h2>
                <p>Arthur C. Clarke Institute for Modern Technologies, Katubedda, Moratuwa, Sri Lanka</p>
              </div>
              <p>May 2026 - Present</p>
            </div>
            <ul className="arrow-list">
              <li>Conduct solar-radio observations with the e-CALLISTO antenna system, including calibration, performance checks, and maintenance of antenna and spectrometer hardware.</li>
              <li>Carry out H-alpha solar observations and record, process, and interpret the resulting images.</li>
              <li>Perform astronomical spectroscopy with optical telescopes and reduce and interpret the resulting spectra.</li>
              <li>Develop software and automated pipelines for observational data acquisition, processing, and archiving.</li>
              <li>Support public workshops and observation sessions in space physics and astronomy.</li>
            </ul>
          </section>

          <section id="education" className="cv-section">
            <p className="cv-kicker">Education</p>
            <div className="cv-record">
              <div>
                <h2>BSc Honours in Physics - Second Class (Upper Division)</h2>
                <p>Department of Physics, University of Colombo, Sri Lanka</p>
              </div>
              <p>January 2020 - May 2024</p>
            </div>
            <div className="cv-metric-row">
              <div><span>Cumulative GPA</span><strong>3.57 / 4.00</strong><small>126 credit hours</small></div>
              <div><span>Degree classification</span><strong>Second Upper</strong><small>BSc Honours in Physics</small></div>
            </div>
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
            <p className="cv-kicker">Projects and scientific software</p>
            {projects.map((project) => (
              <div className="cv-project" key={project.id}>
                <div className="cv-record"><h2>{project.title}</h2><p>{project.duration}</p></div>
                <p>{project.summary}</p>
                <ul className="tag-list">{project.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}</ul>
                {project.links.length > 0 && <div className="cv-project-links">{project.links.map((link) => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <Icon name="arrow-up-right" /></a>)}</div>}
              </div>
            ))}
          </section>

          <section id="publications" className="cv-section">
            <p className="cv-kicker">Publications</p>
            <ol className="cv-publication-list">
              {publications.map((publication) => (
                <li key={publication.id}>
                  <p>{publication.authors} ({publication.year}). {publication.title}. <em>{publication.venue}</em>. {publication.details}.</p>
                  <div className="cv-project-links">{publication.links.slice(0, 2).map((link) => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <Icon name="arrow-up-right" /></a>)}</div>
                </li>
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

          <section id="engagements" className="cv-section">
            <p className="cv-kicker">Academic engagements</p>
            <div className="cv-entry-list">
              <article>
                <div className="cv-record"><div><h2>Instructor - COSPAR Capacity Building Workshop 2026</h2><p>National Research Institute of Astronomy and Geophysics, Cairo, Egypt</p></div><p>31 August - 11 September 2026</p></div>
                <p>Taught solar-radio data analysis using Python at the workshop on Earth-Affecting Solar Transients.</p>
              </article>
              <article>
                <div className="cv-record"><div><h2>COSPAR Capacity Building Workshop 2024</h2><p>Samarkand State University, Samarkand, Uzbekistan</p></div><p>19-30 August 2024</p></div>
                <p>Completed practical training on coronal and interplanetary shocks using SOHO, SDO, STEREO, ground-based observations, SolarSoft, SunPy, AstroPy, and Python.</p>
              </article>
              <article>
                <div className="cv-record"><div><h2>Designing Physics Laboratory Experiments</h2><p>General Physics Laboratory II, Department of Physics, University of Colombo</p></div></div>
                <p>Designed the first-year optical-spectrometer laboratory sheet, integrating theory, pre-lab questions, and procedures covering prisms, refractive index, diffraction gratings, and atomic emission spectra.</p>
              </article>
            </div>
          </section>

          <section id="skills" className="cv-section">
            <p className="cv-kicker">Skills and techniques</p>
            <div className="cv-skills-grid">
              <div><h2>Programming and scientific computing</h2><p>Python · C/C++ · MATLAB · SunPy · AstroPy · NumPy · SciPy · Matplotlib · FITS · Qt GUI development</p></div>
              <div><h2>Laboratory and instrumentation</h2><p>Raman and UV-Vis spectroscopy · Astronomical spectroscopy · e-CALLISTO radio spectrometry · Analogue and digital electronics · Data acquisition · Signal processing · Microcontrollers</p></div>
              <div><h2>Software and professional practice</h2><p>OriginPro · SolidWorks · Microsoft Office · Adobe Photoshop · LaTeX · Arduino · Linux · Web development · Project planning · Teaching · Mentoring · Team coordination</p></div>
            </div>
          </section>

          <Link className="text-link cv-contact-link" href="/contact">Contact Sahan about research or collaboration <Icon name="arrow-right" /></Link>
        </div>
      </div>
    </main>
  );
}
