import { CellRunner } from "@/components/notebook/CellRunner";
import { BuildLog } from "@/components/sections/BuildLog";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Footer } from "@/components/sections/Footer";
import { GithubStats } from "@/components/sections/GithubStats";
import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import type { Locale } from "@/content/i18n";

export function Portfolio({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="top">
        <Hero locale={locale} />
        <div className="nb-wrap flex flex-col gap-24 pb-28 md:gap-32">
          <FeaturedProject locale={locale} />
          <Projects locale={locale} />
          <BuildLog locale={locale} />
          <GithubStats locale={locale} />
          <Now locale={locale} />
          <Contact locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
      <CellRunner />
    </>
  );
}
