import { CircleCheck, KeyRound } from "lucide-react";
import type { CSSProperties } from "react";
import Destaque from "@/components/guias/Destaque";
import Galeria from "@/components/guias/Galeria";
import TextoComTermos from "@/components/guias/TextoComTermos";
import type { SpecialMode } from "@/components/special-modes/data/special-modes-content";
import { dimensoesDe } from "@/lib/imagens";

/** Ícone pixelado do modo (SVG 8x8 próprio), num quadrado com a cor do modo na borda. */
function IconeDoModo({ src, cor, tamanho }: { src: string; cor: string; tamanho: "grande" | "pequeno" }) {
  const lado = tamanho === "grande" ? "h-12 w-12" : "h-9 w-9";
  return (
    <span
      className={`grid ${lado} shrink-0 place-items-center rounded-md border bg-poco`}
      style={{ borderColor: `color-mix(in srgb, ${cor} 50%, transparent)` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ícone SVG pixelado de 8x8 */}
      <img src={src} alt="" width={tamanho === "grande" ? 28 : 20} height={tamanho === "grande" ? 28 : 20} className="[image-rendering:pixelated]" />
    </span>
  );
}

export default function ModoSecao({ modo }: { modo: SpecialMode }) {
  const imagens = (modo.imagens ?? []).filter((imagem) => dimensoesDe(imagem.src));
  return (
    <section
      id={modo.id}
      aria-labelledby={`${modo.id}-titulo`}
      style={{ "--modo": modo.cor } as CSSProperties}
      className="scroll-mt-12 border-t border-linha px-4 py-12 sm:px-6 lg:px-10 xl:scroll-mt-0"
    >
      <header className="flex items-start gap-4">
        <IconeDoModo src={modo.icone} cor={modo.cor} tamanho="grande" />
        <div>
          <h2 id={`${modo.id}-titulo`} className="text-titulo-2 text-texto">
            {modo.nome}
          </h2>
          <p className="mt-1 text-texto-2">{modo.resumo}</p>
        </div>
      </header>

      <p className="mt-6 flex max-w-leitura items-start gap-2.5 rounded-md border border-linha bg-carvao px-4 py-3 text-texto-2">
        <KeyRound aria-hidden size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-violeta" />
        <span>
          <span className="font-bold text-texto">Como liberar: </span>
          {modo.desbloqueio}
        </span>
      </p>

      <h3 className="mt-8 text-titulo-4 font-bold text-texto">Regras</h3>
      <ul className="mt-3 flex max-w-leitura flex-col gap-2 text-texto-2">
        {modo.regras.map((regra) => (
          <li key={regra} className="flex gap-2.5">
            <CircleCheck aria-hidden size={16} strokeWidth={1.75} className="mt-1.5 shrink-0" style={{ color: modo.cor }} />
            <span>
              <TextoComTermos texto={regra} />
            </span>
          </li>
        ))}
      </ul>

      {modo.excecoes ? (
        <div className="mt-6 max-w-leitura rounded-md border border-linha bg-carvao px-5 py-4">
          <p className="font-bold text-texto">{modo.excecoes.titulo}</p>
          <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {modo.excecoes.itens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {modo.destaque ? <Destaque {...modo.destaque} className="mt-6" /> : null}

      {modo.dicas ? (
        <div className="mt-6 flex flex-col gap-3">
          {modo.dicas.map((dica) => (
            <Destaque key={dica} tipo="dica" titulo="Dica" texto={dica} />
          ))}
        </div>
      ) : null}

      {modo.variante ? (
        <div className="mt-8 max-w-leitura rounded-md border border-linha bg-carvao px-5 py-4">
          <p className="flex items-center gap-3">
            <IconeDoModo src={modo.variante.icone} cor={modo.variante.cor} tamanho="pequeno" />
            <span className="text-titulo-4 font-bold text-texto">{modo.variante.nome}</span>
          </p>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {modo.variante.texto.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {imagens.length > 0 ? (
        // Prints quadradas de ~820 px: grade estreita para o quadro não passar do tamanho da imagem.
        <Galeria className="mt-8 lg:max-w-[48rem]" proporcao="1 / 1" itens={imagens} />
      ) : null}
    </section>
  );
}
