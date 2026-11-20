import { BookOpen, Gamepad2, Gem, ScrollText, Store, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Destaque from "@/components/guias/Destaque";
import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import RecursoExterno from "@/components/guias/RecursoExterno";
import TextoComTermos from "@/components/guias/TextoComTermos";
import TextoGlitch from "@/components/guias/TextoGlitch";
import { festivais, type Festival, type Imagem } from "@/components/festivals/data/festivals-content";
import { visualDoFestival } from "@/components/festivals/festivais-visual";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

/** Cena larga (paisagem) ocupa a largura do artigo; retrato de NPC e print quadrada vão para a coluna lateral. */
const ehPaisagem = (src?: string) => {
  const medida = src ? dimensoesDe(src) : null;
  return medida ? medida[0] / medida[1] >= 1.4 : false;
};

const Paragrafos =({ textos }: { textos: string[] }) => (
  <>
    {textos.map((texto) => (
      <p key={texto} className="mt-3 max-w-leitura text-texto-2 first:mt-0">
        <TextoComTermos texto={texto} />
      </p>
    ))}
  </>
);

/** Texto com a imagem ao lado (coluna de 26 rem); sem imagem medida, só o texto. */
function ComImagem({ imagem, lateral, children }: { imagem?: Imagem; lateral: boolean; children: ReactNode }) {
  if (!imagem || !dimensoesDe(imagem.src)) return <div>{children}</div>;
  const figura = <FiguraNoTamanho imagem={imagem} sizes={lateral ? tamanhos.lateral : tamanhos.artigo} />;
  return lateral ? (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
      <div>{children}</div>
      {figura}
    </div>
  ) : (
    <div>
      {children}
      <div className="mt-6">{figura}</div>
    </div>
  );
}

function Subtitulo({ Icone, rotulo, nome }: { Icone: LucideIcon; rotulo: string; nome?: string }) {
  return (
    <h3 className="mt-12 flex flex-wrap items-baseline gap-x-2.5 text-titulo-4 font-bold text-texto">
      <Icone aria-hidden size={20} strokeWidth={1.75} className="shrink-0 self-center text-[var(--festival)]" />
      {rotulo}
      {nome ? <span className="font-normal text-texto-2">{nome}</span> : null}
    </h3>
  );
}

export default function FestivalSecao({ festival }: { festival: Festival }) {
  const { Icone, estilo } = visualDoFestival[festival.id];
  const indice = festivais.findIndex((item) => item.id === festival.id);
  const anterior = festivais[(indice + festivais.length - 1) % festivais.length];
  const proximo = festivais[(indice + 1) % festivais.length];
  const { missao, minigame, recompensas } = festival;

  return (
    <section
      id={festival.id}
      aria-labelledby={`${festival.id}-titulo`}
      style={estilo}
      className="scroll-mt-12 border-t border-linha px-4 py-12 sm:px-6 lg:px-10 xl:scroll-mt-0"
    >
      <header className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-[color-mix(in_srgb,var(--festival)_45%,transparent)] bg-poco">
          <Icone aria-hidden size={24} strokeWidth={1.75} className="text-[var(--festival)]" />
        </span>
        <div>
          <h2 id={`${festival.id}-titulo`} className="text-titulo-2 text-texto">
            {festival.nome}
          </h2>
          <p className="mt-1 text-apoio text-texto-3">
            Depois do {anterior.curto}, antes do {proximo.curto} · 3 caixas {festival.caixas} grátis no início
          </p>
        </div>
      </header>

      <div className="mt-8">
        <ComImagem imagem={festival.imagemAbertura} lateral={!ehPaisagem(festival.imagemAbertura?.src)}>
          <Paragrafos textos={festival.abertura} />
          {festival.avisoAbertura ? <Destaque {...festival.avisoAbertura} className="mt-6" /> : null}
        </ComImagem>
      </div>

      <Subtitulo Icone={ScrollText} rotulo="Missão principal:" nome={missao.nome} />
      <div className="mt-4">
        <ComImagem imagem={missao.imagem} lateral>
          <Paragrafos textos={missao.paragrafos} />
          <div className="mt-4 flex max-w-leitura gap-3 rounded-md border border-linha bg-carvao px-4 py-3">
            <Gem aria-hidden size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-[var(--festival)]" />
            <p className="text-texto-2">
              <span className="font-bold text-texto">Recompensa. </span>
              <TextoComTermos texto={missao.recompensa} />
            </p>
          </div>
          {missao.extra ? <Destaque {...missao.extra} className="mt-4" /> : null}
          <div className="mt-4 max-w-leitura">
            <RecursoExterno {...missao.wiki} Icone={BookOpen} />
          </div>
        </ComImagem>
      </div>

      <Subtitulo Icone={Gamepad2} rotulo="Minigame:" nome={minigame.nome} />
      <div className="mt-4">
        <ComImagem imagem={minigame.imagem} lateral>
          <Paragrafos textos={minigame.paragrafos} />
        </ComImagem>
      </div>

      <Subtitulo Icone={Gem} rotulo="Recompensas e recomendações" />
      <div className="mt-4">
        <Paragrafos textos={recompensas.paragrafos} />
        {recompensas.recomendacoes ? (
          <ul className="mt-5 grid gap-4 sm:gap-6 lg:grid-cols-2">
            {recompensas.recomendacoes.map((item) => (
              <li key={item.nome} className="rounded-md border border-linha bg-carvao px-5 py-4">
                <p className="flex items-center gap-2.5 font-bold text-texto">
                  <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: item.cor }} />
                  {item.nome}
                </p>
                <p className="mt-2 text-texto-2">
                  <TextoComTermos texto={item.texto} />
                </p>
                {item.opiniao ? (
                  <p className="mt-3 border-t border-linha pt-3 text-apoio text-texto-2">
                    <span className="font-bold text-texto">Recomendação: </span>
                    <TextoComTermos texto={item.opiniao} />
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
        {recompensas.observacao ? (
          <Destaque className="mt-5" tipo="dica" titulo="Vale a pena?" texto={recompensas.observacao} />
        ) : null}
      </div>

      <Subtitulo Icone={Store} rotulo="Extras" />
      <div className="mt-4 flex flex-col gap-6">
        {festival.extras.map((extra) => (
          <div key={extra.titulo}>
            <h4 className="text-titulo-5 font-bold text-texto">{extra.titulo}</h4>
            <div className="mt-2">
              <Paragrafos textos={extra.paragrafos} />
            </div>
            {extra.lista ? (
              <ul aria-label={`Minigames da ${extra.titulo}`} className="mt-3 flex flex-wrap gap-2">
                {extra.lista.map((item) => (
                  <li key={item} className="rounded-[4px] border border-linha-forte bg-poco px-2.5 py-1 text-apoio text-texto">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {extra.glitch ? (
              <p className="mt-3 max-w-leitura text-texto-2">
                {extra.glitch.antes} <TextoGlitch visivel={extra.glitch.visivel} leitura={extra.glitch.leitura} />
                {"... "}
                {extra.glitch.depois}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
