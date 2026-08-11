import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "David Morales — Ciencia de Datos e IA, construyendo en público",
  description: site.description.es,
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es" },
  },
  openGraph: {
    url: "/es",
    title: "David Morales — Ciencia de Datos e IA, construyendo en público",
    description: site.description.es,
    locale: "es_ES",
  },
  twitter: {
    title: "David Morales — Ciencia de Datos e IA, construyendo en público",
    description: site.description.es,
  },
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
