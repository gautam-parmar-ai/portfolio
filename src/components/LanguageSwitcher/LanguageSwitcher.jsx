import React from "react";
import "./languageSwitcher.css";

export default function LanguageSwitcher({
  lang,
  setLanguage,
  t,
  theme,
  toggleTheme,
}) {
  return (
    <div
      className="langWrap"
      role="group"
      aria-label={t?.("language") ?? "Language"}
    >
      <button
        type="button"
        className={`langPill ${lang === "en" ? "langPill--active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        className={`langPill ${lang === "it" ? "langPill--active" : ""}`}
        onClick={() => setLanguage("it")}
        aria-label="Italiano"
      >
        IT
      </button>

      <button
        type="button"
        className={`themeBtn ${theme === "dark" ? "themeBtn--active" : ""}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
