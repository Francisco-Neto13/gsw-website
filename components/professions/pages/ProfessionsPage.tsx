import GuideIntro from "@/components/shared/GuideIntro";
import { professionsIntroParagraphs } from "@/components/professions/data/professions-content";
import ProfessionGrindSpotsSection from "@/components/professions/sections/ProfessionGrindSpotsSection";
import ProfessionExtrasSection from "@/components/professions/sections/ProfessionExtrasSection";
import ProfessionToolsSection from "@/components/professions/sections/ProfessionToolsSection";
import ProfessionTypesSection from "@/components/professions/sections/ProfessionTypesSection";
import ProfessionWaypointsSection from "@/components/professions/sections/ProfessionWaypointsSection";

export default function ProfessionsPage() {
  return (
    <div>
        <GuideIntro
          title="Profissões"
          paragraphs={professionsIntroParagraphs}
        />
        <ProfessionTypesSection />
        <ProfessionToolsSection />
        <ProfessionGrindSpotsSection />
        <ProfessionWaypointsSection />
        <ProfessionExtrasSection />
      </div>
  );
}
