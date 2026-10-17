"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { navigation, siteConfig, socialProfiles } from "../data/content";

type Theme = "light" | "dark";

function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(
    (onStoreChange) => {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const onSystemThemeChange = () => {
        if (window.localStorage.getItem("site-theme")) return;
        document.documentElement.dataset.theme = media.matches ? "dark" : "light";
        document.documentElement.style.colorScheme = media.matches ? "dark" : "light";
        onStoreChange();
      };
      window.addEventListener("site-theme-change", onStoreChange);
      media.addEventListener("change", onSystemThemeChange);
      return () => {
        window.removeEventListener("site-theme-change", onStoreChange);
        media.removeEventListener("change", onSystemThemeChange);
      };
    },
    () => document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    () => "light",
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("site-theme", nextTheme);
    window.dispatchEvent(new Event("site-theme-change"));
  }

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" aria-hidden="true" />
      <span className="theme-toggle-label">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
        <Link
          className="brand"
          href="/"
          aria-label="Sahan S Liyanage, home"
          onClick={() => setOpen(false)}
        >
          <span>{siteConfig.name}</span>
        </Link>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            if (item.children) {
              return (
                <div className="nav-item-with-submenu" key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={active ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {item.label} <span className="submenu-indicator" aria-hidden="true">⌄</span>
                  </Link>
                  <div className="nav-submenu" aria-label={`${item.label} submenu`}>
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
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
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer compact-footer">
      <div className="container compact-footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="compact-footer-links" aria-label="Professional profiles">
          {socialProfiles.filter((profile) => ["LinkedIn", "GitHub", "Google Scholar"].includes(profile.label)).map((profile) => <a key={profile.label} href={profile.url} target="_blank" rel="noreferrer">{profile.label} ↗</a>)}
        </div>
      </div>
    </footer>
  );
}
