import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunAdvancedSystems, lootrunAdvancedSystemsIntro } from "@/components/lootrun/data/lootrun-content";
import BlocosDaRun from "@/components/lootrun/sections/BlocosDaRun";

export default function LootrunAdvancedSystemsSection() {
  return (
    <SecaoGuia id="sistemas" titulo={lootrunAdvancedSystemsIntro.title} introducao={lootrunAdvancedSystemsIntro.description}>
      <BlocosDaRun blocos={lootrunAdvancedSystems} />
    </SecaoGuia>
  );
}
