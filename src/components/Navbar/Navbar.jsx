import React, { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./navbar.css";

export default function Navbar({
  t,
  lang,
  setLanguage,
  activeSection,
  onNav,
  theme,
  toggleTheme,
}) {
  const navItems = useMemo(
    () => [
      { id: "home", label: t("nav_home") },
      { id: "about", label: t("nav_about") },
      { id: "skills", label: t("nav_skills") },
      { id: "projects", label: t("nav_projects") },
      { id: "resume", label: t("nav_resume") },

      { id: "contact", label: t("nav_contact") },
    ],
    [t],
  );

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    setDrawerOpen(false);
    onNav?.(id);
  };

  return (
    <header className={`bb-header ${scrolled ? "bb-header--scrolled" : ""}`}>
      <nav className="bb-nav" aria-label="Primary">
        <div className="bb-brand">
          <a
            className="bb-brandLink"
            href="#home"
            onClick={(e) => (e.preventDefault(), scrollToId("home"))}
          >
            {t("hero_name")}
          </a>
        </div>

        <div className="bb-links" role="navigation" aria-label="Sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`bb-link ${activeSection === item.id ? "bb-link--active" : ""}`}
              onClick={() => scrollToId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="bb-right">
          <LanguageSwitcher
            lang={lang}
            setLanguage={setLanguage}
            t={t}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <button
            type="button"
            className="bb-burger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <aside
        className={`bb-drawer ${drawerOpen ? "bb-drawer--open" : ""}`}
        aria-hidden={!drawerOpen}
      >
        <div className="bb-drawerInner">
          <button
            className="bb-drawerClose"
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="bb-drawerLinks">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`bb-drawerLink ${activeSection === item.id ? "bb-drawerLink--active" : ""}`}
                onClick={() => scrollToId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <button
          className="bb-drawerBackdrop"
          type="button"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close"
        />
      </aside>
    </header>
  );
}
