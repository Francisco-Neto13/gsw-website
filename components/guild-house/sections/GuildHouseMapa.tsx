import { Compass } from "lucide-react";
import Image from "next/image";
import SecaoGuia from "@/components/guias/SecaoGuia";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { mapaImagem, mapaIntro, setores } from "@/components/guild-house/data/guild-house-content";
import { dimensoesDe } from "@/lib/imagens";

/**
 * Mapa interativo: a vista de cima da ilha com um marcador clicável em cada setor (sobre o número já desenhado
 * na imagem), e ao lado a legenda com os mesmos links. Sem o mapa medido, fica só a legenda.
 */
export default function GuildHouseMapa() {
  const medida = dimensoesDe(mapaImagem.src);
  return (
    <SecaoGuia id="mapa" titulo="Mapa da ilha" introducao={mapaIntro}>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]">
        {medida ? (
          <figure>
            <div className="relative" style={{ aspectRatio: `${medida[0]} / ${medida[1]}` }}>
              <ClickableImagePreview src={mapaImagem.src} alt={mapaImagem.alt}>
                <Image
                  src={mapaImagem.src}
                  alt={mapaImagem.alt}
                  fill
                  sizes="(min-width: 1024px) 34rem, calc(100vw - 2rem)"
                  quality={90}
                  className="rounded-md border border-linha object-cover"
                />
              </ClickableImagePreview>
              {setores.map((setor) => (
                <a
                  key={setor.id}
                  href={`#${setor.id}`}
                  aria-label={`${setor.numero}. ${setor.nome}`}
                  title={setor.nome}
                  style={{ left: `${setor.posicao.x}%`, top: `${setor.posicao.y}%` }}
                  className="group absolute flex -translate-x-1/2 -translate-y-1/2 items-center"
                >
                  <span className="numeros grid h-9 w-9 place-items-center rounded-full border-2 border-texto bg-gsw font-mono text-base font-bold text-white shadow-[0_0_0_4px_rgba(0,0,0,0.35)] transition-transform duration-150 group-hover:scale-110 group-focus-visible:scale-110">
                    {setor.numero}
                  </span>
                  <span className="pointer-events-none absolute left-11 hidden whitespace-nowrap rounded border border-linha bg-carvao px-2 py-0.5 text-apoio text-texto group-hover:block group-focus-visible:block">
                    {setor.nome}
                  </span>
                </a>
              ))}
            </div>
            <figcaption className="mt-2 text-apoio text-texto-3">{mapaImagem.legenda} Clique na imagem para ampliar.</figcaption>
          </figure>
        ) : null}

        <ol className="flex flex-col gap-3">
          {setores.map((setor) => (
            <li key={setor.id}>
              <a
                href={`#${setor.id}`}
                className="group flex items-start gap-3 rounded-md border border-linha bg-carvao px-4 py-3 transition-colors hover:border-violeta-borda"
              >
                <span className="numeros grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gsw font-mono text-apoio font-bold text-white">
                  {setor.numero}
                </span>
                <span>
                  <span className="block font-bold text-texto group-hover:text-violeta">{setor.nome}</span>
                  <span className="block text-apoio text-texto-3">{setor.resumo}</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#outros"
              className="group flex items-center gap-3 rounded-md border border-dashed border-linha px-4 py-3 transition-colors hover:border-violeta-borda"
            >
              <Compass aria-hidden size={20} strokeWidth={1.75} className="shrink-0 text-violeta" />
              <span className="font-bold text-texto group-hover:text-violeta">Outros pontos de interesse</span>
            </a>
          </li>
        </ol>
      </div>
    </SecaoGuia>
  );
}
