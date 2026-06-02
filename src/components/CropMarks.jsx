export default function CropMarks({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`.trim()}>
      <div className="fixed top-4 left-4 z-10 hidden select-none font-mono text-[8px] text-textMuted/30 md:block">
        [+]
      </div>
      <div className="fixed top-4 right-4 z-10 hidden select-none text-right font-mono text-[8px] text-textMuted/30 md:block">
        [+]
      </div>

      <div className="fixed top-[18vh] left-[22%] z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none bg-base px-1.5 font-mono text-xs font-semibold text-textMain/50 lg:block">
        [+]
      </div>
      <div className="fixed bottom-[12vh] left-[55%] z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none bg-base px-1 font-mono text-xs font-semibold text-textMain/40 lg:block">
        [+]
      </div>
    </div>
  );
}
