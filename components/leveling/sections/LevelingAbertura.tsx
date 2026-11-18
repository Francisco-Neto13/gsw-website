import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoComTermos from "@/components/guias/TextoComTermos";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { levelingIntroParagraphs, levelingResumo, levelingSpots } from "@/components/leveling/data/leveling-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "leveling")!;

export default function LevelingAbertura() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Leveling" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            Onde upar do 1 ao 121, como montar a party e as builds que aceleram o grind.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Leveling"
            tipo="Grind de XP · Progressão"
            linhas={[
              { rotulo: "Nível", valor: <span className="numeros">1 a 121</span> },
              { rotulo: "Party", valor: "Recomendada, com healer a partir do nível 20" },
              { rotulo: "Spots", valor: <span className="numeros">{levelingSpots.length}, da Emerald Trail à Bat Cave</span> },
              { rotulo: "Acelera", valor: "Totems, bombas de XP e XP Bonus" },
              { rotulo: "Builds", valor: "Árvore, armas e armaduras para as 5 classes" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {levelingIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {levelingResumo.map((item) => (
              <li key={item}>
                <TextoComTermos texto={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
