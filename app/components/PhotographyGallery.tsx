"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { galleryItems, type GalleryItem } from "../data/content";

const categories = ["All photographs", "Astrophotography", "Wildlife Photography"] as const;

function GalleryVisual({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  if (item.image) {
    return (
      <img
        src={item.image}
        alt={item.alt}
        loading={large ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <div className="photo-placeholder placeholder-note" role="img" aria-label={item.alt}>
      <span className="photo-crosshair" aria-hidden="true" />
      <span>[UPLOAD {item.subcategory.toUpperCase()} IMAGE]</span>
    </div>
  );
}

function Metadata({ item }: { item: GalleryItem }) {
  const rows = [
    ["Date", item.date],
    ["Location", item.location],
    ["Subject", item.subject],
    ["Camera", item.camera],
    ["Lens / telescope", item.lens],
    ["Mount", item.mount],
    ["Filter", item.filter],
    ["Exposure", item.exposure],
    ["Frames", item.frames],
    ["Processing", item.software],
  ];

  return (
    <dl className="photo-metadata">
      {rows.map(([label, value]) => (
        <div key={label} className={value.startsWith("[") ? "placeholder-note" : ""}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PhotographyGallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All photographs");
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const pointerStart = useRef<number | null>(null);

  const visible = useMemo(
    () => galleryItems.filter((item) => filter === "All photographs" || item.category === filter),
    [filter],
  );
  const activeIndex = visible.findIndex((item) => item.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  function close() {
    setActiveId(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function move(direction: number) {
    if (!visible.length || activeIndex < 0) return;
    const next = (activeIndex + direction + visible.length) % visible.length;
    setActiveId(visible[next].id);
  }

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    document.body.classList.add("lightbox-open");

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>(".lightbox-dialog");
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKeyDown);
    };
    // The navigation handlers intentionally follow the current filtered list.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, filter]);

  return (
    <>
      <div className="gallery-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter photographs by category">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={filter === category ? "active" : ""}
              aria-pressed={filter === category}
              onClick={() => {
                setFilter(category);
                setActiveId(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <p aria-live="polite">{visible.length} editable image slots</p>
      </div>

      <div className="photo-grid">
        {visible.map((item, index) => (
          <article className={`photo-card photo-card-${(index % 3) + 1}`} key={item.id}>
            <button
              type="button"
              className="photo-open"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveId(item.id);
              }}
              aria-label={`Open ${item.title} in gallery viewer`}
            >
              <GalleryVisual item={item} />
              <span className="photo-open-label">View image <span aria-hidden="true">↗</span></span>
            </button>
            <div className="photo-card-copy">
              <p>{item.subcategory}</p>
              <h2 className="placeholder-text">{item.title}</h2>
              <span className="placeholder-text">{item.location}</span>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="lightbox-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <section
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <div className="lightbox-topbar">
              <p>{activeIndex + 1} / {visible.length}</p>
              <button ref={closeRef} type="button" onClick={close} aria-label="Close image viewer">
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="lightbox-layout"
              onPointerDown={(event) => {
                pointerStart.current = event.clientX;
              }}
              onPointerUp={(event) => {
                if (pointerStart.current === null) return;
                const distance = event.clientX - pointerStart.current;
                if (Math.abs(distance) > 60) move(distance < 0 ? 1 : -1);
                pointerStart.current = null;
              }}
            >
              <div className="lightbox-visual">
                <GalleryVisual item={active} large />
                <button className="lightbox-prev" type="button" onClick={() => move(-1)} aria-label="Previous image">
                  ←
                </button>
                <button className="lightbox-next" type="button" onClick={() => move(1)} aria-label="Next image">
                  →
                </button>
              </div>
              <div className="lightbox-caption">
                <p className="eyebrow">{active.category} · {active.subcategory}</p>
                <h2 id="lightbox-title" className="placeholder-text">{active.title}</h2>
                <p className="placeholder-text">{active.note}</p>
                <Metadata item={active} />
                <p className="photo-copyright">© Sahan S Liyanage</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
