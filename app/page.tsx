import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "./components/Icons";
import { SocialLinks } from "./components/SocialLinks";
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

const beyond = [
  { href: "/beyond/photography", title: "Photography", image: "/images/photography/astrophotography/milky-way-road.webp", alt: "The Milky Way above a quiet road" },
  { href: "/beyond/music", title: "Music", image: "/images/personal/music-naada-nu-vocal-performance.webp", alt: "Sahan singing on stage" },
  { href: "/beyond/outreach", title: "Outreach", image: "/images/personal/astronomy-public-telescope.webp", alt: "Students taking part in an astronomy programme" },
];

export default function HomePage() {
  return (
    <main id="main-content" className="home-minimal">
      <section className="intro-section container" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">Physics graduate · Sri Lanka</p>
          <h1 id="intro-title">Sahan S Liyanage<span className="intro-dot">.</span></h1>
          <p className="intro-lead">Exploring physics through observation, experiment, and code.</p>
          <p className="intro-description">I’m a physics graduate from the University of Colombo and a Research Assistant at the Arthur C. Clarke Institute for Modern Technologies.</p>
          <p className="study-note"><span aria-hidden="true" />Seeking graduate study opportunities in physics.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/research">Explore my work <Icon name="arrow-right" /></Link>
            <Link className="button button-secondary" href="/cv">View CV</Link>
          </div>
          <SocialLinks className="intro-profiles" />
        </div>
        <div className="intro-image-wrap">
          <img className="intro-portrait" src="/images/sahan-liyanage-portrait.webp" width="960" height="958" alt="Sahan S Liyanage" fetchPriority="high" />
        </div>
      </section>

      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <div className="home-section-heading"><div><p className="eyebrow">What I can do</p><h2 id="skills-title">A practical foundation in physics.</h2></div></div>
          <div className="home-skills-grid">
            {skills.map((skill, index) => <article key={skill.title}>
              <span className="skill-number">0{index + 1}</span><h3>{skill.title}</h3><p>{skill.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <div className="home-section-heading">
            <div><p className="eyebrow">Research & development</p><h2 id="projects-title">Selected projects</h2></div>
            <Link className="text-link" href="/research">All research <Icon name="arrow-right" /></Link>
          </div>
          <article className="featured-tool">
            <a className="featured-tool-image" href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer" aria-label="Visit e-CALLISTO FITS Analyzer website">
              <img src="/images/research/Analyzer/radio.webp" alt="e-CALLISTO FITS Analyzer displaying a solar radio burst spectrum" loading="lazy" />
            </a>
            <div className="featured-tool-copy">
              <p className="eyebrow">Scientific software · Lead developer</p><h3>e-CALLISTO FITS Analyzer</h3>
              <p>An open-source application for downloading, processing, and analysing solar-radio data. Published in RAS Techniques and Instruments.</p>
              <p className="project-platforms">Python · Qt · Windows / macOS / Linux</p>
              <a className="text-link" href={siteConfig.eCallistoUrl} target="_blank" rel="noreferrer">Visit project website <Icon name="arrow-up-right" /></a>
            </div>
          </article>
          <div className="selected-projects-grid">
            <Link href="/research#coronal-shock-waves" className="selected-project">
              <span className="eyebrow">Solar physics</span><h3>Coronal shock waves <Icon name="arrow-up-right" /></h3><p>Using Type II solar radio bursts to estimate shock speeds and source heights.</p>
            </Link>
            <Link href="/research#space-weather-dashboard" className="selected-project">
              <span className="eyebrow">Data & software</span><h3>Space weather dashboard <Icon name="arrow-up-right" /></h3><p>Bringing solar and geospace observations together in one monitoring workspace.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-photography" id="beyond" aria-labelledby="beyond-title">
        <div className="container">
          <div className="home-section-heading">
            <div><p className="eyebrow">Beyond physics</p><h2 id="beyond-title">Beyond the classroom</h2></div>
            <Link className="text-link" href="/beyond">Explore Beyond <Icon name="arrow-right" /></Link>
          </div>
          <div className="home-photo-grid">{beyond.map((item) => <Link href={item.href} key={item.href} aria-label={`Explore ${item.title.toLowerCase()}`}>
            <img src={item.image} alt={item.alt} loading="lazy" /><span className="beyond-preview-label">{item.title}<Icon name="arrow-up-right" /></span>
          </Link>)}</div>
        </div>
      </section>

      <section className="section home-contact" id="contact" aria-labelledby="contact-title">
        <div className="container home-contact-panel">
          <div><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let’s connect.</h2><p>I’d love to hear about graduate study opportunities and research collaborations in physics.</p></div>
          <a className="button button-primary" href={`mailto:${siteConfig.email}`}><Icon name="mail" />{siteConfig.email}</a>
        </div>
      </section>
    </main>
  );
}
