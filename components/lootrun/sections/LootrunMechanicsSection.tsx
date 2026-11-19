import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunMechanicBlocks, lootrunMechanicsIntro } from "@/components/lootrun/data/lootrun-content";
import BlocosDaRun from "@/components/lootrun/sections/BlocosDaRun";

export default function LootrunMechanicsSection() {
  return (
    <SecaoGuia id="mecanicas" titulo="Desafios e tempo" introducao={lootrunMechanicsIntro.description}>
      <BlocosDaRun blocos={lootrunMechanicBlocks} />
    </SecaoGuia>
  );
}
