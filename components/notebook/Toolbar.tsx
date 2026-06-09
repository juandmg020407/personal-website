import { site } from "@/content/site";
import { KernelStatus } from "./KernelStatus";

const nav = [
  { href: "#projects", label: "projects" },
  { href: "#log", label: "log" },
  { href: "#now", label: "now" },
  { href: "#contact", label: "contact" },
];

export function Toolbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="nb-wrap flex h-11 items-center gap-4 font-mono text-[12.5px]">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 text-ink">
          <span
            aria-hidden
            className="flex size-[17px] items-center justify-center bg-pen pb-px font-mono text-[11px] font-semibold leading-none text-paper"
          >
            d
          </span>
          <span className="font-medium">
            david_morales<span className="text-ink-soft">.ipynb</span>
          </span>
        </a>
        <KernelStatus />
        <nav aria-label="Sections" className="ml-auto hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-ink-soft transition-colors hover:text-pen">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 border-l border-rule pl-4 max-md:ml-auto">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-pen"
          >
            gh&nbsp;↗
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-pen"
          >
            in&nbsp;↗
          </a>
        </div>
      </div>
    </header>
  );
}
