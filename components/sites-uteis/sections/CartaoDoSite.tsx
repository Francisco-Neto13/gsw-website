import { BookOpen, ExternalLink, Globe } from "lucide-react";
import CreditoImagem from "@/components/guias/CreditoImagem";
import Destaque from "@/components/guias/Destaque";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";
import { categorias, type SiteUtil } from "@/components/sites-uteis/data/sites-uteis-content";
import { dimensoesDe } from "@/lib/imagens";

const TAMANHO = "(min-width: 1280px) 34rem, (min-width: 768px) 45vw, calc(100vw - 2rem)";
const dominio = (url: string) => url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Prévia desenhada quando o site não tem imagem de compartilhamento: nome e domínio sobre o poço. */
function PreviaDesenhada({ site }: { site: SiteUtil }) {
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
      {site.categorias.includes("wiki") ? (
        <BookOpen aria-hidden size={32} strokeWidth={1.5} className="text-violeta" />
      ) : (
        <Globe aria-hidden size={32} strokeWidth={1.5} className="text-violeta" />
      )}
      <span className="font-titulo text-titulo-3 text-texto">{site.nome}</span>
      <span className="font-mono text-apoio text-texto-3">{dominio(site.url)}</span>
    </span>
  );
}

function Lista({ titulo, itens }: { titulo: string; itens: string[] }) {
  return (
    <div>
      <p className="font-bold text-texto">{titulo}</p>
      <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-texto-2 marker:text-violeta">
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** Card de um site: prévia, nome, categorias, o que tem, para que serve, destaque e o botão para abrir. */
export default function CartaoDoSite({ site }: { site: SiteUtil }) {
  const temImagem = site.imagem && dimensoesDe(site.imagem);
  return (
    <article
      id={`site-${site.id}`}
      aria-labelledby={`site-${site.id}-nome`}
      className="flex scroll-mt-12 flex-col overflow-hidden rounded-md border border-linha bg-carvao xl:scroll-mt-4"
    >
      <div className="relative aspect-[1200/630] border-b border-linha bg-poco">
        {temImagem ? (
          <span className="absolute inset-2">
            <ImagemNoQuadro src={site.imagem!} alt={`Prévia do site ${site.nome}`} sizes={TAMANHO} />
          </span>
        ) : (
          <PreviaDesenhada site={site} />
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <ul className="flex flex-wrap gap-1.5" aria-label="Categorias">
          {site.categorias.map((id) => (
            <li key={id} className="rounded border border-violeta-borda/50 px-1.5 text-detalhe text-violeta">
              {categorias.find((categoria) => categoria.id === id)?.nome}
            </li>
          ))}
        </ul>
        <h3 id={`site-${site.id}-nome`} className="mt-2 font-titulo text-titulo-3 text-texto">
          {site.nome}
        </h3>
        <p className="mt-1 text-texto-2">{site.resumo}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Lista titulo="O que tem dentro" itens={site.dentro} />
          <Lista titulo="Pra que serve" itens={site.serve} />
        </div>

        {site.destaque ? (
          <Destaque
            tipo="dica"
            titulo={site.destaque.opiniao ? "Opinião da comunidade" : "Destaque"}
            texto={site.destaque.texto}
            className="mt-4"
          />
        ) : null}
        {site.aviso ? <Destaque tipo="aviso" titulo="Atenção ao abrir" texto={site.aviso} className="mt-3" /> : null}

        <div className="mt-auto pt-5">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-violeta-borda px-4 py-2 font-bold text-violeta transition-colors hover:bg-violeta/10"
          >
            Abrir o {site.nome}
            <ExternalLink aria-hidden size={16} strokeWidth={1.75} />
            <span className="sr-only">(abre {dominio(site.url)} em nova aba)</span>
          </a>
          <p className="mt-3 text-detalhe text-texto-3">
            Site de {site.criadores}. A GsW não tem vínculo com ele.
            {temImagem ? (
              <>
                {" "}
                <CreditoImagem src={site.imagem!} rotulo="Prévia:" />
              </>
            ) : null}
          </p>
        </div>
      </div>
    </article>
  );
}
