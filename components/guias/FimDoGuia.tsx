import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { guiaHref, guiasEmOrdem } from "@/lib/site-content";

type FimDoGuiaProps = {
  slug: string;
  fontes: { rotulo: string; href: string }[];
  /** Texto acima da lista; o padrão fala das regras do jogo conferidas nas fontes. */
  introducao?: string;
};

/** Fontes consultadas + anterior/próximo na ordem da sidebar. */
export default function FimDoGuia({ slug, fontes, introducao }: FimDoGuiaProps) {
  const indice = guiasEmOrdem.findIndex((guia) => guia.slug === slug);
  const anterior = indice > 0 ? guiasEmOrdem[indice - 1] : undefined;
  const proximo = indice >= 0 && indice < guiasEmOrdem.length - 1 ? guiasEmOrdem[indice + 1] : undefined;

  return (
    <>
      <section id="fontes" className="scroll-mt-12 xl:scroll-mt-0 px-4 py-12 sm:px-6 lg:px-10">
        <div className="max-w-leitura">
          <h2 className="text-titulo-2 text-texto">Fontes</h2>
          <p className="mt-3 text-texto-2">
            {introducao ??
              "Texto escrito pela GsW. Números e regras do jogo conferidos nas fontes abaixo; se algo mudou num patch, avise a guilda no Discord."}
          </p>
          {fontes.length > 0 ? (
            <ul className="mt-4 flex flex-col gap-2">
              {fontes.map((fonte) => (
                <li key={fonte.href}>
                  <a
                    href={fonte.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-violeta underline decoration-violeta/40 hover:decoration-violeta"
                  >
                    {fonte.rotulo}
                    <ExternalLink aria-hidden size={14} strokeWidth={1.75} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {anterior || proximo ? (
        <nav aria-label="Outros guias" className="grid gap-3 border-t border-linha px-4 py-8 sm:grid-cols-2 sm:px-6 lg:px-10">
          {anterior ? (
            <Link
              href={guiaHref(anterior.slug)}
              className="group flex flex-col rounded-md border border-linha px-4 py-3 hover:border-violeta-borda"
            >
              <span className="flex items-center gap-1.5 text-apoio text-texto-3">
                <ArrowLeft aria-hidden size={14} strokeWidth={1.75} /> Guia anterior
              </span>
              <span className="mt-1 font-titulo text-titulo-4 text-texto">{anterior.titulo}</span>
            </Link>
          ) : (
            <span />
          )}
          {proximo ? (
            <Link
              href={guiaHref(proximo.slug)}
              className="group flex flex-col items-end rounded-md border border-linha px-4 py-3 text-right hover:border-violeta-borda"
            >
              <span className="flex items-center gap-1.5 text-apoio text-texto-3">
                Próximo guia <ArrowRight aria-hidden size={14} strokeWidth={1.75} />
              </span>
              <span className="mt-1 font-titulo text-titulo-4 text-texto">{proximo.titulo}</span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
