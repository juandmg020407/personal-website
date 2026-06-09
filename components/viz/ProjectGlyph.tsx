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

      {id === "emdi" && (
        <>
          <path d="M17 17l13-4M16 20l7 13M26 34l7-17" {...stroke} strokeWidth="1.4" />
          <circle cx="14" cy="18" r="4.5" {...stroke} />
          <circle cx="33" cy="12" r="4.5" {...stroke} />
          <circle cx="25" cy="38" r="4.5" fill="var(--moss)" stroke="var(--ink)" strokeWidth="1.7" />
          <path d="M40 38c2.5-2.5 2.5-6.5 0-9-2.5 2.5-2.5 6.5 0 9z" {...stroke} stroke="var(--moss)" />
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
