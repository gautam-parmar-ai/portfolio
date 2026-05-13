import React, { useEffect, useMemo, useState } from "react";

import "./heroTyping.css";

export default function HeroTyping({
  t,
  typingKeys = ["hero_typing_1", "hero_typing_2", "hero_typing_3"],
  className = "bb-heroRole",
  // timing (ms)
  typeSpeed = 55,
  backspaceSpeed = 30,
  startDelay = 250,
  pauseAfterTyped = 1100,
}) {
  const items = useMemo(
    () => typingKeys.map((k) => t(k)).filter(Boolean),
    [t, typingKeys],
  );

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    if (!items.length) return;

    if (reducedMotion) {
      // Show full first item without animation.
      setIndex(0);
      setText(items[0]);
      setPhase("done");
      return;
    }

    const current = items[index] ?? "";

    const timer = (() => {
      if (phase === "typing") {
        if (text.length < current.length) {
          return window.setTimeout(() => {
            setText(current.slice(0, text.length + 1));
          }, typeSpeed);
        }
        return window.setTimeout(() => {
          setPhase("pausing");
        }, pauseAfterTyped);
      }

      if (phase === "pausing") {
        return window.setTimeout(() => {
          setPhase("deleting");
        }, 300);
      }

      // deleting
      if (text.length > 0) {
        return window.setTimeout(() => {
          setText(current.slice(0, Math.max(0, text.length - 1)));
        }, backspaceSpeed);
      }

      return window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setPhase("typing");
      }, startDelay);
    })();

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [
    items,
    reducedMotion,
    index,
    phase,
    text,
    typeSpeed,
    backspaceSpeed,
    startDelay,
    pauseAfterTyped,
  ]);

  return (
    <span className={className} aria-label={text}>
      <span className="bb-heroTypingText">{text}</span>
      <span className="bb-heroTypingCursor" aria-hidden="true" />
    </span>
  );
}
