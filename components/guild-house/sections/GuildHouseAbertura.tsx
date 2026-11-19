import Image from "next/image";
import { Trilha } from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import {
  guildHouseDestaque,
  guildHouseIntroParagraphs,
  guildHouseResumo,
  setores,
} from "@/components/guild-house/data/guild-house-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

export default function GuildHouseAbertura() {
  const medida = dimensoesDe(guildHouseDestaque.src);
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Trilha passos={[{ rotulo: "Comunidade", href: "/historia" }, { rotulo: "Guild House" }]} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="Guild House" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            A sede da GsW: o que ela oferece, como chegar e um passeio pelos setores e segredos da ilha.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="Guild House"
            tipo="Sede da guilda · Comunidade"
            linhas={[
              { rotulo: "Onde", valor: "Guild Island, pelo balão das Housing Islands" },
              { rotulo: "Ilha", valor: "Guardian of Wynn's HQ" },
              { rotulo: "Setores", valor: setores.map((setor) => setor.nome).join(" · ") },
              { rotulo: "Serviços", valor: "Banco, Trade Market, Item Identifier, Blacksmith, Bookshelf e Misc. Bucket" },
              { rotulo: "Estilo", valor: "Inspirada em Thesead" },
            ]}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {guildHouseIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {guildHouseResumo.map((item) => (
              <li key={item}>
                <TextoComTermos texto={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {medida ? (
        // Imagem de destaque da ilha: a primeira da página, carregada já (priority), sem esperar a rolagem.
        <div className="entra mt-10" style={{ "--i": 5 } as CSSProperties}>
          <ClickableImagePreview src={guildHouseDestaque.src} alt={guildHouseDestaque.alt}>
            <Image
              src={guildHouseDestaque.src}
              alt={guildHouseDestaque.alt}
              width={medida[0]}
              height={medida[1]}
              sizes={tamanhos.artigo}
              quality={90}
              priority
              className="h-auto w-full rounded-md border border-linha"
            />
          </ClickableImagePreview>
        </div>
      ) : null}
    </section>
  );
}
