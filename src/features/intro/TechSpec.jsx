import GlitchTitle from "../../components/GlitchTitle.jsx";

export default function TechSpec({ data }) {
  return (
    <div className="relative border border-line bg-transparent p-6">
      <div className="absolute -top-[1px] -right-[1px] h-2 w-2 border-t border-r border-textMain" />
      <div className="absolute -bottom-[1px] -left-[1px] h-2.5 w-2.5 border-b border-l border-textMain" />

      <div className="mt-8 mb-4 flex flex-col gap-4">
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
          className="mb-4 text-2xl font-bold"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-black"
        />
      </div>

      <div className="mb-6 border-b border-line pb-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-textMuted select-none">
        {data.label}
      </div>

      <ul className="flex flex-col gap-5 text-[15px] leading-8 tracking-wide text-textMain">
        {data.items.map((skill) => (
          <li key={skill.category}>
            <span className="font-cn-bold font-bold text-black">{skill.category} :</span>{" "}
            <span className="font-mono text-sm font-semibold tracking-[0.14em] text-textMuted">
              {skill.items.join(" / ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
