import { ChevronRight, Repeat } from "lucide-react";
import SecaoGuia from "@/components/guias/SecaoGuia";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";
import { festivais, festivaisCicloIntro } from "@/components/festivals/data/festivals-content";
import { logoDoFestival, visualDoFestival } from "@/components/festivals/festivais-visual";
import { creditoDe, dimensoesDe } from "@/lib/imagens";

const TAMANHO_DO_LOGO = "(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw";

/** O ano em quatro festivais: uma linha do tempo que volta ao começo (Blizzard → Heroes). */
export default function FestivaisCiclo() {
  const temLogo = festivais.some((festival) => dimensoesDe(logoDoFestival(festival.id)));
  return (
    <SecaoGuia id="ciclo" titulo="Ordem dos festivais" introducao={festivaisCicloIntro}>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {festivais.map((festival, indice) => {
          const { Icone, estilo } = visualDoFestival[festival.id];
          const logo = logoDoFestival(festival.id);
          return (
            <li key={festival.id} style={estilo} className="relative flex lg:pr-6">
              <a
                href={`#${festival.id}`}
                className="group flex flex-1 flex-col overflow-hidden rounded-md border border-linha bg-carvao transition-colors hover:border-[var(--festival)] hover:bg-elevada"
              >
                {dimensoesDe(logo) ? (
                  <span className="relative block aspect-[2/1] border-b border-linha bg-poco">
                    <span className="absolute inset-3">
                      <ImagemNoQuadro src={logo} alt={`Logo do ${festival.nome}`} sizes={TAMANHO_DO_LOGO} />
                    </span>
                  </span>
                ) : null}
                <span className="flex items-center gap-3 px-4 py-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[color-mix(in_srgb,var(--festival)_45%,transparent)] bg-poco">
                    <Icone aria-hidden size={20} strokeWidth={1.75} className="text-[var(--festival)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-detalhe text-texto-3">{indice + 1}º do ano</span>
                    <span className="block font-titulo text-titulo-5 leading-tight text-texto">{festival.curto}</span>
                  </span>
                </span>
              </a>
              {indice < festivais.length - 1 ? (
                <ChevronRight
                  aria-hidden
                  size={18}
                  strokeWidth={1.75}
                  className="absolute right-0.5 top-1/2 hidden -translate-y-1/2 text-texto-3 lg:block"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className="mt-4 flex max-w-leitura flex-wrap items-center gap-x-2 text-apoio text-texto-3">
        <Repeat aria-hidden size={16} strokeWidth={1.75} />
        Depois do Blizzard, o ciclo recomeça pelo Heroes.
        {temLogo ? <span className="text-detalhe">Logos dos festivais {creditoDe(logoDoFestival("heroes"))}.</span> : null}
      </p>
    </SecaoGuia>
  );
}
