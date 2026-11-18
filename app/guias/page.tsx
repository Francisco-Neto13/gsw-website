import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SeloVersao from "@/components/guias/SeloVersao";
import { grupos, guiaHref, guiasDoGrupo } from "@/lib/site-content";

export const metadata = {
  title: "Guias",
  description: "Todos os guias de Wynncraft da GsW, em português: progressão, endgame, economia e modos especiais.",
};

export default function PaginaDosGuias() {
  return (
    <div className="mx-auto max-w-[64rem] px-4 pb-16 pt-10 sm:px-6">
      <h1 className="text-[clamp(2rem,4vw,2.75rem)] text-texto">Guias</h1>
      <p className="mt-3 max-w-[60ch] text-lg text-texto-2">
        Tudo o que a guilda já escreveu sobre o Wynncraft, por etapa do jogo. Guias marcados como em construção estão
        sendo escritos; os marcados com revisão pendente ainda não foram conferidos para a versão atual do jogo e
        podem ter dados desatualizados.
      </p>

      <div className="mt-10 flex flex-col gap-12">
        {grupos.map((grupo) => (
          <section key={grupo.id} aria-labelledby={`grupo-${grupo.id}`}>
            <h2 id={`grupo-${grupo.id}`} className="text-[clamp(1.4rem,2.2vw,1.75rem)] text-texto">
              {grupo.titulo}
            </h2>
            <ul className="mt-4 border-t border-linha">
              {guiasDoGrupo(grupo.id).map((guia) => (
                <li key={guia.slug} className="border-b border-linha">
                  <Link
                    href={guiaHref(guia.slug)}
                    className="group grid gap-x-6 gap-y-2 py-4 transition-colors duration-150 sm:grid-cols-[12rem_1fr_auto] sm:items-center"
                  >
                    <span className="font-titulo text-xl text-texto group-hover:text-violeta">{guia.titulo}</span>
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
