import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import Figura from "@/components/guias/Figura";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { festivais, festivaisIntroParagraphs, imagemPromocional } from "@/components/festivals/data/festivals-content";
import { dimensoesDe } from "@/lib/imagens";
import { guias } from "@/lib/site-content";
import { tamanhos } from "@/lib/tamanhos";

const guia = guias.find((item) => item.slug === "festivais")!;

export default function FestivaisAbertura() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Festivais" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            Os quatro eventos sazonais do ano: missões, minigames, recompensas e o que vale a pena comprar em cada um.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Festivais"
            tipo="Evento sazonal · Especiais"
            linhas={[
              { rotulo: "Por ano", valor: "4, sempre na mesma ordem" },
              { rotulo: "Ordem", valor: festivais.map((festival) => festival.curto).join(" → ") },
              { rotulo: "Duração", valor: "Cerca de 3 a 4 semanas" },
              { rotulo: "Onde", valor: "Detlas, o centro de todos os festivais" },
              { rotulo: "Caixas", valor: "3 grátis no início; até 30 nos objetivos (o dobro com Silverbull)" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {festivaisIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
        </div>
      </div>

      {/* A imagem promocional só entra com arquivo próprio medido (lib/dimensoes-imagens.json). */}
      {dimensoesDe(imagemPromocional.src) ? (
        <Figura
          src={imagemPromocional.src}
          alt={imagemPromocional.alt}
          legenda={imagemPromocional.legenda}
          sizes={tamanhos.artigo}
          proporcao="2 / 1"
          className="mt-10"
        />
      ) : null}
    </section>
  );
}
