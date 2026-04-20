import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import { raidsIntroParagraphs } from "@/components/raids/data/raids-content";
import GuildRaidsSection from "@/components/raids/sections/GuildRaidsSection";
import RaidExtrasSection from "@/components/raids/sections/RaidExtrasSection";
import RaidFirstStepsSection from "@/components/raids/sections/RaidFirstStepsSection";
import RaidGuidesSection from "@/components/raids/sections/RaidGuidesSection";
import RaidRewardsSection from "@/components/raids/sections/RaidRewardsSection";
import RaidStructureSection from "@/components/raids/sections/RaidStructureSection";

export default function RaidsPage() {
  return (
    <>
      <Navbar currentPath="/raids" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Raids"
          paragraphs={raidsIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />

        <RaidFirstStepsSection />
        <RaidStructureSection />
        <GuildRaidsSection />
        <RaidGuidesSection />
        <RaidRewardsSection />
        <RaidExtrasSection />
      </main>
      <Footer />
    </>
  );
}
