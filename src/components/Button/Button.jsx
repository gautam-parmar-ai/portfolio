import React from "react";
import "./button.css";

export default function Button({
  variant = "primary",
  as = "button",
  href,
  onClick,
  children,
  download,
  type = "button",
  ariaLabel,
}) {
  const className = `bb-btn bb-btn--${variant}`;

  if (as === "a") {
    return (
      <a
        className={className}
        href={href}
        download={download}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
