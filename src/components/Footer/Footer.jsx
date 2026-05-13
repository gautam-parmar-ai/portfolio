import React from "react";
import "./footer.css";

export default function Footer({ t, name, onNav }) {
  const year = new Date().getFullYear();

  const copyright = t("footer_copyright")
    .replace("{year}", String(year))
    .replace("Your Name", name || "Your Name");

  return (
    <footer className="bb-footer">
      <div className="bb-footerInner">
        <div className="bb-footerLinks">
          <button
            type="button"
            className="bb-footerLink"
            onClick={() => onNav?.("home")}
          >
            {t("nav_home")}
          </button>
          <button
            type="button"
            className="bb-footerLink"
            onClick={() => onNav?.("projects")}
          >
            {t("nav_projects")}
          </button>
          <button
            type="button"
            className="bb-footerLink"
            onClick={() => onNav?.("contact")}
          >
            {t("nav_contact")}
          </button>
        </div>
        <div className="bb-footerCopy">{copyright}</div>
      </div>
    </footer>
  );
}
