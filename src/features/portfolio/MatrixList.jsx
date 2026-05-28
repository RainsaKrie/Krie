import GlitchTitle from "../../components/GlitchTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function MatrixList({ data, projects }) {
  return (
    <section className="relative z-10 flex flex-col gap-8 lg:col-span-7">
      <div className="mb-2 flex flex-col gap-2">
        <GlitchTitle
          as="h3"
          text={data.title}
          lang="en"
          className="text-3xl"
          blueClassName="-top-0.5 -left-0.5"
          redClassName="top-0.5 left-0.5"
          blueOpacityClassName="opacity-[0.42]"
          redOpacityClassName="opacity-[0.42]"
        />
        <GlitchTitle
          as="p"
          text={data.subtitle}
          lang="zh"
          className="text-xl"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-textMuted"
        />
      </div>

      <div className="mb-2 border-b border-line pb-2 font-mono text-[10px] uppercase tracking-widest text-textMuted select-none">
        {data.label}
      </div>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          tag={project.tag}
          description={project.description}
        />
      ))}
    </section>
  );
}
