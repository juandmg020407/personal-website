export type LogTag = "ship" | "award" | "wip" | "note";

export type LogEntry = {
  date: string;
  tag: LogTag;
  text: string;
  href?: string;
};

/**
 * The #BuildInPublic stream. Newest first — add a line every time you ship.
 * Dates are anchored on real repo pushes where possible.
 */
export const log: LogEntry[] = [
  {
    date: "2026-08-04",
    tag: "ship",
    text: "Platanus Hack 26 arcade build shipped — a two-player brick-breaker made for the Bogotá cabinet",
    href: "https://github.com/juandmg020407/platanus-hack-26-colombia-arcade",
  },
  {
    date: "2026-08-01",
    tag: "ship",
    text: "FreeTicket attendance forecaster shipped as a live dashboard and an installable agent skill",
    href: "https://github.com/juandmg020407/Hackathon-Freeticket",
  },
  {
    date: "2026-07-24",
    tag: "ship",
    text: "Colsubsidio × 30X prototype shipped — explainable, hyperpersonalised credit recommendations",
    href: "https://github.com/juandmg020407/colsubsidio-credito-hiperpersonalizado",
  },
  {
    date: "2026-06-07",
    tag: "wip",
    text: "x-ray de-identification: detection, anonymisation and leak checks working end to end",
  },
  {
    date: "2026-05-27",
    tag: "award",
    text: "OpenRoute takes 3rd place at the Responsible & Open AI in Industry Challenge (SEDIA)",
    href: "https://github.com/ComunidadIA-OS/OpenRoute",
  },
  {
    date: "2026-03-26",
    tag: "ship",
    text: "real-time voting system shipped for UMH's gastronomy contest",
    href: "https://github.com/juandmg020407/Concurso-Gastronomico-UMH-2025-2",
  },
  {
    date: "2025-12-09",
    tag: "note",
    text: "hello, world — first public commit. building in public from day one",
  },
];
