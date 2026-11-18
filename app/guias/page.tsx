import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoAnimado from "@/components/shared/TextoAnimado";
import { grupos, guiaHref, guiasDoGrupo } from "@/lib/site-content";

export const metadata = {
  title: "Guias",
  description: "Todos os guias de Wynncraft da GsW, em português: progressão, endgame, economia e modos especiais.",
};

export default function PaginaDosGuias() {
  return (
    <div className="casca pb-16 pt-8 lg:pt-10">
      <h1 className="text-titulo-1 text-texto">
        <TextoAnimado texto="Guias" />
      </h1>
      <p className="entra mt-3 max-w-leitura text-lede text-texto-2">
        Tudo o que a guilda já escreveu sobre o Wynncraft, por etapa do jogo. Guias marcados como em construção estão
        sendo escritos; os marcados com revisão pendente ainda não foram conferidos para a versão atual do jogo e
        podem ter dados desatualizados.
      </p>

      {/* Duas colunas de fluxo no desktop largo: os grupos se encaixam um embaixo do outro, sem vão quando um grupo
          tem menos guias, e nenhum fica perdido no fim da página. */}
      <div className="mt-10 xl:columns-2 xl:gap-x-16">
        {grupos.map((grupo) => (
          <section key={grupo.id} aria-labelledby={`grupo-${grupo.id}`} className="mb-12 break-inside-avoid">
            <h2 id={`grupo-${grupo.id}`} className="text-titulo-3 text-texto">
              {grupo.titulo}
            </h2>
            <ul className="mt-4 border-t border-linha">
              {guiasDoGrupo(grupo.id).map((guia) => (
                <li key={guia.slug} className="border-b border-linha">
                  <Link
                    href={guiaHref(guia.slug)}
                    className="group grid gap-x-6 gap-y-2 py-4 transition-[color,padding] duration-[var(--dur-hover)] ease-[var(--ease-saida)] hover:pl-2 sm:grid-cols-[12rem_1fr_auto] sm:items-center"
                  >
                    <span className="font-titulo text-titulo-4 text-texto group-hover:text-violeta">{guia.titulo}</span>
                    <span className="text-texto-2">{guia.resumo}</span>
                    <span className="flex items-center gap-3">
                      <SeloVersao guia={guia} />
                      <ArrowRight
                        aria-hidden
                        size={18}
                        strokeWidth={1.75}
                        className="hidden shrink-0 text-texto-3 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-violeta sm:block"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
