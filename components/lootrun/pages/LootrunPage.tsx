import GuideIntro from "@/components/shared/GuideIntro";
import { lootrunGuideIntro } from "@/components/lootrun/data/lootrun-content";
import LootrunAdvancedSystemsSection from "@/components/lootrun/sections/LootrunAdvancedSystemsSection";
import LootrunBeaconsSection from "@/components/lootrun/sections/LootrunBeaconsSection";
import LootrunCampsSection from "@/components/lootrun/sections/LootrunCampsSection";
import LootrunCombosSection from "@/components/lootrun/sections/LootrunCombosSection";
import LootrunDivisionsSection from "@/components/lootrun/sections/LootrunDivisionsSection";
import LootrunExtrasSection from "@/components/lootrun/sections/LootrunExtrasSection";
import LootrunMechanicsSection from "@/components/lootrun/sections/LootrunMechanicsSection";
import LootrunParticipationSection from "@/components/lootrun/sections/LootrunParticipationSection";
import LootrunRewardsSection from "@/components/lootrun/sections/LootrunRewardsSection";

export default function LootrunPage() {
  return (
    <div className="min-h-screen bg-black">
        <GuideIntro
          eyebrow={lootrunGuideIntro.eyebrow}
          title={lootrunGuideIntro.title}
          paragraphs={lootrunGuideIntro.paragraphs}
        />
        <LootrunParticipationSection />
        <LootrunDivisionsSection />
        <LootrunCampsSection />
        <LootrunMechanicsSection />
        <LootrunBeaconsSection />
        <LootrunAdvancedSystemsSection />
        <LootrunCombosSection />
        <LootrunRewardsSection />
        <LootrunExtrasSection />
      </div>
  );
}
