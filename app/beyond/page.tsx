import { Icon } from "../components/Icons";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { beyondSections } from "../data/beyond";

export const metadata: Metadata = {
  title: "Beyond",
  description: "Photography, music, nature, and community activities beyond physics.",
  alternates: { canonical: "/beyond" },
  openGraph: { title: "Beyond | Sahan S Liyanage", description: "Photography, music, nature, and community activities beyond physics.", url: "/beyond" },
};

export default function BeyondPage() {
  return <main id="main-content">
    <PageIntro eyebrow="Beyond physics" title="Curiosity beyond the classroom." description="Through a camera, on stage, out in nature, and in the community — a few other parts of my life." />
    <section className="section beyond-directory" aria-label="Explore my interests">
      <div className="container beyond-directory-grid">
        {beyondSections.map((item) => <Link className="beyond-directory-card" href={item.href} key={item.href}>
          <img src={item.image} alt={item.alt} loading="lazy" />
          <div><h2>{item.title}<span aria-hidden="true"><Icon name="arrow-up-right" /></span></h2><p>{item.description}</p></div>
        </Link>)}
      </div>
    </section>
  </main>;
}
