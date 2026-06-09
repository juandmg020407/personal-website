"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement: cells render fully visible on the server. On
 * mount, cells still below the fold get "armed" (hidden, empty counter) and
 * an IntersectionObserver runs each one the first time it scrolls into view.
 */
export function CellRunner() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const cells = Array.from(document.querySelectorAll<HTMLElement>("[data-cell]"));
    const fold = window.innerHeight * 0.85;
    const pending = cells.filter((cell) => cell.getBoundingClientRect().top > fold);
    if (pending.length === 0) return;

    for (const cell of pending) cell.setAttribute("data-armed", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const cell = entry.target as HTMLElement;
          io.unobserve(cell);
          cell.removeAttribute("data-armed");
          cell.setAttribute("data-ran", "");
          window.dispatchEvent(new Event("nb:run"));
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    for (const cell of pending) io.observe(cell);
    return () => io.disconnect();
  }, []);

  return null;
}
