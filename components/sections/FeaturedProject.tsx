import { Cell, Comment, Fn, Punct, Str } from "@/components/notebook/Cell";
import { RouteMap } from "@/components/viz/RouteMap";
import { featured } from "@/content/projects";

export function FeaturedProject() {
  const p = featured;
  return (
    <Cell
      n={2}
      id="projects"
      command={
        <>
          <Fn>nb.load</Fn>
          <Punct>(</Punct>
          <Str>{p.slug}</Str>
          <Punct>)</Punct>
          <Comment>featured</Comment>
        </>
      }
    >
      <div className="print-card transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_var(--pen-wash)]">
        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-10">
            <p className="font-mono text-[12px] font-medium leading-5 text-verm">
              ▲ {p.award}
            </p>

            <h2 className="mt-4 font-display text-[clamp(34px,4.5vw,46px)] font-medium leading-none">
              {p.name}
            </h2>
            <p className="mt-2 font-mono text-[12.5px] text-ink-soft">
              {p.year}
            </p>

            <p className="mt-5 max-w-[52ch] font-serif text-[16.5px] leading-relaxed">
              {p.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-7 font-mono text-[13.5px]">
              <a className="lnk" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                view source on github ↗
              </a>
            </p>
          </div>

          <figure className="flex flex-col border-t-[1.5px] border-ink p-4 md:border-l-[1.5px] md:border-t-0">
            <RouteMap />
            <figcaption className="mt-auto px-2 pb-1 font-serif text-[12.5px] italic leading-snug text-ink-soft">
              fig. 1 — one depot, two vehicles, seven stops: the kind of plan
              OpenRoute computes, then explains in plain language.
            </figcaption>
          </figure>
        </div>
      </div>
    </Cell>
  );
}
