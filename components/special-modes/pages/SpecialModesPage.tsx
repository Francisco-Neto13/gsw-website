import GuideIntro from "@/components/shared/GuideIntro";
import { specialModesIntroParagraphs } from "@/components/special-modes/data/special-modes-content";
import SpecialModesChallengeSection from "@/components/special-modes/sections/SpecialModesChallengeSection";
import SpecialModesListSection from "@/components/special-modes/sections/SpecialModesListSection";

export default function SpecialModesPage() {
  return (
    <div className="min-h-screen bg-black">
        <GuideIntro
          title="Modos Especiais"
          paragraphs={specialModesIntroParagraphs}
        />
        <SpecialModesListSection />
        <SpecialModesChallengeSection />
      </div>
  );
}
