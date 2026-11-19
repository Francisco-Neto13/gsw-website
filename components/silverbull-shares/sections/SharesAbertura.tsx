import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoComTermos from "@/components/guias/TextoComTermos";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { ranks, sharesIntroParagraphs, sharesResumo } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "silverbull-shares")!;

export default function SharesAbertura() {
  const precos = ranks.map((rank) => rank.shares);
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Silverbull Shares" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            O que as Shares compram, quanto custa cada rank e o que a assinatura, as crates, as bombas, os pets e os tokens
            entregam.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Silverbull Shares"
            tipo="Moeda premium · Economia"
            linhas={[
              { rotulo: "Vale", valor: <span className="numeros">US$ 1 por Share na loja do site</span> },
              { rotulo: "No jogo", valor: "Compra e venda por esmeraldas no Trade Market" },
              { rotulo: "Tipos", valor: "Tradable e Untradable" },
              { rotulo: "Ranks", valor: <span className="numeros">{Math.min(...precos)} a {Math.max(...precos)} Shares</span> },
              { rotulo: "Compra", valor: "Ranks, assinatura, crates, bombas, pets e tokens" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {sharesIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {sharesResumo.map((item) => (
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
