import snapshotJson from "@/content/github-snapshot.json";
import { site } from "@/content/site";

export type ContributionDay = { date: string; count: number };

export type GithubData = {
  totalContributions: number;
  days: ContributionDay[];
  languages: Record<string, number>;
  source: "live" | "snapshot";
  fetchedAt: string;
};

type Snapshot = Omit<GithubData, "source">;

const snapshot = snapshotJson as Snapshot;

const REVALIDATE = 60 * 60 * 24; // refresh once a day

async function fromGraphql(token: string) {
  const query = `query { user(login: "${site.handle}") { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal?.weeks) return null;
  const days: ContributionDay[] = cal.weeks.flatMap(
    (w: { contributionDays: { date: string; contributionCount: number }[] }) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount })),
  );
  return { totalContributions: cal.totalContributions as number, days };
}

/**
 * Tokenless fallback: GitHub serves the public contribution calendar as an
 * HTML fragment. Day cells carry data-date/data-level and tooltips carry the
 * exact counts; levels approximate counts if the tooltip markup ever changes.
 */
async function fromPublicCalendar() {
  const res = await fetch(`https://github.com/users/${site.handle}/contributions`, {
    headers: { "x-requested-with": "XMLHttpRequest", accept: "text/html" },
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) return null;
  const html = await res.text();

  const byId = new Map<string, { date: string; count: number }>();
  for (const tag of html.match(/<td[^>]*data-date="[^"]+"[^>]*>/g) ?? []) {
    const date = tag.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    if (!date) continue;
    const id = tag.match(/id="([^"]+)"/)?.[1] ?? date;
    const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0);
    byId.set(id, { date, count: level });
  }
  const tipRe = /<tool-tip[^>]*for="([^"]+)"[^>]*>\s*(\d+|No)\b/g;
  for (let m = tipRe.exec(html); m; m = tipRe.exec(html)) {
    const cell = byId.get(m[1]);
    if (cell) cell.count = m[2] === "No" ? 0 : Number(m[2]);
  }

  const days = [...byId.values()].sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 300) return null;
  return { totalContributions: days.reduce((s, d) => s + d.count, 0), days };
}

export async function getGithubData(): Promise<GithubData> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const live = (token && (await fromGraphql(token))) || (await fromPublicCalendar());
    if (live && live.days.length >= 300) {
      return {
        ...live,
        languages: snapshot.languages,
        source: "live",
        fetchedAt: new Date().toISOString().slice(0, 10),
      };
    }
  } catch {
    // network or markup hiccup — the committed snapshot keeps the build green
  }
  return { ...snapshot, source: "snapshot" };
}
