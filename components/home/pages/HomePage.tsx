import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { members } from "@/components/history/data/members";
import BotaoBuscar from "@/components/home/sections/BotaoBuscar";
import { homeComeco, homeComunidade, homeDestaque, homeHero } from "@/components/home/data/home-content";
import { raidGuideGroups, raids } from "@/components/raids/data/raids-content";
import ImagemDoJogo from "@/components/shared/ImagemDoJogo";
import { discordUrl, grupos, guiaHref, guiasDoGrupo } from "@/lib/site-content";

// Números do destaque saem dos próprios dados do guia, nunca escritos à mão.
const totalDeSalas = raidGuideGroups.reduce((soma, grupo) => soma + grupo.rooms.length, 0);
// Vídeos únicos: a mesma gravação usada em duas variações conta uma vez.
const totalDePovs = new Set(
  raidGuideGroups.flatMap((grupo) =>
    grupo.rooms.flatMap((sala) => sala.variants.flatMap((v) => [v.videoId, v.secondaryVideoId].filter(Boolean))),
  ),
).size;
const retratos = members.filter((membro) => membro.img).slice(0, 8);

export default function HomePage() {
  return (
    <div>
      {/* Abertura: a frase do guia e a busca, sobre uma print da guilda. */}
      <section className="relative isolate overflow-hidden border-b border-caixa-fora">
        <div className="absolute inset-0 -z-10">
          <ImagemDoJogo
            base={homeHero.imagem.base}
            alt=""
            larguras={[640, 1920]}
            largura={1920}
            altura={823}
            sizes="100vw"
            prioridade
            className="h-full w-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0f0d11_0%,rgba(15,13,17,0.92)_38%,rgba(15,13,17,0.35)_75%,rgba(15,13,17,0.15)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,#0f0d11,transparent)]" />
        </div>
        <div className="casca pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-32">
          <div className="max-w-[36rem]">
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-texto">{homeHero.titulo}</h1>
            <p className="mt-5 text-lg text-texto-2">{homeHero.texto}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BotaoBuscar>
                <Search aria-hidden size={18} strokeWidth={1.75} />
                Buscar um guia
                <kbd className="ml-1 rounded border border-white/30 px-1.5 font-mono text-[0.75rem] text-white/80">Ctrl K</kbd>
              </BotaoBuscar>
              <Link
                href="/guias"
                className="flex h-11 items-center gap-2 rounded-md border border-linha-forte px-4 text-texto hover:border-violeta-borda"
              >
                Ver todos os guias
                <ArrowRight aria-hidden size={16} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por onde começar: os grupos de guias, na ordem do jogo. */}
      <section aria-labelledby="comeco" className="casca py-16">
        <h2 id="comeco" className="text-[clamp(1.6rem,2.6vw,2.1rem)] text-texto">
          {homeComeco.titulo}
        </h2>
        <p className="mt-3 max-w-[60ch] text-texto-2">{homeComeco.texto}</p>
        <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {grupos.map((grupo) => (
            <div key={grupo.id}>
              <h3 className="border-b border-linha pb-2 font-bold text-texto-3">{grupo.titulo}</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {guiasDoGrupo(grupo.id).map((guia) => (
                  <li key={guia.slug}>
                    <Link href={guiaHref(guia.slug)} className="group block">
                      <span className="flex items-center gap-2 font-titulo text-xl text-texto group-hover:text-violeta">
                        {guia.titulo}
                        {guia.estado === "em-construcao" ? (
                          <span className="rounded border border-dashed border-texto-3/60 px-1.5 font-texto text-[0.75rem] text-texto-3">
                            em breve
                          </span>
                        ) : null}
                      </span>
                      <span className="block text-[0.95rem] text-texto-2">{guia.resumo}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Guia em destaque: painel carvão (a caixa de item fica só para informação de consulta). */}
      <section aria-labelledby="destaque" className="casca pb-16">
        <div className="grid overflow-hidden rounded-md border border-linha bg-carvao lg:grid-cols-[1fr_1.1fr]">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <h2 id="destaque" className="text-[clamp(1.5rem,2.4vw,2rem)] text-texto">
              {homeDestaque.titulo}
            </h2>
            <p className="mt-4 max-w-[52ch] text-texto-2">{homeDestaque.texto}</p>
            <p className="mt-4 max-w-[52ch] text-texto-2">
              São <span className="numeros font-mono text-texto">{raids.length}</span> raids,{" "}
              <span className="numeros font-mono text-texto">{totalDeSalas}</span> salas e{" "}
              <span className="numeros font-mono text-texto">{totalDePovs}</span> POVs gravados pela guilda.
            </p>
            <Link
              href={guiaHref("raids")}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-gsw px-4 font-medium text-white hover:bg-[#7f1bc2]"
            >
              {homeDestaque.acao}
              <ArrowRight aria-hidden size={16} strokeWidth={1.75} />
            </Link>
          </div>
          <div className="relative min-h-60">
            <ImagemDoJogo
              base={homeDestaque.imagem.base}
              alt={homeDestaque.imagem.alt}
              larguras={[640, 1280]}
              largura={1280}
              altura={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Comunidade: a guilda por trás do guia. */}
      <section aria-labelledby="comunidade" className="border-t border-linha bg-carvao">
        <div className="casca py-16">
          {/* Cabeçalho numa faixa (texto à esquerda, ações à direita); embaixo, a arte e os retratos com alturas parecidas. */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 id="comunidade" className="text-[clamp(1.6rem,2.6vw,2.1rem)] text-texto">
                {homeComunidade.titulo}
              </h2>
              <p className="mt-3 max-w-[56ch] text-texto-2">{homeComunidade.texto}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/historia"
                className="flex h-11 items-center gap-2 rounded-md border border-linha-forte px-4 text-texto hover:border-violeta-borda"
              >
                {homeComunidade.acaoHistoria}
                <ArrowRight aria-hidden size={16} strokeWidth={1.75} />
              </Link>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center rounded-md bg-gsw px-4 font-medium text-white hover:bg-[#7f1bc2]"
              >
                {homeComunidade.acaoDiscord}
              </a>
            </div>
          </div>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <Image
              src="/bg-guilda.webp"
              alt="Arte da guilda: membros da GsW reunidos numa mesa redonda sob vitrais roxos"
              width={1824}
              height={866}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="h-auto w-full rounded-md border border-linha"
            />
            <ul className="grid grid-cols-4 gap-3 sm:gap-4" aria-label="Alguns membros da guilda">
              {retratos.map((membro) => (
                <li key={membro.name}>
                  <Image
                    src={membro.img!}
                    alt=""
                    width={160}
                    height={160}
                    sizes="(min-width: 1024px) 9vw, 22vw"
                    className="aspect-square w-full rounded-md border border-linha object-cover"
                  />
                  <span className="mt-1.5 block truncate text-[0.9rem] text-texto">{membro.name}</span>
                  <span className="block truncate text-[0.8rem] text-texto-3">{membro.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
