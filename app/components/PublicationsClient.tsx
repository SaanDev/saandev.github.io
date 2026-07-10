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

  function showLinkPlaceholder(label: string, title: string) {
    setNotice(`${label} is not linked yet for “${title}”. Add the verified URL before publication.`);
  }

  async function copyBibTeX(title: string) {
    const template = `@misc{add_verified_key,\n  title = {${title}},\n  author = {[ADD VERIFIED AUTHORS]},\n  year = {[ADD YEAR]}\n}`;
    try {
      await navigator.clipboard.writeText(template);
      setNotice("A clearly marked BibTeX template was copied. Replace every placeholder with verified citation data.");
    } catch {
      setNotice("Copying is unavailable in this browser. Add the verified BibTeX citation before publication.");
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
        Showing {visible.length} editable {visible.length === 1 ? "entry" : "entries"}
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
                <span className="placeholder-text">{publication.year}</span>
                <span>{publication.topic}</span>
              </div>
              <p className="publication-authors placeholder-text">{publication.authors}</p>
              <h2 className="placeholder-text">{publication.title}</h2>
              <p className="publication-venue">
                <span className="placeholder-text">{publication.venue}</span>
                {" · "}
                <span className="placeholder-text">{publication.details}</span>
              </p>
              <details>
                <summary>Abstract</summary>
                <p className="placeholder-text">{publication.abstract}</p>
              </details>
              <div className="publication-actions" aria-label={`Links for ${publication.title}`}>
                {["DOI", "PDF", "Publisher", "Code"].map((label) => (
                  <button
                    type="button"
                    className="chip-button"
                    key={label}
                    onClick={() => showLinkPlaceholder(label, publication.title)}
                  >
                    {label}
                  </button>
                ))}
                <button
                  type="button"
                  className="chip-button"
                  onClick={() => copyBibTeX(publication.title)}
                >
                  BibTeX
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {notice && (
        <div className="action-notice placeholder-note" role="status">
          {notice}
          <button type="button" onClick={() => setNotice("")} aria-label="Dismiss notice">
            ×
          </button>
        </div>
      )}
    </>
  );
}
