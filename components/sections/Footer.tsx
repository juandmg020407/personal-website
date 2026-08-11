import { ui, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

export function Footer({ locale }: { locale: Locale }) {
  const copy = ui[locale].footer;

  return (
    <footer className="border-t border-rule">
      <div className="nb-wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-7 font-mono text-[12px] text-ink-soft">
        <p>
          © 2026 {site.name} — {copy.built}
        </p>
        <p className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a className="lnk-quiet" href={site.repo} target="_blank" rel="noopener noreferrer">
            {copy.source}
          </a>
          <span>{copy.fonts}</span>
          <span>{copy.cookies}</span>
          <span aria-hidden className="text-ink-soft/60">
            %logstop
          </span>
        </p>
      </div>
    </footer>
  );
}
