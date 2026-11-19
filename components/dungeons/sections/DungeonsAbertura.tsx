import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoComTermos from "@/components/guias/TextoComTermos";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import {
  dungeonsCorrompidas,
  dungeonsIntroParagraphs,
  dungeonsNormais,
  dungeonsResumo,
} from "@/components/dungeons/data/dungeons-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "dungeons")!;

export default function DungeonsAbertura() {
  const niveis = [...dungeonsNormais, ...dungeonsCorrompidas].map((dungeon) => dungeon.nivel);
  const corrompidas = dungeonsCorrompidas.map((dungeon) => dungeon.nivel);
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Dungeons" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            As {dungeonsNormais.length} dungeons e as {dungeonsCorrompidas.length} versões corrompidas: como entrar, a
            Forgery e o que trocar no Dungeon Merchant.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Dungeons"
            tipo="Conteúdo de grupo · Endgame"
            linhas={[
              { rotulo: "Party", valor: "Até 4 jogadores por chave" },
              { rotulo: "Nível", valor: <span className="numeros">{Math.min(...niveis)} a {Math.max(...niveis)}, conforme a dungeon</span> },
              { rotulo: "Precisa de", valor: "A chave da dungeon; duas pedem uma quest" },
              { rotulo: "Corrompidas", valor: <span className="numeros">Nível {Math.min(...corrompidas)}+, na Forgery</span> },
              { rotulo: "Rende", valor: "Esmeraldas, Boss Token e fragmentos" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {dungeonsIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {dungeonsResumo.map((item) => (
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
