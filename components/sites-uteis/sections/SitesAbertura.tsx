import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { categorias, curadoria, sites, sitesIntroParagraphs } from "@/components/sites-uteis/data/sites-uteis-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "sites-uteis")!;

export default function SitesAbertura() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Sites úteis" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            As ferramentas da comunidade para builds, mercado, dados e crafting, cada uma com o que tem e para que serve.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Sites úteis"
            tipo="Ferramentas da comunidade"
            linhas={[
              { rotulo: "Sites", valor: <span className="numeros">{sites.length}</span> },
              { rotulo: "Categorias", valor: categorias.map((categoria) => categoria.nome).join(" · ") },
              { rotulo: "Curadoria", valor: "FurionSpeed (Labubu)" },
              { rotulo: "Vínculo", valor: "Nenhum: os sites são dos seus criadores" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {sitesIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <p className="mt-3 text-apoio text-texto-3">{curadoria}</p>
        </div>
      </div>
    </section>
  );
}
