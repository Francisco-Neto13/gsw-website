import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoComTermos from "@/components/guias/TextoComTermos";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { lootrunBeacons, lootrunCamps, lootrunGuideIntro, lootrunResumo } from "@/components/lootrun/data/lootrun-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "lootrun")!;

export default function LootrunAbertura() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Lootrun" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            Como funciona uma lootrun, os camps, os beacons e os combos que levam a runs longas e ao baú cheio.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Lootrun"
            tipo="Desafio de endgame · Endgame"
            linhas={[
              { rotulo: "Onde", valor: "Centro de Divisão Silverbull, a leste de Cinfras" },
              { rotulo: "Precisa de", valor: "Inscrição no Silverbull e as quests e cavernas de cada camp" },
              { rotulo: "Camps", valor: <span className="numeros">{lootrunCamps.length}, de Canyon a Fruma</span> },
              { rotulo: "Desafios", valor: <span className="numeros">12 no começo, até 100 por run</span> },
              { rotulo: "Beacons", valor: <span className="numeros">{lootrunBeacons.length} cores</span> },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {lootrunGuideIntro.paragraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {lootrunResumo.map((item) => (
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
