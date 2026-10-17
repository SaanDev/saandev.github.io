"use client";

import { Icon } from "./Icons";

import { useEffect, useRef, useState } from "react";

const dashboardViews = [
  {
    name: "Monitoring overview",
    src: "/images/research/space-weather-dashboard/monitoring-overview.webp",
    alt: "Space Weather Monitoring Dashboard overview with coordinated solar and geospace data panels",
  },
  {
    name: "Alert stream",
    src: "/images/research/space-weather-dashboard/alerts.webp",
    alt: "Space-weather alert stream with event summaries and activity histograms",
  },
  {
    name: "CALLISTO analysis",
    src: "/images/research/space-weather-dashboard/radio-burst-analysis.webp",
    alt: "CALLISTO radio-burst analysis workspace with a dynamic spectrum and derived signal plots",
  },
  {
    name: "CME forecast",
    src: "/images/research/space-weather-dashboard/cme-forecast.webp",
    alt: "Coronal mass ejection forecast workspace with model outputs, charts, and an impact map",
  },
  {
    name: "SDO analysis",
    src: "/images/research/space-weather-dashboard/sdo-analysis.webp",
    alt: "Solar Dynamics Observatory archive and solar-image analysis workspace",
  },
  {
    name: "Event timeline",
    src: "/images/research/space-weather-dashboard/event-timeline.webp",
    alt: "Combined space-weather event timeline with radio spectra and solar imagery",
  },
];

export function DashboardShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeView = dashboardViews[activeIndex];

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = 0;
    }
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + dashboardViews.length) % dashboardViews.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % dashboardViews.length);
  };

  return (
    <section className="dashboard-showcase" aria-labelledby="dashboard-showcase-title">
      <div className="dashboard-showcase-intro">
        <div>
          <p className="eyebrow">Interactive system tour</p>
          <h3 id="dashboard-showcase-title">Inside the monitoring workspace</h3>
        </div>
        <p>
          Six connected views bring live monitoring, scientific analysis, forecasting,
          and historical context into one research environment.
        </p>
      </div>

      <div className="dashboard-showcase-stage">
        <div className="dashboard-view-switcher" aria-label="Dashboard views">
          <p>System views</p>
          {dashboardViews.map((view, index) => (
            <button
              className={index === activeIndex ? "active" : ""}
              type="button"
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              key={view.src}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {view.name}
            </button>
          ))}
        </div>

        <div className="dashboard-browser">
          <div className="dashboard-browser-bar">
            <span className="dashboard-browser-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <strong>{activeView.name}</strong>
            <span className="dashboard-browser-count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(dashboardViews.length).padStart(2, "0")}
            </span>
          </div>
          <div
            className="dashboard-showcase-viewport"
            ref={viewportRef}
            aria-live="polite"
          >
            <img
              src={activeView.src}
              alt={activeView.alt}
              loading={activeIndex === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
          <div className="dashboard-browser-navigation">
            <button type="button" onClick={showPrevious} aria-label="Show previous dashboard view">
              <Icon name="arrow-left" />
            </button>
            <span>Scroll to inspect the full view</span>
            <button type="button" onClick={showNext} aria-label="Show next dashboard view">
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
