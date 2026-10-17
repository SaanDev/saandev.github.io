"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { navigation, siteConfig } from "../data/content";

import { Icon } from "./Icons";
import { SocialLinks } from "./SocialLinks";

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
      <Icon name={theme === "light" ? "sun" : "moon"} />
      <span className="theme-toggle-label">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (open) menuRef.current?.focus();
      }
    };
    const onOutsideClick = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 981px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutsideClick);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutsideClick);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
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
                    {item.label} <span className="submenu-indicator" aria-hidden="true"><Icon name="chevron-down" /></span>
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
            ref={menuRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
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
        <SocialLinks />
      </div>
    </footer>
  );
}
