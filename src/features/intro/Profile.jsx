import GlitchTitle from "../../components/GlitchTitle.jsx";

export default function Profile({ data }) {
  return (
    <div className="relative flex flex-col gap-4 border-l-2 border-textMain pl-6">
      <div className="absolute top-0 -left-[2px] h-[30%] w-[2px] bg-textMain" />

      <div className="font-mono text-[9px] uppercase tracking-widest text-textMuted">
        {data.logLabel}
      </div>

      <div className="flex flex-col gap-2">
        <GlitchTitle
          as="h3"
          text={data.id}
          lang="en"
          className="text-3xl"
          blueClassName="-top-0.5 -left-0.5"
          redClassName="top-0.5 left-0.5"
          blueOpacityClassName="opacity-[0.42]"
          redOpacityClassName="opacity-[0.42]"
        />
        <GlitchTitle
          as="p"
          text={data.title}
          lang="zh"
          className="text-xl"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-textMuted"
        />
      </div>

      <p className="text-[13px] font-light leading-loose text-textMuted">{data.bio}</p>

      <div className="font-mono text-[9px] tracking-wider text-textMuted select-none">
        STATUS: {data.status}
      </div>
    </div>
  );
}
