import { ExternalLink, Hammer } from "lucide-react";
import GuideIntro from "@/components/shared/GuideIntro";

type GuiaEmConstrucaoProps = {
  titulo: string;
  introducao: string[];
  topicos: string[];
  fontes: { rotulo: string; href: string }[];
};

/** Modelo de guia sem conteúdo ainda: diz o que vem e para onde ir enquanto isso. */
export default function GuiaEmConstrucao({ titulo, introducao, topicos, fontes }: GuiaEmConstrucaoProps) {
  return (
    <div>
      <GuideIntro title={titulo} paragraphs={introducao} />
      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="caixa-item max-w-[60ch] p-6">
          <h2 className="text-titulo-4 flex items-center gap-2 text-texto">
            <Hammer aria-hidden size={20} strokeWidth={1.75} className="text-violeta" />
            O que este guia vai cobrir
          </h2>
          <ul className="mt-4 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {topicos.map((topico) => (
              <li key={topico}>{topico}</li>
            ))}
          </ul>
          <p className="mt-6 text-texto-2">Enquanto isso, a referência mais completa é:</p>
          <ul className="mt-2 flex flex-col gap-1.5">
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
    </div>
  );
}
