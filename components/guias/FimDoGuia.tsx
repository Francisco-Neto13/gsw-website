import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { guiaHref, guiasEmOrdem } from "@/lib/site-content";

type FimDoGuiaProps = {
  slug: string;
  fontes: { rotulo: string; href: string }[];
};

/** Fontes consultadas + anterior/próximo na ordem da sidebar. */
export default function FimDoGuia({ slug, fontes }: FimDoGuiaProps) {
  const indice = guiasEmOrdem.findIndex((guia) => guia.slug === slug);
  const anterior = indice > 0 ? guiasEmOrdem[indice - 1] : undefined;
  const proximo = indice >= 0 && indice < guiasEmOrdem.length - 1 ? guiasEmOrdem[indice + 1] : undefined;

  return (
    <>
      <section id="fontes" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-10">
        <div className="max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">Fontes</h2>
          <p className="mt-3 text-texto-2">
            Texto escrito pela GsW. Números e regras do jogo conferidos nas fontes abaixo; se algo mudou num patch,
            avise a guilda no Discord.
          </p>
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
        </div>
      </section>

      <nav aria-label="Outros guias" className="grid gap-3 border-t border-linha px-4 py-8 sm:grid-cols-2 sm:px-6 lg:px-10">
        {anterior ? (
          <Link
            href={guiaHref(anterior.slug)}
            className="group flex flex-col rounded-md border border-linha px-4 py-3 hover:border-violeta-borda"
          >
            <span className="flex items-center gap-1.5 text-[0.9rem] text-texto-3">
              <ArrowLeft aria-hidden size={14} strokeWidth={1.75} /> Guia anterior
            </span>
            <span className="mt-1 font-titulo text-xl text-texto">{anterior.titulo}</span>
          </Link>
        ) : (
          <span />
        )}
        {proximo ? (
          <Link
            href={guiaHref(proximo.slug)}
            className="group flex flex-col items-end rounded-md border border-linha px-4 py-3 text-right hover:border-violeta-borda"
          >
            <span className="flex items-center gap-1.5 text-[0.9rem] text-texto-3">
              Próximo guia <ArrowRight aria-hidden size={14} strokeWidth={1.75} />
            </span>
            <span className="mt-1 font-titulo text-xl text-texto">{proximo.titulo}</span>
          </Link>
        ) : null}
      </nav>
    </>
  );
}
