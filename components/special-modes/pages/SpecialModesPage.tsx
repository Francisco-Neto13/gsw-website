import FimDoGuia from "@/components/guias/FimDoGuia";
import { specialModes, specialModesFontes } from "@/components/special-modes/data/special-modes-content";
import ModosAbertura from "@/components/special-modes/sections/ModosAbertura";
import ModosCombinacoes from "@/components/special-modes/sections/ModosCombinacoes";
import ModosComoFunciona from "@/components/special-modes/sections/ModosComoFunciona";
import ModosComparacao from "@/components/special-modes/sections/ModosComparacao";
import ModoSecao from "@/components/special-modes/sections/ModoSecao";

/** Guia de Modos especiais, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function SpecialModesPage() {
  return (
    <article>
      <ModosAbertura />
      <ModosComoFunciona />
      <ModosComparacao />
      {specialModes.map((modo) => (
        <ModoSecao key={modo.id} modo={modo} />
      ))}
      <ModosCombinacoes />
      <FimDoGuia slug="modos-especiais" fontes={specialModesFontes} />
    </article>
  );
}
