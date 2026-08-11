import Link from "next/link";
import { projects } from "../data/content";
import { PlaceholderMedia } from "./PlaceholderMedia";

type ProjectCardsProps = {
  showImages?: boolean;
  limit?: number;
};

export function ProjectCards({ showImages = true, limit }: ProjectCardsProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="project-card-grid">
      {visibleProjects.map((project, index) => {
        const hasImage = showImages && Boolean(project.image);

        return (
          <article
            className={`project-card${hasImage ? "" : " project-card-text-only"}`}
            key={project.id}
          >
            {hasImage && (
              <PlaceholderMedia
                label=""
                src={project.image}
                alt={project.imageAlt}
                className="project-card-media"
              />
            )}
            <div className="project-card-body">
              <p className="card-index">0{index + 1} · {project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-duration">{project.duration}</p>
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
        );
      })}
    </div>
  );
}
