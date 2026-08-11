"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ui, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { KernelStatus } from "./KernelStatus";

export function Toolbar() {
  const pathname = usePathname();
  const locale: Locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const copy = ui[locale];
  const nav = [
    { href: "#projects", label: copy.nav.projects },
    { href: "#log", label: copy.nav.log },
    { href: "#now", label: copy.nav.now },
    { href: "#contact", label: copy.nav.contact },
  ];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="nb-wrap flex h-11 items-center gap-3 font-mono text-[12.5px] sm:gap-4">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 text-ink">
          <span
            aria-hidden
            className="flex size-[17px] items-center justify-center bg-pen pb-px font-mono text-[11px] font-semibold leading-none text-paper"
          >
            d
          </span>
          <span className="font-medium max-sm:hidden">
            david_morales<span className="text-ink-soft">.ipynb</span>
          </span>
        </a>
        <KernelStatus />
        <nav aria-label={locale === "es" ? "Secciones" : "Sections"} className="ml-auto hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-ink-soft transition-colors hover:text-pen">
              {item.label}
            </a>
          ))}
        </nav>

        <nav
          aria-label={copy.nav.language}
          className="ml-auto flex items-center border border-ink/60 text-[10.5px] leading-none md:ml-0"
        >
          <Link
            href="/"
            hrefLang="en"
            aria-current={locale === "en" ? "page" : undefined}
            className={`px-2 py-1.5 transition-colors ${locale === "en" ? "bg-ink text-paper" : "text-ink-soft hover:text-pen"}`}
          >
            EN
          </Link>
          <span aria-hidden className="text-rule">/</span>
          <Link
            href="/es"
            hrefLang="es"
            aria-current={locale === "es" ? "page" : undefined}
            className={`px-2 py-1.5 transition-colors ${locale === "es" ? "bg-ink text-paper" : "text-ink-soft hover:text-pen"}`}
          >
            ES
          </Link>
        </nav>

        <div className="flex items-center gap-3 border-l border-rule pl-3 sm:gap-4 sm:pl-4">
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
