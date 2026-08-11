import { Cell, Fn, Punct } from "@/components/notebook/Cell";
import { ProjectGlyph } from "@/components/viz/ProjectGlyph";
import { ui, type Locale } from "@/content/i18n";
import { projects, type Project } from "@/content/projects";

const statusStyle: Record<Project["status"], string> = {
  live: "border-moss/40 text-moss",
  wip: "border-pen/40 text-pen",
  hackathon: "border-verm/40 text-verm",
  private: "border-rule border-dashed text-ink-soft",
};

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const linked = Boolean(project.repoUrl || project.liveUrl);
  const copy = ui[locale].projects;
  const statusNote = project.statusNote?.[locale];

  return (
    <article
      className={`group flex h-full flex-col gap-5 border border-ink/60 bg-paper p-6 transition-[box-shadow,transform,border-color] duration-300 ${
        linked ? "hover:-translate-y-0.5 hover:border-ink hover:shadow-[7px_7px_0_var(--pen-wash)]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <ProjectGlyph id={project.glyph} />
        <span
          title={statusNote}
          className={`border px-2 py-0.5 font-mono text-[10.5px] tracking-[0.04em] ${statusStyle[project.status]}`}
        >
          {copy.status[project.status]}
        </span>
      </div>

      <div>
        <h3 className="font-display text-[24px] font-medium leading-tight transition-colors group-hover:text-pen">
          {project.name[locale]}
        </h3>
        <p className="mt-2 font-serif text-[15px] leading-relaxed text-ink/85">
          {project.oneLiner[locale]}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-baseline justify-between gap-3 font-mono text-[12px] text-ink-soft">
          <span>{project.year}</span>
          {linked ? (
            <span className="flex flex-wrap justify-end gap-x-3 gap-y-1">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lnk"
                >
                  {copy.openLive}
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lnk"
                >
                  {copy.viewSource}
                </a>
              ) : null}
            </span>
          ) : (
            <span title={statusNote}>{copy.privateSource}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects({ locale }: { locale: Locale }) {
  return (
    <Cell
      n={3}
      command={
        <>
          <Fn>projects.list</Fn>
          <Punct>()</Punct>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} locale={locale} />
        ))}
      </div>
    </Cell>
  );
}
