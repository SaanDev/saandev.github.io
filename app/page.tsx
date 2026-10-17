import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "./data/content";

export const metadata: Metadata = {
  title: { absolute: "Sahan S Liyanage | Physics Graduate" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const skills = [
  { title: "Scientific computing", description: "Python, C/C++, and MATLAB for data analysis, physical modelling, and scientific software." },
  { title: "Experiment & observation", description: "Solar-radio observations, optical spectroscopy, instrumentation, and signal processing." },
  { title: "Teaching & communication", description: "University teaching, research mentoring, and hands-on astronomy workshops." },
];

export default function HomePage() {
  return (
    <main id="main-content" className="home-minimal">
      <section className="intro-section container">
        <div className="intro-copy">
          <p className="eyebrow">Physics graduate · Sri Lanka</p>
          <h1>Sahan S<br />Liyanage<span className="intro-dot">.</span></h1>
          <p className="intro-lead">Exploring physics through observation, experiment, and code.</p>
          <p className="intro-description">I’m a physics graduate from the University of Colombo, currently working as a Research Assistant at the Arthur C. Clarke Institute for Modern Technologies.</p>
          <p className="study-note">Seeking graduate study opportunities in physics.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/research">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" href="/cv">View CV</Link>
          </div>
        </div>
        <img className="intro-portrait" src="/images/sahan-liyanage-portrait.jpg" alt="Sahan S Liyanage" fetchPriority="high" />
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <p className="eyebrow">What I can do</p>
          <h2>My skills</h2>
          <div className="home-skills-grid">{skills.map((skill, index) => (
            <article key={skill.title}><span className="skill-number">0{index + 1}</span><h3>{skill.title}</h3><p>{skill.description}</p></article>
          ))}</div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="home-section-heading"><div><p className="eyebrow">From questions to tools</p><h2>Selected projects</h2></div><Link className="text-link" href="/research">All research ↗</Link></div>
          <article className="featured-tool">
            <a className="featured-tool-image" href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer" aria-label="Visit e-CALLISTO FITS Analyzer website"><img src="/images/research/Analyzer/radio.webp" alt="e-CALLISTO FITS Analyzer displaying a solar radio burst spectrum" loading="lazy" /></a>
            <div className="featured-tool-copy"><p className="eyebrow">Scientific software · Lead developer</p><h3>e-CALLISTO<br />FITS Analyzer</h3><p>An open-source desktop application for downloading, processing, and analysing solar-radio data. Published in RAS Techniques and Instruments.</p><p className="project-platforms">Python · Qt · Windows / macOS / Linux</p><a className="text-link" href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer">Visit project website ↗</a></div>
          </article>
          <div className="selected-projects-grid">
            <Link href="/research#coronal-shock-waves" className="selected-project"><span className="eyebrow">Solar physics</span><h3>Coronal shock waves <span aria-hidden="true">↗</span></h3><p>Using Type II solar radio bursts to estimate shock speeds and source heights.</p></Link>
            <Link href="/research#space-weather-dashboard" className="selected-project"><span className="eyebrow">Data & software</span><h3>Space weather dashboard <span aria-hidden="true">↗</span></h3><p>Bringing solar and geospace observations together in one monitoring workspace.</p></Link>
          </div>
        </div>
      </section>

      <section className="section home-photography" id="beyond">
        <div className="container">
          <div className="home-section-heading"><div><p className="eyebrow">Beyond physics</p><h2>Beyond the classroom</h2></div><Link className="text-link" href="/beyond">Explore Beyond ↗</Link></div>
          <div className="home-photo-grid">
            <Link href="/beyond/photography" aria-label="Explore photography"><img src="/images/photography/astrophotography/milky-way-road.webp" alt="The Milky Way above a quiet road" loading="lazy" /></Link>
            <Link href="/beyond/music" aria-label="Explore music"><img src="/images/personal/music-naada-nu-vocal-performance.webp" alt="Sahan singing on stage" loading="lazy" /></Link>
            <Link href="/beyond/outreach" aria-label="Explore outreach and activities"><img src="/images/personal/astronomy-public-telescope.webp" alt="Students taking part in an astronomy programme" loading="lazy" /></Link>
          </div>
        </div>
      </section>

      <section className="section home-contact" id="contact"><div className="container home-section-heading"><div><p className="eyebrow">Get in touch</p><h2>Let’s connect.</h2><p>I’d love to hear about graduate study opportunities<br className="desktop-break" /> and research collaborations in physics.</p></div><a className="text-link home-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email} ↗</a></div></section>
    </main>
  );
}
