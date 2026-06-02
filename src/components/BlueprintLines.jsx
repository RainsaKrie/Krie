export default function BlueprintLines({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`.trim()}>
      <div className="fixed top-0 left-[22%] z-0 hidden h-full w-px bg-line lg:block" />
      <div className="fixed top-0 left-[55%] z-0 hidden h-full w-px bg-line lg:block" />

      <div className="fixed top-[18vh] left-0 z-0 h-px w-full bg-line" />
      <div className="fixed bottom-[12vh] left-0 z-0 h-px w-full bg-line" />

      <div className="fixed top-[6vh] left-[6%] z-0 h-px w-[12%] bg-line" />
      <div className="fixed top-[6vh] left-[22%] z-0 hidden h-px w-[14%] bg-line lg:block" />
      <div className="fixed top-[6vh] left-[39%] z-0 hidden h-px w-[10%] bg-accentRed/16 lg:block" />
      <div className="fixed top-[6vh] right-[32%] z-0 hidden h-px w-[11%] bg-line lg:block" />
      <div className="fixed top-[6vh] right-[15%] z-0 h-px w-[12%] bg-accentBlue/16" />
      <div className="fixed top-[6vh] right-[6%] z-0 h-px w-[7%] bg-line" />

      <div className="fixed top-[6vh] left-[6%] z-0 h-[8px] w-px bg-textMain/24" />
      <div className="fixed top-[6vh] left-[22%] z-0 hidden h-[10px] w-px bg-textMain/24 lg:block" />
      <div className="fixed top-[6vh] left-[55%] z-0 hidden h-[10px] w-px bg-textMain/24 lg:block" />
      <div className="fixed top-[6vh] right-[6%] z-0 h-[8px] w-px bg-textMain/24" />

      <div className="fixed top-[6.25vh] left-[41%] z-0 hidden h-px w-[11%] origin-left rotate-[1.9deg] bg-line xl:block" />
      <div className="fixed top-[6.4vh] right-[24%] z-0 hidden h-px w-[10%] origin-right -rotate-[3.2deg] bg-accentBlue/14 xl:block" />

      <div className="fixed bottom-[12vh] left-[6%] z-0 h-px w-[12%] bg-line" />
      <div className="fixed bottom-[12vh] left-[22%] z-0 hidden h-px w-[10%] bg-line lg:block" />
      <div className="fixed bottom-[12vh] left-[39%] z-0 hidden h-px w-[9%] bg-accentRed/16 lg:block" />
      <div className="fixed bottom-[12vh] right-[33%] z-0 hidden h-px w-[10%] bg-line lg:block" />
      <div className="fixed bottom-[12vh] right-[16%] z-0 h-px w-[9%] bg-accentBlue/16" />
      <div className="fixed bottom-[12vh] right-[6%] z-0 h-px w-[8%] bg-line" />

      <div className="fixed bottom-[11.6vh] left-[6%] z-0 h-[10px] w-px bg-textMain/24" />
      <div className="fixed bottom-[11.6vh] left-[22%] z-0 hidden h-[12px] w-px bg-textMain/24 lg:block" />
      <div className="fixed bottom-[11.6vh] left-[55%] z-0 hidden h-[12px] w-px bg-textMain/24 lg:block" />
      <div className="fixed bottom-[11.6vh] right-[6%] z-0 h-[10px] w-px bg-textMain/24" />

      <div className="fixed bottom-[11.4vh] left-[28%] z-0 hidden h-px w-[9%] origin-left rotate-[2.1deg] bg-textMain/12 xl:block" />
      <div className="fixed bottom-[12.7vh] left-[56%] z-0 hidden h-px w-[11%] origin-left rotate-[5.8deg] bg-line xl:block" />
      <div className="fixed bottom-[11.7vh] right-[24%] z-0 hidden h-px w-[10%] origin-right -rotate-[3.3deg] bg-accentBlue/14 xl:block" />
    </div>
  );
}
