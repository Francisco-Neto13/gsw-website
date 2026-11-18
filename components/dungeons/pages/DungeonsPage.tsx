import FimDoGuia from "@/components/guias/FimDoGuia";
import { dungeonsFontes } from "@/components/dungeons/data/dungeons-content";
import DungeonsAbertura from "@/components/dungeons/sections/DungeonsAbertura";
import DungeonsAccessSection from "@/components/dungeons/sections/DungeonsAccessSection";
import DungeonsExtrasSection from "@/components/dungeons/sections/DungeonsExtrasSection";
import DungeonsListSection from "@/components/dungeons/sections/DungeonsListSection";
import DungeonsForgerySection from "@/components/dungeons/sections/DungeonsForgerySection";
import DungeonsMerchantSection from "@/components/dungeons/sections/DungeonsMerchantSection";
import DungeonsRewardsSection from "@/components/dungeons/sections/DungeonsRewardsSection";

/** Guia de Dungeons, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function DungeonsPage() {
  return (
    <article>
      <DungeonsAbertura />
      <DungeonsListSection />
      <DungeonsAccessSection />
      <DungeonsForgerySection />
      <DungeonsMerchantSection />
      <DungeonsRewardsSection />
      <DungeonsExtrasSection />
      <FimDoGuia slug="dungeons" fontes={dungeonsFontes} />
    </article>
  );
}
