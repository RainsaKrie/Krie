export default function GlitchTitle({
  as: Tag = "h2",
  text,
  lang = "en",
  className = "",
  blueClassName = "",
  redClassName = "",
  mainClassName = "",
  blueOpacityClassName = "opacity-[0.42]",
  redOpacityClassName = "opacity-[0.34]"
}) {
  const baseFontClass = lang === "zh" ? "font-cn-title" : "font-cinzel";

  return (
    <Tag
      className={`relative inline-block ${baseFontClass} font-bold leading-none tracking-normal text-textMain ${lang === "en" ? "uppercase" : ""} ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-1 -left-1 z-0 origin-bottom-left scale-[1.015] text-accentBlue ${blueOpacityClassName} ${lang === "en" ? "uppercase" : ""} ${blueClassName}`.trim()}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-0.5 left-0.5 z-0 text-accentRed ${redOpacityClassName} ${lang === "en" ? "uppercase" : ""} ${redClassName}`.trim()}
      >
        {text}
      </span>
      <span className={`relative z-10 ${mainClassName}`.trim()}>{text}</span>
    </Tag>
  );
}
