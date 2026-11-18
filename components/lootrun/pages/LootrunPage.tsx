import FimDoGuia from "@/components/guias/FimDoGuia";
import { lootrunFontes } from "@/components/lootrun/data/lootrun-content";
import LootrunAbertura from "@/components/lootrun/sections/LootrunAbertura";
import LootrunAdvancedSystemsSection from "@/components/lootrun/sections/LootrunAdvancedSystemsSection";
import LootrunBeaconsSection from "@/components/lootrun/sections/LootrunBeaconsSection";
import LootrunCampsSection from "@/components/lootrun/sections/LootrunCampsSection";
import LootrunCombosSection from "@/components/lootrun/sections/LootrunCombosSection";
import LootrunDivisionsSection from "@/components/lootrun/sections/LootrunDivisionsSection";
import LootrunExtrasSection from "@/components/lootrun/sections/LootrunExtrasSection";
import LootrunMechanicsSection from "@/components/lootrun/sections/LootrunMechanicsSection";
import LootrunParticipationSection from "@/components/lootrun/sections/LootrunParticipationSection";
import LootrunRewardsSection from "@/components/lootrun/sections/LootrunRewardsSection";

/** Guia de Lootrun, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function LootrunPage() {
  return (
    <article>
      <LootrunAbertura />
      <LootrunParticipationSection />
      <LootrunDivisionsSection />
      <LootrunCampsSection />
      <LootrunMechanicsSection />
      <LootrunBeaconsSection />
      <LootrunAdvancedSystemsSection />
      <LootrunCombosSection />
      <LootrunRewardsSection />
      <LootrunExtrasSection />
      <FimDoGuia slug="lootrun" fontes={lootrunFontes} />
    </article>
  );
}
