import FimDoGuia from "@/components/guias/FimDoGuia";
import { levelingFontes } from "@/components/leveling/data/leveling-content";
import LevelingAbertura from "@/components/leveling/sections/LevelingAbertura";
import LevelingArmasSection from "@/components/leveling/sections/LevelingArmasSection";
import LevelingBuildsSection from "@/components/leveling/sections/LevelingBuildsSection";
import LevelingPartySection from "@/components/leveling/sections/LevelingPartySection";
import LevelingSpotsSection from "@/components/leveling/sections/LevelingSpotsSection";

/** Guia de Leveling, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function LevelingPage() {
  return (
    <article>
      <LevelingAbertura />
      <LevelingPartySection />
      <LevelingSpotsSection />
      <LevelingBuildsSection />
      <LevelingArmasSection />
      <FimDoGuia slug="leveling" fontes={levelingFontes} />
    </article>
  );
}
