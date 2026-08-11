export type Locale = "en" | "es";
export type LocalizedText = Record<Locale, string>;

export const ui = {
  en: {
    hero: {
      meta: "est. dec 2025 on github",
      state: "state",
      focus: "focus",
      goal: "goal",
    },
    featured: {
      label: "featured",
      source: "view source on github ↗",
      caption:
        "fig. 1 — one depot, two vehicles, seven stops: the kind of plan OpenRoute computes, then explains in plain language.",
    },
    projects: {
      status: { live: "● live", wip: "wip", hackathon: "hackathon", private: "private" },
      openLive: "open live ↗",
      viewSource: "view source ↗",
      privateSource: "private repository",
    },
    log: {
      tags: { ship: "ship", award: "award", wip: "wip", note: "note" },
      continues: "─── stream continues on",
    },
    github: {
      contributions: "contributions · last 12 mo",
      projects: "projects shipped",
      hackathons: "hackathons",
      podiums: "podium finish",
      activity: "# commit activity — last 6 months",
      languages: "# language mix, by bytes shipped",
      live: "source: github live · checked",
      snapshot: "source: github snapshot · captured",
    },
    now: { lastUpdated: "last updated" },
    contact: {
      intro: "Building something interesting, looking for a hands-on data and AI builder, or just want to swap big ideas?",
      action: "Say hi",
      ending: "— I read everything.",
    },
    footer: {
      built: "built in public",
      source: "view source ↗",
      fonts: "set in fraunces · source serif · plex mono",
      cookies: "no cookies",
    },
    nav: { projects: "projects", log: "log", now: "now", contact: "contact", language: "Language" },
  },
  es: {
    hero: {
      meta: "desde dic. 2025 en github",
      state: "estado",
      focus: "enfoque",
      goal: "objetivo",
    },
    featured: {
      label: "destacado",
      source: "ver código en github ↗",
      caption:
        "fig. 1 — un depósito, dos vehículos y siete paradas: el tipo de plan que OpenRoute calcula y después explica en lenguaje claro.",
    },
    projects: {
      status: { live: "● en vivo", wip: "en curso", hackathon: "hackathon", private: "privado" },
      openLive: "abrir demo ↗",
      viewSource: "ver código ↗",
      privateSource: "repositorio privado",
    },
    log: {
      tags: { ship: "lanzado", award: "premio", wip: "en curso", note: "nota" },
      continues: "─── el registro continúa en",
    },
    github: {
      contributions: "contribuciones · últimos 12 meses",
      projects: "proyectos publicados",
      hackathons: "hackathones",
      podiums: "posición de podio",
      activity: "# actividad de commits — últimos 6 meses",
      languages: "# lenguajes, por bytes publicados",
      live: "fuente: github en vivo · consultado",
      snapshot: "fuente: captura de github · tomada",
    },
    now: { lastUpdated: "última actualización" },
    contact: {
      intro: "¿Estás construyendo algo interesante, buscas a alguien práctico en datos e IA o simplemente quieres intercambiar ideas?",
      action: "Escríbeme",
      ending: "— leo todos los mensajes.",
    },
    footer: {
      built: "construido en público",
      source: "ver código ↗",
      fonts: "tipografías fraunces · source serif · plex mono",
      cookies: "sin cookies",
    },
    nav: { projects: "proyectos", log: "registro", now: "ahora", contact: "contacto", language: "Idioma" },
  },
} as const;
