import { Cell, Fn, Punct, Str } from "@/components/notebook/Cell";
import { ContributionHeatmap } from "@/components/viz/ContributionHeatmap";
import { LangBars } from "@/components/viz/LangBars";
import { ui, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { getGithubData } from "@/lib/github";

export async function GithubStats({ locale }: { locale: Locale }) {
  const data = await getGithubData();
  const copy = ui[locale].github;

  const counters = [
    { value: data.totalContributions, label: copy.contributions },
    { value: site.stats.projectsShipped, label: copy.projects },
    { value: site.stats.hackathons, label: copy.hackathons },
    { value: site.stats.podiums, label: copy.podiums },
  ];

  return (
    <Cell
      n={5}
      command={
        <>
          <Fn>github.stats</Fn>
          <Punct>(</Punct>
          <Str>{site.handle}</Str>
          <Punct>)</Punct>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {counters.map((c) => (
          <div key={c.label}>
            <div className="font-display text-[clamp(40px,4.5vw,54px)] font-medium leading-none">
              {c.value}
            </div>
            <div className="mt-2.5 font-mono text-[11px] tracking-[0.03em] text-ink-soft">
              {c.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[auto_minmax(260px,1fr)] lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-[12px] text-ink-soft">
            {copy.activity}
          </p>
          <ContributionHeatmap days={data.days} />
        </div>
        <div>
          <p className="mb-4 font-mono text-[12px] text-ink-soft">{copy.languages}</p>
          <LangBars languages={data.languages} />
        </div>
      </div>

      <p className="mt-10 font-mono text-[11px] text-ink-soft">
        {data.source === "live"
          ? `${copy.live} ${data.fetchedAt}`
          : `${copy.snapshot} ${data.fetchedAt}`}
      </p>
    </Cell>
  );
}
