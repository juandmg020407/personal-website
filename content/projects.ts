import type { LocalizedText } from "@/content/i18n";

export type ProjectStatus = "live" | "wip" | "hackathon" | "private";
export type ProjectGlyphId =
  | "route"
  | "montecarlo"
  | "xray"
  | "idonia"
  | "ballot"
  | "agent"
  | "credit";

export type Project = {
  slug: string;
  name: LocalizedText;
  year: string;
  oneLiner: LocalizedText;
  description?: LocalizedText;
  stack: string[];
  /** Omit while the repository is private; add it the day it goes public. */
  repoUrl?: string;
  liveUrl?: string;
  award?: LocalizedText;
  status: ProjectStatus;
  statusNote?: LocalizedText;
  glyph: ProjectGlyphId;
};

export const featured: Project = {
  slug: "openroute",
  name: { en: "OpenRoute", es: "OpenRoute" },
  year: "2026",
  award: {
    en: "3rd place — Responsible & Open AI in Industry Challenge (SEDIA)",
    es: "3.er puesto — Reto de IA Responsable y Abierta en la Industria (SEDIA)",
  },
  oneLiner: {
    en: "Open-source AI route planning for small logistics teams.",
    es: "Planificación de rutas con IA abierta para pequeños equipos logísticos.",
  },
  description: {
    en: "Upload your delivery orders and OpenRoute handles the rest: geocoding, clustering and multi-vehicle route planning, with a local LLM that explains every decision in plain language. Built to cut kilometres, hours and cost for SMEs that cannot afford enterprise routing software.",
    es: "Sube los pedidos y OpenRoute se ocupa del resto: geocodificación, agrupación y planificación de rutas para varios vehículos, con un LLM local que explica cada decisión en lenguaje claro. Está pensado para reducir kilómetros, horas y costes en pymes que no pueden pagar software logístico empresarial.",
  },
  stack: ["Next.js", "TypeScript", "Ollama · llama3.2", "OR-Tools", "OSRM", "Python"],
  repoUrl: "https://github.com/ComunidadIA-OS/OpenRoute",
  status: "live",
  glyph: "route",
};

export const projects: Project[] = [
  {
    slug: "chispy",
    name: { en: "Chispy · Platanus Build Night", es: "Chispy · Platanus Build Night" },
    year: "2026",
    oneLiner: {
      en: "An autonomous customer-retention agent that finds revenue at risk, chooses who to contact and carries the conversation through WhatsApp.",
      es: "Un agente autónomo de retención que detecta ingresos en riesgo, decide a quién contactar y lleva la conversación por WhatsApp.",
    },
    stack: ["Next.js", "Claude", "Twilio", "RFM", "ElevenLabs"],
    repoUrl: "https://github.com/platanus-build-night/platanus-build-night-26-co-juandmg020407",
    liveUrl: "https://chispy.vercel.app",
    status: "live",
    statusNote: {
      en: "Platanus Build Night 26 · autonomous CRM agent",
      es: "Platanus Build Night 26 · agente CRM autónomo",
    },
    glyph: "agent",
  },
  {
    slug: "hackathon-freeticket",
    name: { en: "FreeTicket · Attendance Forecasting", es: "FreeTicket · Predicción de asistencia" },
    year: "2026",
    oneLiner: {
      en: "Forecasts how many ticket holders will actually attend each show, quantifies uncertainty and recommends actions for underfilled events.",
      es: "Predice cuántas personas asistirán realmente a cada show, cuantifica la incertidumbre y recomienda acciones para llenar los eventos flojos.",
    },
    stack: ["Python", "pandas", "scikit-learn", "Agent Skill"],
    repoUrl: "https://github.com/juandmg020407/Hackathon-Freeticket",
    liveUrl: "https://juandmg020407.github.io/Hackathon-Freeticket/",
    status: "live",
    statusNote: {
      en: "Hackathon FreeTicket · live dashboard and installable skill",
      es: "Hackathon FreeTicket · dashboard en vivo y skill instalable",
    },
    glyph: "montecarlo",
  },
  {
    slug: "colsubsidio-credit",
    name: {
      en: "Colsubsidio · Hyperpersonalised Credit",
      es: "Colsubsidio · Crédito hiperpersonalizado",
    },
    year: "2026",
    oneLiner: {
      en: "Turns behavioural and socioeconomic signals into an explainable recommendation: the right credit product, moment, channel and message.",
      es: "Convierte señales de comportamiento y contexto socioeconómico en una recomendación explicable: producto, momento, canal y mensaje.",
    },
    stack: ["Next.js", "TypeScript", "Explainable AI", "Synthetic data"],
    repoUrl: "https://github.com/juandmg020407/colsubsidio-credito-hiperpersonalizado",
    status: "hackathon",
    statusNote: { en: "Colsubsidio × 30X · challenge 02", es: "Colsubsidio × 30X · reto 02" },
    glyph: "credit",
  },
  {
    slug: "idonia-picos-de-europa",
    name: { en: "IDONIA · Picos de Europa", es: "IDONIA · Picos de Europa" },
    year: "2026",
    oneLiner: {
      en: "Moves medical images across regional borders, humanises the report with AI and delivers everything to patient and doctor through a secure QR and PIN.",
      es: "Mueve imágenes médicas entre comunidades, humaniza el informe con IA y entrega todo a paciente y médico mediante un QR y PIN seguros.",
    },
    stack: ["Next.js", "Idonia API", "Recog", "DICOM", "Privacy by design"],
    status: "private",
    statusNote: {
      en: "IA Biomed hackathon · private repository",
      es: "Hackathon IA Biomed · repositorio privado",
    },
    glyph: "idonia",
  },
  {
    slug: "xray-deidentification",
    name: { en: "X-ray De-identification", es: "Desidentificación de radiografías" },
    year: "2026",
    oneLiner: {
      en: "Detects and removes patient data burned into radiographs, then runs a second verification layer to catch residual leaks.",
      es: "Detecta y elimina datos de pacientes impresos en radiografías y ejecuta una segunda verificación para encontrar fugas residuales.",
    },
    stack: ["Python", "YOLO11", "EasyOCR", "OpenCV", "Gradio"],
    status: "private",
    statusNote: {
      en: "Treelogic · IA Biomed hackathon · private repository",
      es: "Treelogic · Hackathon IA Biomed · repositorio privado",
    },
    glyph: "xray",
  },
  {
    slug: "concurso-umh",
    name: { en: "UMH Gastronomy Contest", es: "Concurso Gastronómico UMH" },
    year: "2026",
    oneLiner: {
      en: "Real-time voting for a university gastronomy contest: country management, live ballots and a results dashboard.",
      es: "Votación en tiempo real para un concurso gastronómico universitario: países, papeletas en vivo y dashboard de resultados.",
    },
    stack: ["JavaScript", "Python", "Vercel"],
    repoUrl: "https://github.com/juandmg020407/Concurso-Gastronomico-UMH-2025-2",
    liveUrl: "https://concurso-gastronomico.vercel.app/",
    status: "live",
    glyph: "ballot",
  },
];
