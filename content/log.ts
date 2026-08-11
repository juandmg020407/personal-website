import type { LocalizedText } from "@/content/i18n";

export type LogTag = "ship" | "award" | "wip" | "note";

export type LogEntry = {
  date: string;
  tag: LogTag;
  text: LocalizedText;
  href?: string;
};

/** The #BuildInPublic stream. Newest first; dates follow real repository activity. */
export const log: LogEntry[] = [
  {
    date: "2026-08-01",
    tag: "ship",
    text: {
      en: "FreeTicket attendance forecaster shipped as a live dashboard and an installable agent skill",
      es: "publicado el predictor de asistencia de FreeTicket como dashboard en vivo y skill instalable",
    },
    href: "https://github.com/juandmg020407/Hackathon-Freeticket",
  },
  {
    date: "2026-07-25",
    tag: "ship",
    text: {
      en: "Chispy shipped at Platanus Build Night — an agent that finds revenue at risk and acts through WhatsApp",
      es: "Chispy publicado en Platanus Build Night — un agente que detecta ingresos en riesgo y actúa por WhatsApp",
    },
    href: "https://github.com/platanus-build-night/platanus-build-night-26-co-juandmg020407",
  },
  {
    date: "2026-07-24",
    tag: "ship",
    text: {
      en: "Colsubsidio × 30X prototype shipped — explainable, hyperpersonalised credit recommendations",
      es: "prototipo Colsubsidio × 30X publicado — recomendaciones de crédito hiperpersonalizadas y explicables",
    },
    href: "https://github.com/juandmg020407/colsubsidio-credito-hiperpersonalizado",
  },
  {
    date: "2026-06-15",
    tag: "ship",
    text: {
      en: "x-ray de-identification pipeline completed with leak verification and privacy-safe audit logs",
      es: "pipeline de desidentificación de radiografías completado con verificación de fugas y auditoría segura",
    },
  },
  {
    date: "2026-06-14",
    tag: "ship",
    text: {
      en: "IDONIA end-to-end medical-image transfer and humanised-report flow completed against the real APIs",
      es: "flujo IDONIA de traslado de imagen médica e informe humanizado completado contra las APIs reales",
    },
  },
  {
    date: "2026-05-27",
    tag: "award",
    text: {
      en: "OpenRoute takes 3rd place at the Responsible & Open AI in Industry Challenge (SEDIA)",
      es: "OpenRoute consigue el 3.er puesto en el Reto de IA Responsable y Abierta en la Industria (SEDIA)",
    },
    href: "https://github.com/ComunidadIA-OS/OpenRoute",
  },
  {
    date: "2026-03-26",
    tag: "ship",
    text: {
      en: "real-time voting system shipped for UMH's gastronomy contest",
      es: "sistema de votación en tiempo real publicado para el concurso gastronómico de la UMH",
    },
    href: "https://github.com/juandmg020407/Concurso-Gastronomico-UMH-2025-2",
  },
  {
    date: "2025-12-09",
    tag: "note",
    text: {
      en: "hello, world — first public commit. building in public from day one",
      es: "hola, mundo — primer commit público. construyendo en público desde el primer día",
    },
  },
];
