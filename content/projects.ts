export type ProjectStatus = "live" | "wip" | "hackathon" | "private";
export type ProjectGlyphId = "route" | "montecarlo" | "xray" | "idonia" | "ballot";

export type Project = {
  slug: string;
  name: string;
  year: string;
  oneLiner: string;
  description?: string;
  stack: string[];
  /** Omit while the repository is private; add it the day it goes public. */
  repoUrl?: string;
  liveUrl?: string;
  award?: string;
  status: ProjectStatus;
  statusNote?: string;
  glyph: ProjectGlyphId;
};

export const featured: Project = {
  slug: "openroute",
  name: "OpenRoute",
  year: "2026",
  award: "3rd place — Responsible & Open AI in Industry Challenge (SEDIA)",
  oneLiner: "Open-source AI route planning for small logistics teams.",
  description:
    "Upload your delivery orders and OpenRoute handles the rest: geocoding, clustering, multi-vehicle route planning — with a local LLM that explains every decision in plain language. Built to cut kilometres, hours and cost for SMEs that can't afford enterprise routing software.",
  stack: ["Next.js", "TypeScript", "Ollama · llama3.2", "OR-Tools", "OSRM", "Python"],
  repoUrl: "https://github.com/ComunidadIA-OS/OpenRoute",
  status: "live",
  glyph: "route",
};

export const projects: Project[] = [
  {
    slug: "hackathon-freeticket",
    name: "FreeTicket · Attendance Forecasting",
    year: "2026",
    oneLiner:
      "Forecasts how many ticket holders will actually attend each show, quantifies uncertainty and recommends actions for underfilled events.",
    stack: ["Python", "pandas", "scikit-learn", "Agent Skill"],
    repoUrl: "https://github.com/juandmg020407/Hackathon-Freeticket",
    liveUrl: "https://juandmg020407.github.io/Hackathon-Freeticket/",
    status: "live",
    statusNote: "Hackathon FreeTicket · live show dashboard and installable skill",
    glyph: "montecarlo",
  },
  {
    slug: "colsubsidio-credit",
    name: "Colsubsidio · Hyperpersonalised Credit",
    year: "2026",
    oneLiner:
      "Turns behavioural and socioeconomic signals into an explainable recommendation: the right credit product, moment, channel and message.",
    stack: ["Next.js", "TypeScript", "Explainable AI", "Synthetic data"],
    repoUrl: "https://github.com/juandmg020407/colsubsidio-credito-hiperpersonalizado",
    status: "hackathon",
    statusNote: "Colsubsidio × 30X · challenge 02",
    glyph: "xray",
  },
  {
    slug: "platanus-hack-26-arcade",
    name: "Platanus Hack 26 · Arcade",
    year: "2026",
    oneLiner:
      "A two-player brick-breaker duel built for a physical arcade cabinet, with dash mechanics, persistent high scores and a 50 KB limit.",
    stack: ["JavaScript", "Phaser 3", "Arcade controls", "Vite"],
    repoUrl: "https://github.com/juandmg020407/platanus-hack-26-colombia-arcade",
    status: "hackathon",
    statusNote: "Platanus Hack 26 · Bogotá arcade challenge",
    glyph: "route",
  },
  {
    slug: "concurso-umh",
    name: "Concurso Gastronómico UMH",
    year: "2026",
    oneLiner:
      "Real-time voting for a university gastronomy contest: country management, live ballots and a results dashboard.",
    stack: ["JavaScript", "Python", "Vercel"],
    repoUrl: "https://github.com/juandmg020407/Concurso-Gastronomico-UMH-2025-2",
    status: "live",
    glyph: "ballot",
  },
];
