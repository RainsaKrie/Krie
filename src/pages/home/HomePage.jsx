import ActiveStatus from "../../components/ActiveStatus.jsx";
import BlueprintLines from "../../components/BlueprintLines.jsx";
import CropMarks from "../../components/CropMarks.jsx";
import GlitchTitle from "../../components/GlitchTitle.jsx";
import {
  contactData,
  footerData,
  heroData,
  portfolioData,
  profileData,
  projects,
  skillsData,
  statusBarData
} from "../../data/portfolio.js";
import Profile from "../../features/intro/Profile.jsx";
import TechSpec from "../../features/intro/TechSpec.jsx";
import MatrixList from "../../features/portfolio/MatrixList.jsx";

function ContactPortal({ data }) {
  return (
    <div className="flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-textMuted">
      <div className="mb-4 flex flex-col gap-2">
        <GlitchTitle
          as="h3"
          text={data.title}
          className="text-2xl"
          blueClassName="-top-0.5 -left-0.5"
          redClassName="top-0.5 left-0.5"
          blueOpacityClassName="opacity-[0.42]"
          redOpacityClassName="opacity-[0.42]"
        />
        <p className="font-cn-title text-lg text-textMuted">{data.subtitle}</p>
      </div>
      <p>{data.label}</p>
      <p>EMAIL: {data.email}</p>
      <p>GITHUB: {data.github}</p>
    </div>
  );
}

function HeroTitle({ data }) {
  return (
    <div className="relative mb-8 py-12 select-none lg:col-span-12" id="titleContainer">
      <div className="absolute left-0 top-[52%] z-0 h-px w-full bg-accentRed/15" />

      <GlitchTitle
        as="h1"
        text={data.title}
        lang="en"
        className="text-6xl md:text-8xl lg:text-9xl"
        blueClassName="-top-2 -left-3.5"
        redClassName="top-1.5 left-1.5"
        blueOpacityClassName="opacity-[0.5]"
        redOpacityClassName="opacity-[0.42]"
      />

      <div className="relative z-10 mt-4 flex flex-col gap-3 md:ml-40">
        <h2 className="font-cinzel text-3xl lowercase tracking-widest text-textMuted md:text-4xl lg:text-5xl">
          {data.tagline}
          <span className="relative bottom-[2px] ml-1 inline-block font-mono text-xs text-accentRed">
            -
          </span>
        </h2>
        <GlitchTitle
          as="p"
          text={data.subtitle}
          lang="zh"
          className="text-xl md:text-2xl"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-textMuted"
        />
      </div>
    </div>
  );
}

function FooterBar({ data }) {
  return (
    <footer className="fixed bottom-0 left-0 z-[45] h-[8vh] w-full border-t border-line bg-base/80 px-8 font-mono text-[8px] text-textMuted select-none backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
        <div className="absolute top-0 left-[8%] h-px w-[9%] bg-textMain/22" />
        <div className="absolute top-0 left-[17.6%] h-px w-[6%] bg-accentRed/22" />
        <div className="absolute top-0 left-[24.5%] hidden h-px w-[5%] bg-textMain/10 md:block" />
        <div className="absolute top-0 right-[8%] h-px w-[8%] bg-textMain/22" />
        <div className="absolute top-0 right-[16.8%] h-px w-[7%] bg-accentBlue/22" />
        <div className="absolute top-0 right-[25%] hidden h-px w-[5%] bg-textMain/10 md:block" />

        <div className="absolute top-[1px] left-[31%] hidden h-px w-[9%] origin-left rotate-[2.1deg] bg-line lg:block" />
        <div className="absolute top-[1px] left-[41%] hidden h-px w-[5%] origin-left -rotate-[4.6deg] bg-accentRed/14 xl:block" />
        <div className="absolute top-[1px] right-[34%] hidden h-px w-[11%] origin-right -rotate-[2.6deg] bg-line lg:block" />
        <div className="absolute top-[2px] right-[22%] hidden h-px w-[8%] origin-right rotate-[4.1deg] bg-accentBlue/14 xl:block" />

        <div className="absolute top-0 left-[8%] h-[8px] w-px bg-textMain/18" />
        <div className="absolute top-0 left-[23.5%] hidden h-[5px] w-px bg-textMain/14 md:block" />
        <div className="absolute top-0 right-[23.5%] hidden h-[5px] w-px bg-textMain/14 md:block" />
        <div className="absolute top-0 right-[8%] h-[8px] w-px bg-textMain/18" />

        <div className="absolute left-[8.4%] top-[10px] hidden font-mono text-[7px] tracking-[0.22em] text-textMuted/22 xl:block">
          draft footer / trim guide / unresolved
        </div>
        <div className="absolute right-[8.4%] top-[10px] hidden font-mono text-[7px] tracking-[0.22em] text-textMuted/22 xl:block">
          note_b / align to lower matrix edge
        </div>
      </div>

      <div className="relative flex h-full items-center justify-between">
        <span>{data.left}</span>
        <span>{data.right}</span>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base text-textMain font-sharp">
      <BlueprintLines />
      <CropMarks />
      <ActiveStatus data={statusBarData} />

      <main className="relative z-10 grid w-full grid-cols-1 gap-12 px-[8%] pt-[14vh] pb-[16vh] lg:grid-cols-12">
        <HeroTitle data={heroData} />

        <section className="relative z-10 flex flex-col gap-12 lg:col-span-5">
          <Profile data={profileData} />
          <TechSpec data={skillsData} />
          <ContactPortal data={contactData} />
        </section>

        <MatrixList data={portfolioData} projects={projects} />
      </main>

      <FooterBar data={footerData} />
    </div>
  );
}
