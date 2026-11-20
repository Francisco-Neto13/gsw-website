import { Clapperboard, MapPin, Skull } from "lucide-react";
import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import {
  raidGuideGroups,
  raidGuidesLabels,
  raids,
  type RaidGuideGroup,
  type RaidGuideRoom,
  type RaidGuideVariant,
} from "@/components/raids/data/raids-content";
import { tamanhoDe } from "@/components/raids/data/raids-midia";
import ImagemDoJogo from "@/components/shared/ImagemDoJogo";
import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";
import { tamanhos } from "@/lib/tamanhos";

function Variacao({ sala, variacao, rotulo }: { sala: string; variacao: RaidGuideVariant; rotulo: string }) {
  return (
    <div className="grid gap-4 rounded-md border border-linha bg-carvao p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-6">
      <div className="flex flex-col gap-4">
      <div>
        <h5 className="text-titulo-5 font-bold text-texto">
          {variacao.name}
          <span className="ml-2 text-apoio font-normal text-texto-3">· {rotulo}</span>
        </h5>
        <p className="mt-2 text-texto-2">
          <TextoComTermos texto={variacao.summary} />
        </p>
      </div>
      <ul className="flex list-disc flex-col gap-1.5 pl-5 text-apoio text-texto-2 marker:text-violeta">
        {variacao.points.map((ponto) => (
          <li key={ponto}>
            <TextoComTermos texto={ponto} />
          </li>
        ))}
      </ul>
      </div>
      <div className="flex flex-col gap-3">
        {variacao.videoId ? (
          <LazyYouTubeEmbed videoId={variacao.videoId} title={`${sala}: ${variacao.name} (POV da GsW)`} />
        ) : (
          <p className="flex items-center gap-2 rounded-md border border-dashed border-linha-forte px-4 py-6 text-texto-3">
            <Clapperboard aria-hidden size={18} strokeWidth={1.75} />
            {variacao.videoPlaceholder ?? "Vídeo desta versão ainda em produção."}
          </p>
        )}
        {variacao.secondaryVideoId ? (
          <div>
            <p className="mb-2 text-apoio text-texto-3">{variacao.secondaryLabel ?? raidGuidesLabels.extraVideo}</p>
            <LazyYouTubeEmbed
              videoId={variacao.secondaryVideoId}
              title={`${sala}: ${variacao.secondaryLabel ?? raidGuidesLabels.extraVideo}`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Sala({ sala, numero, raid }: { sala: RaidGuideRoom; numero: number; raid: string }) {
  const rotulo = sala.cardLabel === "POV" ? "POV" : raidGuidesLabels.variant;
  return (
    <li className="relative flex gap-4 pb-10 last:pb-0">
      <span aria-hidden className="absolute left-[1.0625rem] top-10 h-[calc(100%-2.5rem)] w-px bg-linha-forte" />
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gsw font-mono font-medium text-white"
      >
        {numero}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <h4 className="text-titulo-4 font-bold text-texto">
          <span className="sr-only">{raid}, </span>
          {sala.room}: {sala.title}
        </h4>
        <p className="mt-2 max-w-leitura text-texto-2">
          <TextoComTermos texto={sala.description} />
        </p>
        <div className="mt-5 grid gap-4">
          {sala.variants.map((variacao, indice) => (
            <Variacao
              key={variacao.name}
              sala={`${raid} ${sala.room}`}
              variacao={variacao}
              rotulo={sala.variants.length > 1 ? `${rotulo} ${indice + 1} de ${sala.variants.length}` : rotulo}
            />
          ))}
        </div>
      </div>
    </li>
  );
}

function BlocoDaRaid({ grupo }: { grupo: RaidGuideGroup }) {
  const raid = raids.find((item) => item.id === grupo.id)!;
  return (
    <article id={raid.id} aria-labelledby={`${raid.id}-titulo`} className="scroll-mt-12 xl:scroll-mt-0 pt-12 first:pt-0">
      <header className="">
        <h3 id={`${raid.id}-titulo`} className="font-titulo text-titulo-3 leading-tight text-texto">
          {raid.name} <span className="text-texto-3">({raid.sigla})</span>
        </h3>
        <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-apoio text-texto-2">
          <div className="flex gap-1.5">
            <dt className="text-texto-3">Nível</dt>
            <dd className="numeros font-mono text-texto">{raid.level}+</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="text-texto-3">Runa</dt>
            <dd className="text-texto">{raid.rune}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt>
              <Skull aria-hidden size={15} strokeWidth={1.75} className="text-texto-3" />
              <span className="sr-only">Boss</span>
            </dt>
            <dd className="text-texto">{raid.boss}</dd>
          </div>
          {raid.location ? (
            <div className="flex items-center gap-1.5">
              <dt>
                <MapPin aria-hidden size={15} strokeWidth={1.75} className="text-texto-3" />
                <span className="sr-only">Entrada</span>
              </dt>
              <dd className="numeros font-mono text-texto">{raid.location}</dd>
            </div>
          ) : null}
        </dl>
        <p className="mt-3 max-w-leitura text-texto-2">{grupo.description}</p>
      </header>

      <div className="mt-6">
        {grupo.print ? (
          <figure>
            <ImagemDoJogo
              base={grupo.print.base}
              alt={grupo.print.alt}
              larguras={[640, 1280]}
              largura={1280}
              altura={720}
              sizes={tamanhos.artigo}
              className="h-auto w-full rounded-md border border-linha"
            />
            <figcaption className="mt-2 text-apoio text-texto-3">{grupo.print.legenda}</figcaption>
          </figure>
        ) : (
          <Figura
            src={raid.image}
            alt={`Entrada da raid ${raid.name}`}
            sizes={tamanhos.artigo}
            {...tamanhoDe(raid.image)}
          />
        )}
      </div>

      <ol className="mt-10">
        {grupo.rooms.map((sala, indice) => (
          <Sala key={sala.room} sala={sala} numero={indice + 1} raid={raid.sigla} />
        ))}
      </ol>
    </article>
  );
}

export default function RaidsGuiaPorRaid() {
  return (
    <SecaoGuia
      id="guia-por-raid"
      titulo="Guia sala a sala"
      introducao="Cada raid em ordem de nível. As salas aparecem na ordem da run; quando uma sala tem mais de uma versão, o jogo sorteia qual vai cair. Os vídeos são POVs gravados pela guilda."
    >
      <div className="divide-y divide-linha">
        {raidGuideGroups.map((grupo) => (
          <BlocoDaRaid key={grupo.id} grupo={grupo} />
        ))}
      </div>
    </SecaoGuia>
  );
}
