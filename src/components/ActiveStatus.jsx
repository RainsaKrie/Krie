export default function ActiveStatus({ className = "", data }) {
  const [leftCompact, leftWide] = data.leftMeta;
  const [version, paperNoise, draftMode, clock] = data.rightMeta;

  return (
    <header className={`fixed top-0 left-0 z-[45] flex h-[6vh] w-full items-center justify-between border-b border-line bg-base/80 px-8 font-mono text-xs font-semibold select-none backdrop-blur-md ${className}`.trim()}>
      <div className="flex items-center gap-4">
        <span className="inline-block h-1.5 w-1.5 bg-accentRed" />
        <span className="ml-2 font-cinzel text-sm font-bold tracking-[0.22em] text-textMain">
          {data.id}
        </span>
        <span className="hidden tracking-[0.18em] text-textMuted lg:block">{leftCompact}</span>
        <span className="hidden tracking-[0.18em] text-textMuted xl:block">{leftWide}</span>
      </div>
      <div className="flex items-center gap-8 font-mono lowercase tracking-[0.14em] text-textMuted">
        <span>{version}</span>
        <span className="hidden lg:block">{paperNoise}</span>
        <span className="hidden xl:block">{draftMode}</span>
        <span>{clock}</span>
      </div>
    </header>
  );
}
