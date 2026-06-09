"use client";

import { useEffect, useState } from "react";

/** Flicks to "busy" whenever a cell runs (cells dispatch `nb:run` on window). */
export function KernelStatus() {
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let timer: number;
    const onRun = () => {
      setBusy(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setBusy(false), 800);
    };
    window.addEventListener("nb:run", onRun);
    return () => {
      window.removeEventListener("nb:run", onRun);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <span className="hidden items-center gap-2 text-ink-soft sm:flex" aria-hidden>
      kernel: {busy ? "busy" : "idle"}
      <span
        className={`kernel-dot inline-block size-[7px] rounded-full ${
          busy ? "busy bg-verm-bright" : "bg-moss"
        }`}
      />
    </span>
  );
}
