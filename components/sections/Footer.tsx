import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="nb-wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-7 font-mono text-[12px] text-ink-soft">
        <p>
          © 2026 {site.name} — built in public
        </p>
        <p className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a className="lnk-quiet" href={site.repo} target="_blank" rel="noopener noreferrer">
            view source ↗
          </a>
          <span>set in fraunces · source serif · plex mono</span>
          <span>no cookies</span>
          <span aria-hidden className="text-ink-soft/60">
            %logstop
          </span>
        </p>
      </div>
    </footer>
  );
}
