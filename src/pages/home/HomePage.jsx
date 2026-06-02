import BlueprintLines from "../../components/BlueprintLines.jsx";
import CropMarks from "../../components/CropMarks.jsx";
import GlitchTitle from "../../components/GlitchTitle.jsx";
import {
  contactData,
  heroData,
  portfolioData,
  profileData,
  projects,
  skillsData
} from "../../data/portfolio.js";
import Profile from "../../features/intro/Profile.jsx";
import TechSpec from "../../features/intro/TechSpec.jsx";
import MatrixList from "../../features/portfolio/MatrixList.jsx";

function HeroTitle({ data }) {
  return (
    <div className="relative mb-16 py-4 select-none lg:ml-[-2px]" id="titleContainer">
      <div className="absolute left-0 top-[50%] z-0 h-px w-full bg-accentRed/15" />

      <GlitchTitle
        as="h1"
        text={data.title}
        lang="en"
        className="text-7xl md:text-[8rem] lg:text-[9.5rem] xl:text-[10.5rem]"
        blueClassName="-top-2 -left-3.5"
        redClassName="top-1.5 left-1.5"
        blueOpacityClassName="opacity-[0.5]"
        redOpacityClassName="opacity-[0.42]"
      />

      <div className="relative z-10 mt-5 flex flex-col gap-3 md:ml-10 lg:ml-12">
        <h2 className="font-cinzel text-3xl lowercase tracking-[0.18em] text-textMuted md:text-4xl md:tracking-[0.2em] lg:text-[2.75rem] lg:tracking-[0.22em]">
          {data.tagline}
          <span className="relative bottom-[2px] ml-1 inline-block font-mono text-xs text-accentRed">
            -
          </span>
        </h2>
        <GlitchTitle
          as="p"
          text={data.subtitle}
          lang="zh"
          className="mt-4 text-2xl font-bold md:ml-1"
          blueOpacityClassName="opacity-0"
          redOpacityClassName="opacity-0"
          mainClassName="font-cn-title text-black"
        />
      </div>
    </div>
  );
}

function IntroAbstract({ data }) {
  return (
    <div className="flex flex-col gap-6 border-l border-line pl-5 lg:pl-6">
      <div className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-textMuted">
        [PROFILE // PERSONAL_BRIEF]
      </div>
      <p className="font-main text-[15px] leading-relaxed tracking-wide text-textMain">
        {data.bio}
      </p>
      <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-textMuted">
        {data.status}
      </div>
    </div>
  );
}

function ContactFooter({ data }) {
  return (
    <footer className="mt-24 w-full border-t border-black pt-8 pb-16">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[22%_78%] lg:gap-0">
        <div className="flex flex-col">
          <GlitchTitle
            as="h2"
            text={data.title}
            className="text-4xl leading-none tracking-tight md:text-5xl"
            blueClassName="-top-0.5 -left-0.5"
            redClassName="top-0.5 left-0.5"
            blueOpacityClassName="opacity-[0.42]"
            redOpacityClassName="opacity-[0.42]"
          />
          <span className="mt-2 font-cn-title text-xs font-medium tracking-widest text-textMuted">
            {data.subtitle}
          </span>
        </div>

        <div className="flex w-full flex-col items-stretch lg:pl-8">
          <div className="flex flex-col border-t border-line sm:flex-row sm:border-t-0">
            <div className="flex items-center justify-between gap-6 border-b border-line py-4 sm:flex-1 sm:border-b-0 sm:border-r sm:pr-8">
              <span className="text-[11px] font-bold tracking-wider text-textMuted">
                [PORTAL: EMAIL]
              </span>
              <a
                href={`mailto:${data.email}`}
                className="text-xs font-bold leading-none text-black hover:text-accentRed"
              >
                {data.email}
              </a>
            </div>

            <div className="flex items-center justify-between gap-6 py-4 sm:flex-1 sm:pl-8">
              <span className="text-[11px] font-bold tracking-wider text-textMuted">
                [PORTAL: GITHUB]
              </span>
              <a
                href={`https://${data.github}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold leading-none text-black hover:text-accentRed"
              >
                {data.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base text-textMain font-sharp lg:h-screen">
      <BlueprintLines />
      <CropMarks />

      <main className="relative z-10 min-h-screen w-full px-6 py-[12vh] lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[22%_33%_45%] lg:gap-x-0 lg:px-[6%] lg:pb-[12vh] lg:pt-[12vh]">
        <section className="mt-10 flex flex-col lg:mt-0 lg:pr-10">
          <HeroTitle data={heroData} />
          <IntroAbstract data={profileData} />
        </section>

        <section className="mt-14 flex flex-col lg:mt-0 lg:px-10 lg:py-12">
          <div className="space-y-16 lg:my-16 lg:space-y-32">
            <Profile data={profileData} />
            <TechSpec data={skillsData} />
          </div>
        </section>

        <section className="mt-12 min-h-0 lg:mt-0 lg:pl-10">
          <MatrixList data={portfolioData} projects={projects} />
        </section>

        <div className="lg:col-span-3">
          <ContactFooter data={contactData} />
        </div>
      </main>
    </div>
  );
}
