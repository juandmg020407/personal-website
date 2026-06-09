import type { ContributionDay } from "@/lib/github";

const WEEKS_SHOWN = 27;

function bucket(count: number): string {
  if (count === 0) return "var(--paper-deep)";
  if (count === 1) return "#ccd7f3";
  if (count <= 3) return "#92a8e6";
  if (count <= 6) return "#4f6cd2";
  return "#1e3aa4";
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/**
 * The GitHub contribution calendar, re-typeset in this notebook's ink.
 * Weeks are chunked from the most recent day backwards, which preserves
 * GitHub's Sunday-aligned columns.
 */
export function ContributionHeatmap({ days }: { days: ContributionDay[] }) {
  const weeks: ContributionDay[][] = [];
  let p = days.length;
  while (p > 0 && weeks.length < WEEKS_SHOWN) {
    const start = Math.max(0, p - 7);
    weeks.unshift(days.slice(start, p));
    p = start;
  }

  const monthLabels = weeks.map((week, i) => {
    const month = new Date(`${week[0].date}T00:00:00`).getMonth();
    const prev = i > 0 ? new Date(`${weeks[i - 1][0].date}T00:00:00`).getMonth() : null;
    return month !== prev ? MONTHS[month] : null;
  });

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex flex-col gap-1.5 pr-8">
        <div className="flex gap-[3px] pl-[26px] font-mono text-[10px] leading-none text-ink-soft">
          {monthLabels.map((label, i) => (
            <span key={i} className="w-[11px] overflow-visible whitespace-nowrap">
              {label ?? ""}
            </span>
          ))}
        </div>

        <div className="flex gap-[3px]">
          <div
            className="grid w-[23px] grid-rows-7 gap-[3px] pr-1 text-right font-mono text-[9px] leading-[11px] text-ink-soft"
            aria-hidden
          >
            <span />
            <span>mon</span>
            <span />
            <span>wed</span>
            <span />
            <span>fri</span>
            <span />
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, di) => {
                const day = week[di];
                if (!day) return <span key={di} className="size-[11px]" />;
                return (
                  <span
                    key={di}
                    title={`${day.count} × ${day.date}`}
                    className="size-[11px]"
                    style={{
                      backgroundColor: bucket(day.count),
                      boxShadow: day.count === 0 ? "inset 0 0 0 1px var(--rule-faint)" : undefined,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-[3px] pt-1 font-mono text-[10px] text-ink-soft">
          less
          {[0, 1, 2, 4, 7].map((c) => (
            <span
              key={c}
              className="size-[10px]"
              style={{
                backgroundColor: bucket(c),
                boxShadow: c === 0 ? "inset 0 0 0 1px var(--rule-faint)" : undefined,
              }}
            />
          ))}
          more
        </div>
      </div>
    </div>
  );
}
