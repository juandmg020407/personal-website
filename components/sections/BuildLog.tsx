import { Cell, Fn, Num, Punct } from "@/components/notebook/Cell";
import { log, type LogTag } from "@/content/log";
import { site } from "@/content/site";

const tagStyle: Record<LogTag, string> = {
  ship: "text-pen",
  award: "font-medium text-verm",
  wip: "text-moss",
  note: "text-ink-soft",
};

export function BuildLog() {
  return (
    <Cell
      n={4}
      id="log"
      command={
        <>
          <Fn>log.tail</Fn>
          <Punct>(</Punct>
          <Num>{log.length}</Num>
          <Punct>)</Punct>
        </>
      }
    >
      <ol className="space-y-3 font-mono text-[13.5px] leading-[1.7]">
        {log.map((entry) => {
          const body = (
            <>
              {entry.tag === "award" && "▲ "}
              {entry.text}
            </>
          );
          return (
            <li
              key={`${entry.date}-${entry.tag}`}
              className="sm:grid sm:grid-cols-[92px_64px_1fr] sm:gap-x-5"
            >
              <time dateTime={entry.date} className="mr-4 text-ink-soft sm:mr-0">
                {entry.date}
              </time>
              <span className={`mr-4 sm:mr-0 ${tagStyle[entry.tag]}`}>[{entry.tag}]</span>
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lnk-quiet block sm:inline"
                >
                  {body}
                </a>
              ) : (
                <span className="block sm:inline">{body}</span>
              )}
            </li>
          );
        })}
      </ol>

      <p className="mt-7 font-mono text-[12.5px] text-ink-soft">
        ─── stream continues on{" "}
        <a className="lnk" href={site.github} target="_blank" rel="noopener noreferrer">
          github ↗
        </a>
      </p>
    </Cell>
  );
}
