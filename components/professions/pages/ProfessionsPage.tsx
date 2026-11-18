import FimDoGuia from "@/components/guias/FimDoGuia";
import { professionsFontes } from "@/components/professions/data/professions-content";
import ProfessionCraftingSection from "@/components/professions/sections/ProfessionCraftingSection";
import ProfessionExtrasSection from "@/components/professions/sections/ProfessionExtrasSection";
import ProfessionGrindSpotsSection from "@/components/professions/sections/ProfessionGrindSpotsSection";
import ProfessionsAbertura from "@/components/professions/sections/ProfessionsAbertura";
import ProfessionToolsSection from "@/components/professions/sections/ProfessionToolsSection";
import ProfessionTypesSection from "@/components/professions/sections/ProfessionTypesSection";
import ProfessionWaypointsSection from "@/components/professions/sections/ProfessionWaypointsSection";

/** Guia de Profissões, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function ProfessionsPage() {
  return (
    <article>
      <ProfessionsAbertura />
      <ProfessionTypesSection />
      <ProfessionToolsSection />
      <ProfessionCraftingSection />
      <ProfessionGrindSpotsSection />
      <ProfessionWaypointsSection />
      <ProfessionExtrasSection />
      <FimDoGuia slug="profissoes" fontes={professionsFontes} />
    </article>
  );
}
