import FimDoGuia from "@/components/guias/FimDoGuia";
import { montariasFontes } from "@/components/mounts/data/mounts-content";
import MontariasAbertura from "@/components/mounts/sections/MontariasAbertura";
import MontariasAlimentacao from "@/components/mounts/sections/MontariasAlimentacao";
import MontariasAtributos from "@/components/mounts/sections/MontariasAtributos";
import MontariasBreeding from "@/components/mounts/sections/MontariasBreeding";
import MontariasTipos from "@/components/mounts/sections/MontariasTipos";
import MontariasTreinamento from "@/components/mounts/sections/MontariasTreinamento";

/** Guia de Montarias, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function MountsPage() {
  return (
    <article>
      <MontariasAbertura />
      <MontariasTipos />
      <MontariasAtributos />
      <MontariasTreinamento />
      <MontariasAlimentacao />
      <MontariasBreeding />
      <FimDoGuia slug="montarias" fontes={montariasFontes} />
    </article>
  );
}
