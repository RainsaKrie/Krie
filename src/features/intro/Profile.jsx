import GlitchTitle from "../../components/GlitchTitle.jsx";

export default function Profile({ data }) {
  return (
    <div className="relative flex flex-col gap-4 border-l-2 border-textMain pl-6">
      <div className="absolute top-0 -left-[2px] h-[30%] w-[2px] bg-textMain" />

      <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-textMuted">
        {data.logLabel}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <GlitchTitle
          as="h3"
          text={data.id}
          lang="en"
          className="text-[2rem]"
          blueClassName="-top-0.5 -left-0.5"
          redClassName="top-0.5 left-0.5"
          blueOpacityClassName="opacity-[0.42]"
          redOpacityClassName="opacity-[0.42]"
        />
        <GlitchTitle
          as="p"
          text={data.title}
          lang="zh"
          className="mb-4 text-2xl font-bold"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-black"
        />
      </div>

      <p className="text-base leading-8 tracking-wide text-textMain">{data.bio}</p>

      <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-textMuted select-none">
        STATUS: {data.status}
      </div>
    </div>
  );
}
