"use client";

import { useMemo, useState } from "react";
import { publicationCategories, publications } from "../data/content";

const topics = ["All topics", ...Array.from(new Set(publications.map((item) => item.topic)))];
const years = ["All years", ...Array.from(new Set(publications.map((item) => item.year)))];

export function PublicationsClient() {
  const [type, setType] = useState("All types");
  const [topic, setTopic] = useState("All topics");
  const [year, setYear] = useState("All years");
  const [notice, setNotice] = useState("");

  const visible = useMemo(
    () =>
      publications.filter(
        (item) =>
          (type === "All types" || item.type === type) &&
          (topic === "All topics" || item.topic === topic) &&
          (year === "All years" || item.year === year),
      ),
    [topic, type, year],
  );

  async function copyBibTeX(citation: string) {
    try {
      await navigator.clipboard.writeText(citation);
      setNotice("BibTeX citation copied.");
    } catch {
      setNotice("Copying is unavailable in this browser.");
    }
  }

  return (
    <>
      <div className="publication-filters" aria-label="Publication filters">
        <label>
          <span>Year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            {years.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Publication type</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            {["All types", ...publicationCategories].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Research topic</span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topics.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="filter-summary" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "entry" : "entries"}
      </p>

      <div className="publication-list">
        {visible.map((publication, index) => (
          <article className="publication-entry" key={publication.id}>
            <div className="publication-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="publication-content">
              <div className="publication-meta">
                <span>{publication.type}</span>
                <span>{publication.year}</span>
                <span>{publication.topic}</span>
              </div>
              <p className="publication-authors">{publication.authors}</p>
              <h2>{publication.title}</h2>
              <p className="publication-venue">
                <span>{publication.venue}</span>
                {" · "}
                <span>{publication.details}</span>
              </p>
              <details>
                <summary>Summary</summary>
                <p>{publication.abstract}</p>
              </details>
              <div className="publication-actions" aria-label={`Links for ${publication.title}`}>
                {publication.links.map((link) => (
                  <a
                    className="chip-button"
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  className="chip-button"
                  onClick={() => copyBibTeX(publication.bibtex)}
                >
                  BibTeX
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {notice && (
        <div className="action-notice" role="status">
          {notice}
          <button type="button" onClick={() => setNotice("")} aria-label="Dismiss notice">
            ×
          </button>
        </div>
      )}
    </>
  );
}
