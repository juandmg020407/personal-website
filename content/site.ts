import type { LocalizedText } from "@/content/i18n";

export const site = {
  name: "David Morales",
  fullName: "Juan David Morales Galindo",
  handle: "juandmg020407",
  filename: "david_morales.ipynb",
  role: {
    en: "Data Science & AI student",
    es: "Estudiante de Ciencia de Datos e IA",
  } satisfies LocalizedText,
  motto: {
    en: "If you can imagine it, you can create it.",
    es: "Si puedes imaginarlo, puedes crearlo.",
  } satisfies LocalizedText,
  location: { en: "Spain", es: "España" } satisfies LocalizedText,
  email: "david@oryzz.com",
  github: "https://github.com/juandmg020407",
  linkedin: "https://www.linkedin.com/in/david-morales-galindo-35042b319/",
  repo: "https://github.com/juandmg020407/personal-website",
  description: {
    en: "Data Science & AI student in Spain. I turn messy data into working products — from autonomous customer agents and attendance forecasting to safe medical-imaging flows.",
    es: "Estudiante de Ciencia de Datos e IA en España. Convierto datos desordenados en productos reales: desde agentes autónomos y predicción de asistencia hasta flujos seguros de imagen médica.",
  } satisfies LocalizedText,
  status: {
    state: {
      en: "open to work opportunities",
      es: "abierto a oportunidades laborales",
    } satisfies LocalizedText,
    focus: {
      en: "AI agents · applied data products",
      es: "agentes de IA · productos de datos aplicados",
    } satisfies LocalizedText,
    goal: {
      en: "research collaborations · hard problems with good data",
      es: "colaboraciones de investigación · problemas difíciles con buenos datos",
    } satisfies LocalizedText,
  },
  stats: {
    projectsShipped: 8,
    hackathons: 6,
    podiums: 1,
  },
  lastUpdated: "2026-08-11",
} as const;
