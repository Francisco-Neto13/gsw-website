import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { specialModes, specialModesIntroParagraphs } from "@/components/special-modes/data/special-modes-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "modos-especiais")!;

export default function ModosAbertura() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Modos especiais" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            Hardcore, Ironman, Craftsman e Hunted: o que cada modo muda, como liberar e as combinações mais difíceis.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Modos especiais"
            tipo="Regras de personagem · Especiais"
            linhas={[
              { rotulo: "Modos", valor: [...specialModes.map((modo) => modo.nome), "Ultimate Ironman"].join(" · ") },
              { rotulo: "Quando", valor: "Na criação do personagem" },
              { rotulo: "Liberação", valor: <span className="numeros">Nível 30 ou 50, ou uma quest de nível 103</span> },
              { rotulo: "Vale para", valor: "Só aquele personagem" },
              { rotulo: "Desfazer", valor: "Não dá, exceto o Ironman (/ironman)" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {specialModesIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
