import FimDoGuia from "@/components/guias/FimDoGuia";
import { raidFontes } from "@/components/raids/data/raids-content";
import RaidsAbertura from "@/components/raids/sections/RaidsAbertura";
import RaidsDaGuilda from "@/components/raids/sections/RaidsDaGuilda";
import RaidsEstrutura from "@/components/raids/sections/RaidsEstrutura";
import RaidsExtras from "@/components/raids/sections/RaidsExtras";
import RaidsGuiaPorRaid from "@/components/raids/sections/RaidsGuiaPorRaid";
import RaidsPrimeirosPassos from "@/components/raids/sections/RaidsPrimeirosPassos";
import RaidsRecompensas from "@/components/raids/sections/RaidsRecompensas";

/** Guia modelo: o padrão que os outros guias vão seguir (docs/redesign/estrutura-do-guia.md). */
export default function RaidsPage() {
  return (
    <article>
      <RaidsAbertura />
      <RaidsPrimeirosPassos />
      <RaidsEstrutura />
      <RaidsDaGuilda />
      <RaidsGuiaPorRaid />
      <RaidsRecompensas />
      <RaidsExtras />
      <FimDoGuia slug="raids" fontes={raidFontes} />
    </article>
  );
}
