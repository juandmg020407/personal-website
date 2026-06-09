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
    date: "2026-06-09",
    tag: "ship",
    text: "montecast web pushed — full Next.js front end for the forecast engine, bilingual EN/ES",
    href: "https://github.com/juandmg020407/montecast",
  },
  {
    date: "2026-06-07",
    tag: "wip",
    text: "x-ray de-identification: detection + anonymisation + leak checks working end to end; recording the demo video",
  },
  {
    date: "2026-06-02",
    tag: "wip",
    text: "IA Biomed hackathon: building Picos de Europa — medical-imaging flows over Idonia APIs",
  },
  {
    date: "2026-06-01",
    tag: "ship",
    text: "EMDI responsible-AI initiative submitted with team EvolveAI",
    href: "https://github.com/ComunidadIA-OS/evolveai-emdi",
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
