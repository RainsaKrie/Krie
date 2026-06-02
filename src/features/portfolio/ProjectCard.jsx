import GlitchTitle from "../../components/GlitchTitle.jsx";

export default function ProjectCard({
  title,
  subtitle,
  status,
  version,
  tags,
  link,
  description
}) {
  return (
    <div className="group relative bg-transparent px-3 py-3">
      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="absolute left-0 top-0 h-px bg-textMain"
          style={{ width: "clamp(96px, 24%, 176px)" }}
        />
        <div
          className="absolute left-0 top-0 w-px bg-textMain"
          style={{ height: "clamp(60px, 22%, 112px)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-px bg-textMain"
          style={{ width: "clamp(92px, 24%, 168px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-px bg-textMain"
          style={{ height: "clamp(44px, 15%, 84px)" }}
        />

        <div
          className="absolute left-[8px] top-[-4px] h-px origin-left scale-x-0 bg-accentBlue/0 opacity-0 transition-all duration-150 group-hover:scale-x-100 group-hover:bg-accentBlue/65 group-hover:opacity-100"
          style={{ width: "clamp(44px, 11%, 82px)" }}
        />
        <div
          className="absolute top-[10px] right-[16px] h-px origin-right scale-x-0 bg-accentBlue/0 opacity-0 transition-all duration-150 group-hover:scale-x-100 group-hover:bg-accentBlue/35 group-hover:opacity-100"
          style={{ width: "clamp(28px, 8%, 56px)" }}
        />
        <div
          className="absolute bottom-[-4px] right-[-4px] h-px origin-right scale-x-0 bg-accentRed/0 opacity-0 transition-all duration-150 group-hover:scale-x-100 group-hover:bg-accentRed/90 group-hover:opacity-100"
          style={{ width: "clamp(62px, 16%, 112px)" }}
        />
        <div
          className="absolute bottom-[-4px] right-[-4px] w-px origin-bottom scale-y-0 bg-accentRed/0 opacity-0 transition-all duration-150 group-hover:scale-y-100 group-hover:bg-accentRed/90 group-hover:opacity-100"
          style={{ height: "clamp(44px, 16%, 92px)" }}
        />
      </div>

      <article className="relative z-10 flex min-h-[180px] cursor-crosshair flex-col bg-transparent px-6 py-6 md:px-8 md:py-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <GlitchTitle
              as="h3"
              text={title}
              lang="en"
              className="text-xl"
              blueClassName="-top-0.5 -left-0.5"
              redClassName="top-0.5 left-0.5"
              blueOpacityClassName="opacity-[0.42]"
              redOpacityClassName="opacity-[0.42]"
              mainClassName="inline-flex"
            />
            <p className="mt-1 font-cn-title text-xs text-textMuted">{subtitle}</p>
          </div>

          <span className="border border-black/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-textMuted">
            {status}
          </span>
        </div>

        <p className="my-4 font-sharp text-sm font-medium leading-relaxed tracking-wide text-textMain">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-4">
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span key={tag} className="group/tag relative inline-flex">
                <span className="pointer-events-none absolute inset-0 border border-accentBlue/0 opacity-0 transition-none group-hover/tag:-translate-x-[1px] group-hover/tag:-translate-y-[1px] group-hover/tag:border-accentBlue/55 group-hover/tag:opacity-100" />
                <span className="pointer-events-none absolute inset-0 border border-accentRed/0 opacity-0 transition-none group-hover/tag:translate-x-[1px] group-hover/tag:translate-y-[1px] group-hover/tag:border-accentRed/65 group-hover/tag:opacity-100" />
                <span className="relative border border-black/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-textMuted">
                  {tag}
                </span>
              </span>
            ))}
          </div>

          <a
            href={link}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-textMuted"
          >
            {version} // View_Spec →
          </a>
        </div>
      </article>
    </div>
  );
}
