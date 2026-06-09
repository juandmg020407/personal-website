const SHOWN = 6;
const MIN_SHARE = 0.015;
const OPACITY = [1, 0.82, 0.64, 0.5, 0.38, 0.28];

/** Language mix across shipped repos, drawn as inked bars. */
export function LangBars({ languages }: { languages: Record<string, number> }) {
  const total = Object.values(languages).reduce((s, b) => s + b, 0);
  const entries = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .filter(([, bytes]) => bytes / total >= MIN_SHARE)
    .slice(0, SHOWN);
  const max = entries[0]?.[1] ?? 1;

  return (
    <div className="flex flex-col gap-2.5">
      {entries.map(([name, bytes], i) => {
        const pct = (bytes / total) * 100;
        return (
          <div key={name} className="grid grid-cols-[92px_1fr_48px] items-center gap-3">
            <span className="truncate font-mono text-[12px] text-ink">{name.toLowerCase()}</span>
            <span className="h-[9px] bg-paper-deep">
              <span
                className="block h-full bg-pen"
                style={{ width: `${(bytes / max) * 100}%`, opacity: OPACITY[i] ?? 0.25 }}
              />
            </span>
            <span className="text-right font-mono text-[11px] text-ink-soft">
              {pct.toFixed(1)}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
