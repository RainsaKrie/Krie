export default function CropMarks({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`.trim()}>
      <div className="fixed top-4 left-4 z-10 hidden select-none font-mono text-[8px] text-textMuted/30 md:block">
        [CROP_L_TOP] // BLEED_3MM
      </div>
      <div className="fixed top-4 right-4 z-10 hidden select-none text-right font-mono text-[8px] text-textMuted/30 md:block">
        BLEED_3MM // [CROP_R_TOP]
      </div>
      <div className="fixed top-[7.2vh] left-[8.4%] z-10 hidden select-none font-mono text-[7px] tracking-[0.24em] text-textMuted/24 xl:block">
        SHEET: A-01 // TITLE_LOCK // MONOCHROME_RB_OFFSET
      </div>
      <div className="fixed top-[7.2vh] right-[8.4%] z-10 hidden select-none text-right font-mono text-[7px] tracking-[0.24em] text-textMuted/24 xl:block">
        REV: 0x13 // TRIM_GUIDE // KEEP_MAIN_FIELD_CLEAR
      </div>

      <div className="fixed top-[18vh] left-[18%] z-10 -translate-x-1/2 -translate-y-1/2 select-none bg-base px-1.5 font-mono text-xs text-textMain/40">
        [+]
      </div>
      <div className="fixed bottom-[8vh] left-[68%] z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none bg-base px-1 font-mono text-[10px] text-textMain/20 lg:block">
        [+]
      </div>
    </div>
  );
}
