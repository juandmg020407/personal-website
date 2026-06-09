import { CellRunner } from "@/components/notebook/CellRunner";
import { BuildLog } from "@/components/sections/BuildLog";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Footer } from "@/components/sections/Footer";
import { GithubStats } from "@/components/sections/GithubStats";
import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <div className="nb-wrap flex flex-col gap-24 pb-28 md:gap-32">
          <FeaturedProject />
          <Projects />
          <BuildLog />
          <GithubStats />
          <Now />
          <Contact />
        </div>
      </main>
      <Footer />
      <CellRunner />
    </>
  );
}
