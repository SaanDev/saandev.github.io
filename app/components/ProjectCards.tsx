import Link from "next/link";
import { projects } from "../data/content";
import { PlaceholderMedia } from "./PlaceholderMedia";

export function ProjectCards() {
  return (
    <div className="project-card-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.id}>
          <PlaceholderMedia
            label={project.imageLabel}
            alt={`Image placeholder for ${project.title}`}
            className="project-card-media"
          />
          <div className="project-card-body">
            <p className="card-index">0{index + 1} · {project.eyebrow}</p>
            <h3 className={project.title.startsWith("[") ? "placeholder-text" : ""}>
              {project.title}
            </h3>
            <p>{project.summary}</p>
            <ul className="tag-list" aria-label={`${project.title} keywords`}>
              {project.keywords.map((keyword) => (
                <li className={keyword.startsWith("[") ? "placeholder-note" : ""} key={keyword}>
                  {keyword}
                </li>
              ))}
            </ul>
            <Link className="text-link" href={`/research#${project.id}`}>
              Read more <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
