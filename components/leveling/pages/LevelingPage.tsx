import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import { levelingIntroParagraphs } from "@/components/leveling/data/leveling-content";
import LevelingBuildsSection from "@/components/leveling/sections/LevelingBuildsSection";
import LevelingPartySection from "@/components/leveling/sections/LevelingPartySection";
import LevelingSpotsSection from "@/components/leveling/sections/LevelingSpotsSection";

export default function LevelingPage() {
  return (
    <>
      <Navbar currentPath="/leveling" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Leveling"
          paragraphs={levelingIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />

        <LevelingPartySection />
        <LevelingSpotsSection />
        <LevelingBuildsSection />
      </main>
      <Footer />
    </>
  );
}
