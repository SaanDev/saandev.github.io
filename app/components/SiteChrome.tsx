"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig, socialProfiles } from "../data/content";

function SolarMark() {
  return (
    <span className="solar-mark" aria-hidden="true">
      <span />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Sahan S Liyanage, home">
          <SolarMark />
          <span>{siteConfig.name}</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function PlaceholderToggle() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("hide-editing-placeholders") === "true";
    setHidden(stored);
    document.documentElement.classList.toggle("hide-placeholders", stored);
  }, []);

  function toggle() {
    const next = !hidden;
    setHidden(next);
    window.localStorage.setItem("hide-editing-placeholders", String(next));
    document.documentElement.classList.toggle("hide-placeholders", next);
  }

  return (
    <button className="placeholder-toggle" type="button" onClick={toggle}>
      <span className="toggle-dot" aria-hidden="true" />
      {hidden ? "Show editing placeholders" : "Hide editing placeholders"}
    </button>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-identity">
          <div className="brand footer-brand">
            <SolarMark />
            <span>{siteConfig.name}</span>
          </div>
          <p>{siteConfig.shortTitle}</p>
          <div className="social-row" aria-label="Professional profiles">
            {socialProfiles.map((profile) =>
              profile.url ? (
                <a
                  href={profile.url}
                  key={profile.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={profile.label}
                >
                  {profile.short}
                </a>
              ) : (
                <Link
                  href="/contact#profiles"
                  key={profile.label}
                  aria-label={`${profile.label} profile placeholder`}
                  title={profile.placeholder}
                >
                  {profile.short}
                </Link>
              ),
            )}
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-label">Explore</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-note">
          <p className="footer-label">Editing mode</p>
          <p>
            Draft details remain clearly marked until verified content and user-supplied media are added.
          </p>
          <PlaceholderToggle />
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} Sahan S Liyanage. All rights reserved.</p>
        <p>Built for research, collaboration, and public engagement.</p>
      </div>
    </footer>
  );
}
