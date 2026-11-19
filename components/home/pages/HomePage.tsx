import { ArrowRight, ChevronDown, Clock, Search } from "lucide-react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { members } from "@/components/history/data/members";
import BotaoBuscar from "@/components/home/sections/BotaoBuscar";
import CreditoImagem from "@/components/guias/CreditoImagem";
import { homeCategorias, homeComeco, homeComunidade, homeDestaque, homeFaixas, homeHero } from "@/components/home/data/home-content";
import { raidGuideGroups, raids } from "@/components/raids/data/raids-content";
import ImagemDoJogo from "@/components/shared/ImagemDoJogo";
import TextoAnimado from "@/components/shared/TextoAnimado";
import { previaDoGuia } from "@/lib/previas";
import { discordUrl, grupos, guiaHref, guiasDoGrupo, guiasEmOrdem } from "@/lib/site-content";

// Números do destaque saem dos próprios dados do guia, nunca escritos à mão.
const totalDeSalas = raidGuideGroups.reduce((soma, grupo) => soma + grupo.rooms.length, 0);
// Vídeos únicos: a mesma gravação usada em duas variações conta uma vez.
const totalDePovs = new Set(
  raidGuideGroups.flatMap((grupo) =>
    grupo.rooms.flatMap((sala) => sala.variants.flatMap((v) => [v.videoId, v.secondaryVideoId].filter(Boolean))),
  ),
).size;
const retratos = members.filter((membro) => membro.img).slice(0, 8);

// Partículas do palco: posições fixas (sem aleatório, o servidor e o navegador desenham igual).
const particulas = Array.from({ length: 22 }, (_, i) => {
  const passo = (i * 37) % 100;
  return {
    left: `${(passo * 0.97 + 2) % 100}%`,
    "--tam": `${2 + (i % 3) * 2}px`,
    "--dur": `${7 + ((i * 13) % 7)}s`,
    "--atraso": `-${((i * 1.7) % 9).toFixed(1)}s`,
    "--deriva": `${((i * 29) % 40) - 20}px`,
    "--brilho": `${0.35 + ((i * 7) % 5) / 10}`,
    "--cor": i % 4 === 0 ? "#f2c063" : i % 3 === 0 ? "#ff5cff" : "#c79bf2",
  } as CSSProperties;
});

export default function HomePage() {
  return (
    <div>
      {/* Abertura: palco fixo. A rolagem (--p) aproxima a ilha, escurece o véu e leva o título embora;
          o cursor (--px/--py) mexe a imagem de leve. Partículas sobem como as de encantamento do jogo. */}
      <section data-trilho data-paralaxe data-sem-revelar aria-labelledby="titulo-inicio" className="relative h-[165svh] border-b border-caixa-fora">
        <div className="sticky top-[var(--topbar-h)] isolate h-[calc(100svh-var(--topbar-h))] overflow-hidden">
          <div className="palco-imagem-entra absolute inset-0 -z-20">
            <div className="palco-imagem absolute inset-0">
              <ImagemDoJogo
                base={homeHero.imagem.base}
                alt=""
                larguras={[640, 1280, 1920]}
                largura={1920}
                altura={823}
                sizes="100vw"
                prioridade
                className="h-full w-full object-cover object-[70%_center]"
              />
            </div>
          </div>
          <div className="palco-veu absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_68%_45%,transparent_0%,rgba(15,13,17,0.55)_55%,#0f0d11_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0f0d11_0%,rgba(15,13,17,0.88)_34%,rgba(15,13,17,0.2)_72%,transparent_100%)]" />
          <div aria-hidden className="particulas pointer-events-none absolute inset-0 -z-10">
            {particulas.map((estilo, indice) => (
              <span key={indice} style={estilo} />
            ))}
          </div>

          <div className="palco-texto casca flex h-full flex-col justify-center pb-16">
            <div className="max-w-[40rem]">
              <h1 id="titulo-inicio" className="text-exibicao leading-[1.05] text-texto">
                <TextoAnimado texto={homeHero.titulo} />
              </h1>
              <p className="entra mt-6 max-w-leitura text-lede text-texto-2" style={{ "--i": 7 } as CSSProperties}>
                {homeHero.texto}
              </p>
              <div className="entra mt-8 flex flex-wrap items-center gap-3" style={{ "--i": 8 } as CSSProperties}>
                <BotaoBuscar>
                  <Search aria-hidden size={18} strokeWidth={1.75} />
                  Buscar um guia
                  <kbd className="ml-1 rounded border border-white/30 px-1.5 font-mono text-detalhe text-white/80">Ctrl K</kbd>
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

          <div
            aria-hidden
            className="entra absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-detalhe text-texto-3"
            style={{ "--i": 12 } as CSSProperties}
          >
            Role para explorar
            <ChevronDown className="dica-rolar" size={18} strokeWidth={1.75} />
          </div>
        </div>
      </section>

      {/* Fita com os guias: passa devagar e para no hover (decorativa; os links estão logo abaixo). */}
      <div aria-hidden className="fita overflow-hidden border-b border-linha py-5">
        <div className="fita-trilho">
          {[0, 1].map((copia) => (
            <div key={copia} className="flex shrink-0 items-center gap-10 pr-10">
              {guiasEmOrdem.map((guia) => (
                <span key={guia.slug} className="flex items-center gap-10">
                  <span className="font-titulo text-titulo-2 text-transparent [-webkit-text-stroke:1px_rgba(199,155,242,0.55)]">
                    {guia.titulo}
                  </span>
                  <span className="h-2 w-2 bg-gsw" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Por onde começar: uma prévia por grupo de guias, na ordem do jogo. Tópicos e tempo de leitura saem do
          conteúdo de cada guia (lib/previas.ts). */}
      <section aria-labelledby="comeco" className="casca py-16">
        <h2 id="comeco" className="text-titulo-2 text-texto">
          {homeComeco.titulo}
        </h2>
        <p className="mt-3 max-w-leitura text-texto-2">{homeComeco.texto}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {grupos.filter((grupo) => homeCategorias[grupo.id]).map((grupo) => {
            const categoria = homeCategorias[grupo.id];
            return (
              <article key={grupo.id} aria-labelledby={`categoria-${grupo.id}`} className="holofote flex flex-col overflow-hidden rounded-md border border-linha bg-carvao">
                <div className="zoom-hover relative aspect-[16/7] overflow-hidden border-b border-linha">
                  <ImagemDoJogo
                    base={categoria.imagem.base}
                    alt={categoria.imagem.alt}
                    larguras={[640, 1280]}
                    largura={1280}
                    altura={720}
                    sizes="(min-width: 1024px) 48vw, calc(100vw - 2rem)"
                    className="h-full w-full object-cover"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(25,24,25,0.95)_0%,rgba(25,24,25,0.35)_45%,transparent_75%)]" />
                  <h3 id={`categoria-${grupo.id}`} className="absolute bottom-4 left-5 font-titulo text-titulo-3 text-texto sm:left-6">
                    {grupo.titulo}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6">
                  <p className="text-texto-2">{categoria.resumo}</p>
                  <ul className="mt-4 border-t border-linha">
                    {guiasDoGrupo(grupo.id).map(previaDoGuia).map(({ guia, topicos, minutos }) => (
                      <li key={guia.slug} className="border-b border-linha last:border-b-0">
                        <Link
                          href={guiaHref(guia.slug)}
                          className="group flex items-start gap-4 py-3 transition-[padding] duration-[var(--dur-hover)] ease-[var(--ease-saida)] hover:pl-2"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2 font-titulo text-titulo-4 text-texto transition-colors duration-[var(--dur-ui)] group-hover:text-violeta">
                              {guia.titulo}
                              {guia.estado === "em-construcao" ? (
                                <span className="rounded border border-dashed border-texto-3/60 px-1.5 font-texto text-detalhe text-texto-3">
                                  em breve
                                </span>
                              ) : null}
                            </span>
                            <span className="mt-0.5 block text-apoio text-texto-3">
                              {topicos.length > 0 ? topicos.join(" · ") : guia.resumo}
                            </span>
                          </span>
                          {minutos ? (
                            <span className="mt-1.5 flex shrink-0 items-center gap-1.5 text-detalhe text-texto-3">
                              <Clock aria-hidden size={14} strokeWidth={1.75} />
                              <span>
                                <span className="numeros font-mono">{minutos}</span> min de leitura
                              </span>
                            </span>
                          ) : null}
                          <ArrowRight aria-hidden size={16} strokeWidth={1.75} className="mt-1.5 shrink-0 text-texto-3 group-hover:text-violeta" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Grupos sem arte de categoria (Ferramentas): faixa compacta abaixo da grade, sem card sozinho na última linha. */}
        {grupos
          .filter((grupo) => !homeCategorias[grupo.id] && homeFaixas[grupo.id])
          .map((grupo) => {
            const faixa = homeFaixas[grupo.id];
            return (
            <div
              key={grupo.id}
              className="holofote mt-6 flex flex-col overflow-hidden rounded-md border border-linha bg-carvao sm:flex-row sm:items-center"
            >
              <div className="zoom-hover relative aspect-[1200/630] w-full shrink-0 overflow-hidden border-b border-linha bg-poco sm:w-56 sm:border-b-0 sm:border-r">
                <Image
                  src={faixa.imagem.src}
                  alt={faixa.imagem.alt}
                  fill
                  sizes="(min-width: 640px) 14rem, calc(100vw - 2rem)"
                  className="object-cover object-left-top"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <h3 className="font-titulo text-titulo-4 text-texto">{grupo.titulo}</h3>
                  <p className="mt-0.5 text-apoio text-texto-3">{faixa.texto}</p>
                  <p className="mt-1">
                    <CreditoImagem src={faixa.imagem.src} rotulo="Prévia:" />
                  </p>
                </div>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {guiasDoGrupo(grupo.id).map((guia) => (
                    <li key={guia.slug}>
                      <Link
                        href={guiaHref(guia.slug)}
                        className="group inline-flex items-center gap-1.5 font-titulo text-titulo-4 text-texto hover:text-violeta"
                      >
                        {guia.titulo}
                        <ArrowRight aria-hidden size={16} strokeWidth={1.75} className="text-texto-3 group-hover:text-violeta" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            );
          })}
      </section>

      {/* Guia em destaque: painel carvão (a caixa de item fica só para informação de consulta). */}
      <section aria-labelledby="destaque" className="casca pb-16">
        <div data-revelar-item className="feixe holofote grid overflow-hidden rounded-md border border-linha bg-carvao lg:grid-cols-[1fr_1.1fr]">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <h2 id="destaque" className="text-titulo-2 text-texto">
              {homeDestaque.titulo}
            </h2>
            <p className="mt-4 max-w-leitura text-texto-2">{homeDestaque.texto}</p>
            <p className="mt-4 max-w-leitura text-texto-2">
              São <span data-contar={raids.length} className="numeros font-mono text-texto">{raids.length}</span> raids,{" "}
              <span data-contar={totalDeSalas} className="numeros font-mono text-texto">{totalDeSalas}</span> salas e{" "}
              <span data-contar={totalDePovs} className="numeros font-mono text-texto">{totalDePovs}</span> POVs gravados pela guilda.
            </p>
            <Link
              href={guiaHref("raids")}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-gsw px-4 font-medium text-white hover:bg-[#7f1bc2]"
            >
              {homeDestaque.acao}
              <ArrowRight aria-hidden size={16} strokeWidth={1.75} />
            </Link>
          </div>
          <div className="zoom-hover relative min-h-60">
            <ImagemDoJogo
              base={homeDestaque.imagem.base}
              alt={homeDestaque.imagem.alt}
              larguras={[640, 1280, 1920]}
              largura={1920}
              altura={1080}
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
              <h2 id="comunidade" className="text-titulo-2 text-texto">
                {homeComunidade.titulo}
              </h2>
              <p className="mt-3 max-w-leitura text-texto-2">{homeComunidade.texto}</p>
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
            <Image quality={90}
              src="/bg-guilda.webp"
              alt="Arte da guilda: membros da GsW reunidos numa mesa redonda sob vitrais roxos"
              width={1824}
              height={866}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="h-auto w-full rounded-md border border-linha"
            />
            <ul className="grid grid-cols-4 gap-3 sm:gap-4" aria-label="Alguns membros da guilda">
              {retratos.map((membro) => (
                <li key={membro.name} data-inclinar>
                  <Image quality={90}
                    src={membro.img!}
                    alt=""
                    width={160}
                    height={160}
                    sizes="(min-width: 1024px) 9vw, 22vw"
                    className="aspect-square w-full rounded-md border border-linha object-cover"
                  />
                  <span className="mt-1.5 block truncate text-apoio text-texto">{membro.name}</span>
                  <span className="block truncate text-detalhe text-texto-3">{membro.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
