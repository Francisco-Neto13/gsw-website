"use client";

import { useEffect, useState } from "react";
import SecaoGuia from "@/components/guias/SecaoGuia";
import CartaoDoSite from "@/components/sites-uteis/sections/CartaoDoSite";
import { categorias, sites, sitesDoGrupo, type CategoriaId } from "@/components/sites-uteis/data/sites-uteis-content";

const chip = (ativo: boolean) =>
  `rounded-md border px-3 py-1.5 text-apoio font-bold transition-colors ${
    ativo ? "border-violeta-borda bg-violeta/15 text-texto" : "border-linha bg-carvao text-texto-2 hover:border-violeta-borda hover:text-texto"
  }`;

/** Guia rápido (categorias como filtro e a lista de links) e os cards de cada site. */
export default function SitesGuia() {
  const [filtro, setFiltro] = useState<CategoriaId | null>(null);
  const visiveis = filtro ? sitesDoGrupo(filtro) : sites;

  // Um link para um card (#site-...) limpa o filtro, para o card nunca estar escondido.
  useEffect(() => {
    const limpar = () => {
      if (window.location.hash.startsWith("#site-")) setFiltro(null);
    };
    window.addEventListener("hashchange", limpar);
    return () => window.removeEventListener("hashchange", limpar);
  }, []);

  return (
    <>
      <SecaoGuia
        id="guia-rapido"
        titulo="Guia rápido"
        introducao="Escolha uma categoria para filtrar os sites, ou vá direto a um deles pela lista."
      >
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={filtro === null} onClick={() => setFiltro(null)} className={chip(filtro === null)}>
            Todos
          </button>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              type="button"
              aria-pressed={filtro === categoria.id}
              onClick={() => {
                setFiltro(categoria.id);
                document.getElementById("sites")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={chip(filtro === categoria.id)}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        <dl className="mt-6 grid max-w-leitura gap-x-6 gap-y-2 sm:grid-cols-[max-content_1fr]">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="contents">
              <dt className="text-apoio text-texto-3">{categoria.nome}</dt>
              <dd className="text-texto-2">
                {sitesDoGrupo(categoria.id).map((site, indice) => (
                  <span key={site.id}>
                    {indice > 0 ? " · " : ""}
                    <a href={`#site-${site.id}`} className="text-texto underline decoration-violeta/40 hover:decoration-violeta">
                      {site.nome}
                    </a>
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </SecaoGuia>

      <SecaoGuia id="sites" titulo="Os sites">
        <p aria-live="polite" className="sr-only">
          {filtro ? `Mostrando ${visiveis.length} sites de ${categorias.find((c) => c.id === filtro)?.nome}` : `Mostrando todos os ${sites.length} sites`}
        </p>
        {filtro ? (
          <p className="mb-4 text-apoio text-texto-3">
            Filtro: {categorias.find((c) => c.id === filtro)?.nome}.{" "}
            <button type="button" onClick={() => setFiltro(null)} className="text-violeta underline decoration-violeta/40 hover:decoration-violeta">
              Mostrar todos
            </button>
          </p>
        ) : null}
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {visiveis.map((site) => (
            <CartaoDoSite key={site.id} site={site} />
          ))}
        </div>
      </SecaoGuia>
    </>
  );
}
