import type { ProjectGlyphId } from "@/content/projects";

const stroke = {
  fill: "none",
  stroke: "var(--ink)",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** One small ink drawing per project — no fake screenshots. */
export function ProjectGlyph({ id }: { id: ProjectGlyphId }) {
  if (id === "agent") {
    return (
      <span aria-hidden className="relative block size-11 shrink-0 border border-ink bg-paper-deep">
        <span className="absolute left-1.5 top-1 font-display text-[22px] leading-none text-pen">✦</span>
        <span className="absolute bottom-1 right-1.5 font-mono text-[13px] text-ink">→</span>
        <span className="absolute bottom-2 left-1.5 size-1.5 rounded-full bg-verm-bright" />
      </span>
    );
  }

  if (id === "credit") {
    return (
      <span aria-hidden className="relative block size-11 shrink-0">
        <span className="absolute inset-x-1 top-1 h-3 border border-ink bg-paper-deep" />
        <span className="absolute inset-x-1 top-[18px] h-3 border border-ink bg-paper-deep" />
        <span className="absolute inset-x-1 top-[32px] h-3 border border-pen bg-pen-wash" />
        <span className="absolute right-2 top-[34px] font-mono text-[9px] text-pen">01</span>
      </span>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden className="size-11 shrink-0">
      {id === "montecarlo" && (
        <>
          <path d="M9 6v34h33" {...stroke} />
          <path d="M11 36c8-2 14-9 18-15 3.4-5.1 6-9 10-11" {...stroke} stroke="var(--pen)" strokeDasharray="4 4" />
          {[
            [16, 31],
            [21, 24],
            [26, 28],
            [31, 16],
            [37, 19],
            [34, 25],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--ink)" />
          ))}
        </>
      )}

      {id === "xray" && (
        <>
          <rect x="10" y="5" width="28" height="38" rx="2" {...stroke} />
          <path d="M17 19h14M17 25h14M17 31h10" {...stroke} strokeWidth="1.4" />
          <rect x="15" y="10" width="13" height="4" fill="var(--ink)" />
          <rect x="24" y="36" width="9" height="3.5" fill="var(--ink)" />
          <path d="M33 8h6M36 5v6" stroke="var(--verm-bright)" strokeWidth="1.7" strokeLinecap="round" />
        </>
      )}

      {id === "idonia" && (
        <>
          {/* a medical image of the Picos de Europa, shared onwards */}
          <rect x="5" y="9" width="28" height="26" rx="2" {...stroke} />
          <path d="M8 31l6-8 4 5 5-7 6 10" {...stroke} />
          <circle cx="26.5" cy="15.5" r="2.4" fill="var(--verm-bright)" />
          <path d="M33 22h9" {...stroke} stroke="var(--pen)" />
          <path d="M39 19l3 3-3 3" {...stroke} stroke="var(--pen)" />
        </>
      )}

      {id === "ballot" && (
        <>
          <path d="M8 23h32v17H8z" {...stroke} />
          <path d="M17 23h14" stroke="var(--ink)" strokeWidth="3.4" />
          <path d="M20 8l10 3.4-3 9-10-3.4z" {...stroke} stroke="var(--pen)" />
          <path d="M14 31h6M14 35h10" {...stroke} strokeWidth="1.4" />
          <path d="M33 30l2.5 3 4.5-6" stroke="var(--moss)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {id === "route" && (
        <>
          <rect x="6" y="35" width="7" height="7" fill="var(--ink)" />
          <path d="M12 36c6-12 14-14 20-10s9-4 11-12" {...stroke} stroke="var(--pen)" strokeDasharray="4 4" />
          <circle cx="43" cy="13" r="3.2" fill="var(--verm-bright)" />
        </>
      )}
    </svg>
  );
}
