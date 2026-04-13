import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import Navbar from "@/components/shared/Navbar";
import { lootrunGuideIntro } from "@/components/lootrun/data/lootrun-content";
import LootrunBeaconsSection from "@/components/lootrun/sections/LootrunBeaconsSection";
import LootrunExtrasSection from "@/components/lootrun/sections/LootrunExtrasSection";
import LootrunMechanicsSection from "@/components/lootrun/sections/LootrunMechanicsSection";
import LootrunParticipationSection from "@/components/lootrun/sections/LootrunParticipationSection";
import LootrunRewardsSection from "@/components/lootrun/sections/LootrunRewardsSection";

export default function LootrunPage() {
  return (
    <>
      <Navbar currentPath="/lootrun" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow={lootrunGuideIntro.eyebrow}
          title={lootrunGuideIntro.title}
          paragraphs={lootrunGuideIntro.paragraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <LootrunParticipationSection />
        <LootrunMechanicsSection />
        <LootrunBeaconsSection />
        <LootrunRewardsSection />
        <LootrunExtrasSection />
      </main>
      <Footer />
    </>
  );
}
