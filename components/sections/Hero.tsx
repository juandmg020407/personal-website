import { Cell } from "@/components/notebook/Cell";
import { TypeLine } from "@/components/notebook/TypeLine";
import { ui, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

const chips = [
  { href: site.github, label: "github ↗", external: true },
  { href: site.linkedin, label: "linkedin ↗", external: true },
  { href: `mailto:${site.email}`, label: site.email, external: false },
];

export function Hero({ locale }: { locale: Locale }) {
  const copy = ui[locale];

  return (
    <div className="graphpaper">
      <div className="nb-wrap pb-20 pt-14 md:pb-28 md:pt-24">
        <Cell n={1} command={<TypeLine text="whoami" />}>
          <div className="hero-out">
            <p className="font-mono text-[12.5px] tracking-[0.04em] text-ink-soft">
              {site.fullName.toLowerCase()} · {site.location[locale].toLowerCase()} · {copy.hero.meta}
            </p>

            <h1 className="mt-4 font-display text-[clamp(54px,9.5vw,116px)] font-medium leading-[0.95] tracking-[-0.02em]">
              David
              <span className="block italic">Morales</span>
            </h1>

            <p className="mt-7 max-w-[46ch] font-serif text-[clamp(18px,2vw,22px)] leading-[1.55]">
              {site.description[locale]}
            </p>

            <p className="mt-6 font-display text-[clamp(19px,2.4vw,25px)] font-medium italic leading-snug text-pen">
              {site.motto[locale]}
            </p>

            <dl className="mt-8 grid grid-cols-[58px_1fr] gap-x-5 gap-y-0.5 font-mono text-[13.5px] leading-7">
              <dt className="text-ink-soft">{copy.hero.state}</dt>
              <dd className="text-moss">{site.status.state[locale]}</dd>
              <dt className="text-ink-soft">{copy.hero.focus}</dt>
              <dd>{site.status.focus[locale]}</dd>
              <dt className="text-ink-soft">{copy.hero.goal}</dt>
              <dd>{site.status.goal[locale]}</dd>
            </dl>

            <div className="mt-9 flex flex-wrap gap-3 font-mono text-[13px]">
              {chips.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  {...(chip.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="border border-ink px-4 py-2 text-ink transition-colors hover:border-pen hover:bg-pen hover:text-paper"
                >
                  {chip.label}
                </a>
              ))}
            </div>
          </div>
        </Cell>
      </div>
    </div>
  );
}
