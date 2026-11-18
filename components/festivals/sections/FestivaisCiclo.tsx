import { ChevronRight, Repeat } from "lucide-react";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { festivais, festivaisCicloIntro } from "@/components/festivals/data/festivals-content";
import { visualDoFestival } from "@/components/festivals/festivais-visual";

/** O ano em quatro festivais: uma linha do tempo que volta ao começo (Blizzard → Heroes). */
export default function FestivaisCiclo() {
  return (
    <SecaoGuia id="ciclo" titulo="Ordem dos festivais" introducao={festivaisCicloIntro}>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {festivais.map((festival, indice) => {
          const { Icone, estilo } = visualDoFestival[festival.id];
          return (
            <li key={festival.id} style={estilo} className="relative flex lg:pr-6">
              <a
                href={`#${festival.id}`}
                className="group flex flex-1 items-center gap-3 rounded-md border border-linha bg-carvao px-4 py-3 transition-colors hover:border-[var(--festival)] hover:bg-elevada"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[color-mix(in_srgb,var(--festival)_45%,transparent)] bg-poco">
                  <Icone aria-hidden size={20} strokeWidth={1.75} className="text-[var(--festival)]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-detalhe text-texto-3">{indice + 1}º do ano</span>
                  <span className="block font-titulo text-titulo-5 leading-tight text-texto">{festival.curto}</span>
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
      <p className="mt-4 flex max-w-leitura items-center gap-2 text-apoio text-texto-3">
        <Repeat aria-hidden size={16} strokeWidth={1.75} />
        Depois do Blizzard, o ciclo recomeça pelo Heroes.
      </p>
    </SecaoGuia>
  );
}
