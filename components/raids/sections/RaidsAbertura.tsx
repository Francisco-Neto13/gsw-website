import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { raids, raidsIntroParagraphs, raidsResumo } from "@/components/raids/data/raids-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "raids")!;

export default function RaidsAbertura() {
  const niveis = raids.map((raid) => raid.level);
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="max-w-[60ch]">
        <Breadcrumb guia={guia} />
        <h1 className="mt-3 text-titulo-1 text-texto">Raids</h1>
        <p className="mt-3 text-lede text-texto-2">
          As cinco raids do Wynncraft sala a sala, com as variações de cada uma e vídeos em POV da guilda.
        </p>
      </div>

      <div className="mt-8">
        <FichaGuia
          titulo="Raids"
          tipo="Conteúdo de grupo · Endgame"
          linhas={[
            { rotulo: "Party", valor: "4 jogadores" },
            { rotulo: "Nível", valor: <span className="numeros">{Math.min(...niveis)} a {Math.max(...niveis)}, conforme a raid</span> },
            { rotulo: "Precisa de", valor: "Registro no Silverbull, a quest da raid e a runa de entrada" },
            { rotulo: "Onde", valor: "Centro de Divisão Silverbull, a leste de Cinfras" },
            { rotulo: "Raids", valor: raids.map((raid) => raid.sigla).join(" · ") },
          ]}
          rodape={<SeloVersao guia={guia} />}
        />
      </div>

      <div className="mt-8 max-w-[60ch]">
        {raidsIntroParagraphs.map((paragrafo) => (
          <p key={paragrafo} className="text-texto-2">
            {paragrafo}
          </p>
        ))}
        <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
        <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
          {raidsResumo.map((item) => (
            <li key={item}>
              <TextoComTermos texto={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
