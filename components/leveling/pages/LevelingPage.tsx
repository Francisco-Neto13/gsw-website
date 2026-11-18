import GuideIntro from "@/components/shared/GuideIntro";
import { levelingIntroParagraphs } from "@/components/leveling/data/leveling-content";
import LevelingBuildsSection from "@/components/leveling/sections/LevelingBuildsSection";
import LevelingPartySection from "@/components/leveling/sections/LevelingPartySection";
import LevelingSpotsSection from "@/components/leveling/sections/LevelingSpotsSection";

export default function LevelingPage() {
  return (
    <div>
        <GuideIntro
          title="Leveling"
          paragraphs={levelingIntroParagraphs}
        />
        <LevelingPartySection />
        <LevelingSpotsSection />
        <LevelingBuildsSection />
      </div>
  );
}
