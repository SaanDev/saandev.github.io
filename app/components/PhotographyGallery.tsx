"use client";

import { Icon } from "./Icons";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "../data/photography";

type GalleryFilter = "All photographs" | GalleryCategory;

const filters: { label: string; value: GalleryFilter }[] = [
  { label: "All work", value: "All photographs" },
  { label: "Astrophotography", value: "Astrophotography" },
  { label: "Wildlife", value: "Wildlife Photography" },
  { label: "Landscapes & other", value: "Other Photography" },
];

function GalleryVisual({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  return (
    <img
      src={item.image}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading={large ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function PhotographyGallery() {
  const [filter, setFilter] = useState<GalleryFilter>("All photographs");
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

  function countFor(value: GalleryFilter) {
    return value === "All photographs"
      ? galleryItems.length
      : galleryItems.filter((item) => item.category === value).length;
  }

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
          {filters.map(({ label, value }) => (
            <button
              type="button"
              key={value}
              className={filter === value ? "active" : ""}
              aria-pressed={filter === value}
              onClick={() => {
                setFilter(value);
                setActiveId(null);
              }}
            >
              <span>{label}</span>
              <small>{String(countFor(value)).padStart(2, "0")}</small>
            </button>
          ))}
        </div>
        <p aria-live="polite">{visible.length} photographs</p>
      </div>

      <div className="photo-grid">
        {visible.map((item, index) => (
          <article className="photo-card" key={item.id}>
            <button
              type="button"
              className="photo-open"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveId(item.id);
              }}
              aria-label={`Open photograph ${index + 1} of ${visible.length}`}
            >
              <GalleryVisual item={item} />
              <span className="photo-sequence" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="photo-open-label">Open <span aria-hidden="true"><Icon name="arrow-up-right" /></span></span>
            </button>
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
          <section className="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Photograph viewer">
            <div className="lightbox-topbar">
              <p>
                {active.category} <span aria-hidden="true">·</span> {activeIndex + 1} / {visible.length}
              </p>
              <button ref={closeRef} type="button" onClick={close} aria-label="Close image viewer">
                Close <span aria-hidden="true"><Icon name="close" /></span>
              </button>
            </div>
            <div
              className="lightbox-visual lightbox-visual-full"
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
              <GalleryVisual item={active} large />
              <button className="lightbox-prev" type="button" onClick={() => move(-1)} aria-label="Previous image">
                <Icon name="arrow-left" />
              </button>
              <button className="lightbox-next" type="button" onClick={() => move(1)} aria-label="Next image">
                <Icon name="arrow-right" />
              </button>
              <p className="lightbox-copyright">© Sahan S Liyanage</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
