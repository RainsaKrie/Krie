import GlitchTitle from "../../components/GlitchTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";

function ArchiveRow({ project }) {
  return (
    <a
      href={project.link}
      className="archive-row group grid cursor-crosshair grid-cols-1 gap-3 border-b border-line bg-transparent px-4 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-textMuted md:grid-cols-[72px_minmax(0,1.8fr)_minmax(0,1.6fr)_minmax(0,1.3fr)_120px]"
    >
      <span className="archive-row-glitch text-textMuted">{project.id}</span>
      <span className="archive-row-glitch text-textMain">{project.title}</span>
      <span className="archive-row-glitch text-textMuted">{project.tags.join(" / ")}</span>
      <span className="archive-row-glitch text-textMuted">
        {project.status} / {project.version}
      </span>
      <span className="archive-row-glitch text-right text-textMain">View_Spec</span>
    </a>
  );
}

export default function MatrixList({ data, projects }) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <div className="relative z-10 flex h-full min-h-0 flex-col">
      <div className="mb-10 flex flex-col gap-3">
        <GlitchTitle
          as="h3"
          text={data.title}
          lang="en"
          className="text-[2rem]"
          blueClassName="-top-0.5 -left-0.5"
          redClassName="top-0.5 left-0.5"
          blueOpacityClassName="opacity-[0.42]"
          redOpacityClassName="opacity-[0.42]"
        />
        <GlitchTitle
          as="p"
          text={data.subtitle}
          lang="zh"
          className="text-2xl font-bold"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-black"
        />
      </div>

      <div className="mb-4 border-b border-line pb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-textMuted select-none">
        {data.featuredLabel}
      </div>

      <div className="grid grid-cols-1 gap-8 bg-transparent pb-32 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className={index % 2 === 1 ? "lg:translate-y-20" : ""}>
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              status={project.status}
              version={project.version}
              tags={project.tags}
              link={project.link}
              description={project.description}
            />
          </div>
        ))}
      </div>

      <div className="mt-14 mb-4 border-b border-line pb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-textMuted select-none">
        {data.archiveLabel}
      </div>

      <div className="border-t border-line">
        {archiveProjects.map((project) => (
          <ArchiveRow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
