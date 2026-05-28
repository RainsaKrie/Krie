import GlitchTitle from "../../components/GlitchTitle.jsx";

export default function ProjectCard({ title, subtitle, tag, description }) {
  return (
    <div className="group relative px-3 py-3">
      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="absolute left-0 top-0 h-px bg-textMain"
          style={{ width: "clamp(92px, 24%, 172px)" }}
        />
        <div
          className="absolute left-0 top-0 w-px bg-textMain"
          style={{ height: "clamp(56px, 24%, 108px)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-px bg-textMain"
          style={{ width: "clamp(86px, 22%, 164px)" }}
        />

        <div
          className="absolute left-[6px] top-[-4px] h-px origin-left scale-x-0 bg-accentBlue/0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-accentBlue/60 group-hover:opacity-100 group-hover:-translate-x-[1px]"
          style={{ width: "clamp(44px, 11%, 80px)" }}
        />
        <div
          className="absolute bottom-[-4px] right-[-4px] h-px origin-right scale-x-0 bg-accentRed/0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-accentRed/90 group-hover:opacity-100"
          style={{ width: "clamp(58px, 15%, 104px)" }}
        />
        <div
          className="absolute bottom-[-4px] right-[-4px] w-px origin-bottom scale-y-0 bg-accentRed/0 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:bg-accentRed/90 group-hover:opacity-100"
          style={{ height: "clamp(42px, 16%, 88px)" }}
        />
        <div
          className="absolute top-[10px] right-[16px] h-px origin-right scale-x-0 bg-accentBlue/0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-accentBlue/36 group-hover:opacity-100 group-hover:translate-x-[1px]"
          style={{ width: "clamp(24px, 7%, 52px)" }}
        />
      </div>

      <article className="relative z-10 flex min-h-[260px] cursor-crosshair flex-col gap-6 bg-base px-6 py-6 md:px-8 md:py-8">
        <div className="mb-10 flex items-start justify-between md:mb-12">
          <div className="flex flex-col gap-2">
            <GlitchTitle
              as="h2"
              text={title}
              lang="en"
              className="text-2xl"
              blueClassName="-top-0.5 -left-0.5"
              redClassName="top-0.5 left-0.5"
              blueOpacityClassName="opacity-[0.42]"
              redOpacityClassName="opacity-[0.42]"
              mainClassName="inline-flex"
            />
            <p className="font-cn-title text-base text-textMuted">{subtitle}</p>
          </div>
          <div className="group/tag relative">
            <span className="pointer-events-none absolute left-0 top-0 z-0 border border-accentBlue/0 px-2 py-1 font-mono text-[9px] font-bold tracking-widest text-transparent opacity-0 transition-all duration-300 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:border-accentBlue/45 group-hover:opacity-100">
              {tag}
            </span>
            <span className="pointer-events-none absolute left-0 top-0 z-0 border border-accentRed/0 px-2 py-1 font-mono text-[9px] font-bold tracking-widest text-transparent opacity-0 transition-all duration-300 group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:border-accentRed/55 group-hover:opacity-100">
              {tag}
            </span>
            <span className="relative z-10 border border-textMain/20 px-2 py-1 font-mono text-[9px] font-bold tracking-widest text-textMuted transition-colors duration-300 group-hover:border-textMain/40 group-hover:text-textMain">
              {tag}
            </span>
          </div>
        </div>

        <p
          className="text-[13px] font-light leading-relaxed text-textMuted"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </article>
    </div>
  );
}
