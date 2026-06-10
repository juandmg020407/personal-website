"use client";

import { useEffect, useRef } from "react";

/**
 * A pool of diluted pen ink that trails the cursor across the paper.
 * Mouse only — touch devices never see it — and multiply-blended so
 * the ink underneath stays crisp. With reduced motion it snaps to the
 * pointer instead of trailing it.
 */
export function CursorWash() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    };

    const settle = () => {
      raf = 0;
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      paint();
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.4) {
        raf = requestAnimationFrame(settle);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      targetX = e.clientX;
      targetY = e.clientY;
      if (!el.dataset.on || reduced) {
        x = targetX;
        y = targetY;
        el.dataset.on = "true";
        paint();
        return;
      }
      if (!raf) raf = requestAnimationFrame(settle);
    };

    const onLeave = () => {
      delete el.dataset.on;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-wash" />;
}
