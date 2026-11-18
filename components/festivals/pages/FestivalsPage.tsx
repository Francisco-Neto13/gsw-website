import FimDoGuia from "@/components/guias/FimDoGuia";
import { festivais, festivaisFontes } from "@/components/festivals/data/festivals-content";
import FestivaisAbertura from "@/components/festivals/sections/FestivaisAbertura";
import FestivaisCiclo from "@/components/festivals/sections/FestivaisCiclo";
import FestivaisEstrutura from "@/components/festivals/sections/FestivaisEstrutura";
import FestivalSecao from "@/components/festivals/sections/FestivalSecao";

/** Guia de Festivais, no modelo de Raids e Montarias (docs/redesign/estrutura-do-guia.md). */
export default function FestivalsPage() {
  return (
    <article>
      <FestivaisAbertura />
      <FestivaisCiclo />
      <FestivaisEstrutura />
      {festivais.map((festival) => (
        <FestivalSecao key={festival.id} festival={festival} />
      ))}
      <FimDoGuia slug="festivais" fontes={festivaisFontes} />
    </article>
  );
}
