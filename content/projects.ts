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
  team?: string;
  status: ProjectStatus;
  statusNote?: string;
  glyph: ProjectGlyphId;
};

export const featured: Project = {
  slug: "openroute",
  name: "OpenRoute",
  year: "2026",
  award: "3rd place — Responsible & Open AI in Industry Challenge (SEDIA)",
  team: "EvolveAI",
  oneLiner: "Open-source AI route planning for small logistics teams.",
  description:
    "Upload your delivery orders and OpenRoute handles the rest: geocoding, clustering, multi-vehicle route planning — with a local LLM that explains every decision in plain language. Built to cut kilometres, hours and cost for SMEs that can't afford enterprise routing software.",
  stack: ["Next.js", "TypeScript", "Ollama · llama3.1", "OSRM", "Leaflet", "Python"],
  repoUrl: "https://github.com/ComunidadIA-OS/OpenRoute",
  status: "live",
  glyph: "route",
};

export const projects: Project[] = [
  {
    slug: "montecast",
    name: "Montecast",
    year: "2026",
    oneLiner:
      "A World Cup 2026 forecast engine — Dixon-Coles × Elo fitted on 150 years of football, 50,000 Monte Carlo tournaments.",
    stack: ["Python", "NumPy", "Next.js", "TypeScript"],
    repoUrl: "https://github.com/juandmg020407/montecast",
    status: "wip",
    statusNote: "web deploy in progress",
    glyph: "montecarlo",
  },
  {
    slug: "xray-deid",
    name: "X-ray De-identification",
    year: "2026",
    oneLiner:
      "Finds and erases patient data burned into radiographs: YOLO detection, anonymisation, then automatic leak verification.",
    stack: ["Python", "YOLO", "OpenCV", "Gradio"],
    status: "hackathon",
    statusNote: "Treelogic challenge · IA Biomed hackathon — code coming soon",
    glyph: "xray",
  },
  {
    slug: "idonia-picos-de-europa",
    name: "Idonia · Picos de Europa",
    year: "2026",
    oneLiner:
      "Medical-imaging flows built on Idonia's image-exchange platform — getting studies safely from machine to clinician to patient.",
    stack: ["Python", "Idonia API", "Medical imaging"],
    status: "hackathon",
    statusNote: "Idonia challenge · IA Biomed hackathon — code coming soon",
    glyph: "idonia",
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
