"use client";

import { useEffect, useState } from "react";

/**
 * Types out the hero command. Server-renders the full text (SEO, no-JS),
 * then replays the typing on mount unless the user prefers reduced motion.
 * Each keystroke pings the kernel indicator.
 */
export function TypeLine({
  text,
  speed = 85,
  startDelay = 380,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let i = 0;
    let timer: number;
    setShown("");

    const tick = () => {
      i += 1;
      setShown(text.slice(0, i));
      window.dispatchEvent(new Event("nb:run"));
      if (i < text.length) timer = window.setTimeout(tick, speed);
    };

    timer = window.setTimeout(tick, startDelay);
    return () => window.clearTimeout(timer);
  }, [text, speed, startDelay]);

  return (
    <span>
      {shown}
      <span className="nb-caret" aria-hidden />
    </span>
  );
}
