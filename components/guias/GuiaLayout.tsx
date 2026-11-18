"use client";

import { ArrowUp, ChevronDown, History } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import GuiaNavLista from "@/components/shared/GuiaNavLista";
import { guias, guiaHref, type GuiaSecao } from "@/lib/site-content";

const CHAVE_ONDE_PAREI = "gsw:onde-parei:";

const paraSlug = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Guias ainda no modelo antigo: o índice sai dos <section> com <h2> do próprio conteúdo. */
function secoesDoConteudo(raiz: HTMLElement): GuiaSecao[] {
  const usados = new Set<string>();
  return Array.from(raiz.querySelectorAll<HTMLElement>(":scope > div > section, :scope > section")).flatMap((secao) => {
    const titulo = secao.querySelector("h2")?.textContent?.trim();
    if (!titulo) return [];
    if (!secao.id) {
      let id = paraSlug(titulo) || "secao";
      while (usados.has(id)) id = `${id}-2`;
      secao.id = id;
    }
    usados.add(secao.id);
    return [{ id: secao.id, titulo }];
  });
}

const lerOndeParei = (caminho: string) => {
  try {
    return window.localStorage.getItem(CHAVE_ONDE_PAREI + caminho);
  } catch {
    return null;
  }
};

const gravarOndeParei = (caminho: string, id: string) => {
  try {
    window.localStorage.setItem(CHAVE_ONDE_PAREI + caminho, id);
  } catch {
    // navegador sem armazenamento: o recurso só não aparece
  }
};

export default function GuiaLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const conteudoRef = useRef<HTMLDivElement>(null);
  const guia = useMemo(() => guias.find((item) => guiaHref(item.slug) === pathname), [pathname]);
  // Cada estado guarda a rota a que pertence: ao trocar de guia ele simplesmente deixa de valer,
  // sem precisar ser zerado dentro de um efeito.
  const [dom, setDom] = useState<{ caminho: string; secoes: GuiaSecao[] }>({ caminho: "", secoes: [] });
  const [ativaEm, setAtivaEm] = useState({ caminho: "", id: "" });
  const [retomarEm, setRetomarEm] = useState<{ caminho: string; secao: GuiaSecao | null }>({ caminho: "", secao: null });
  const [abertoEm, setAbertoEm] = useState("");

  const secoesDom = dom.caminho === pathname ? dom.secoes : [];
  const secoes = guia?.secoes ?? secoesDom;
  const ativa = ativaEm.caminho === pathname ? ativaEm.id : "";
  const retomar = retomarEm.caminho === pathname ? retomarEm.secao : null;
  const abertoNoCelular = abertoEm === pathname;
  const setAbertoNoCelular = (valor: boolean | ((atual: boolean) => boolean)) =>
    setAbertoEm((atualCaminho) => {
      const atual = atualCaminho === pathname;
      const proximo = typeof valor === "function" ? valor(atual) : valor;
      return proximo ? pathname : "";
    });
  const setRetomar = (secao: GuiaSecao | null) => setRetomarEm({ caminho: pathname, secao });

  // Guias antigos: monta o índice a partir do DOM depois de renderizar.
  useEffect(() => {
    if (guia?.secoes) return;
    const quadro = window.requestAnimationFrame(() => {
      if (conteudoRef.current) setDom({ caminho: pathname, secoes: secoesDoConteudo(conteudoRef.current) });
    });
    return () => window.cancelAnimationFrame(quadro);
  }, [guia, pathname]);

  // Destaca a seção visível e guarda onde o leitor parou.
  useEffect(() => {
    if (secoes.length === 0) return;
    const elementos = secoes
      .map((secao) => document.getElementById(secao.id))
      .filter((elemento): elemento is HTMLElement => Boolean(elemento));
    // Ativa é a última seção (em ordem de documento) cujo topo já passou de 25% da tela: lendo a NOL, marca a NOL
    // e não o "Guia sala a sala" que a contém; acima da primeira seção, nenhuma.
    let quadro = 0;
    const calcular = () => {
      quadro = 0;
      const limite = window.innerHeight * 0.25;
      const atual = elementos.findLast((elemento) => elemento.getBoundingClientRect().top <= limite);
      setAtivaEm({ caminho: pathname, id: atual?.id ?? "" });
      if (atual) gravarOndeParei(pathname, atual.id);
    };
    const aoRolar = () => {
      if (!quadro) quadro = window.requestAnimationFrame(calcular);
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.cancelAnimationFrame(quadro);
    };
  }, [secoes, pathname]);

  // Oferece retomar só para quem volta ao guia pelo topo.
  useEffect(() => {
    if (secoes.length === 0) return;
    const quadro = window.requestAnimationFrame(() => {
      if (window.location.hash || window.scrollY > 200) return;
      const salvo = lerOndeParei(pathname);
      const secao = secoes.find((item) => item.id === salvo);
      if (secao && secao.id !== secoes[0]?.id) setRetomarEm({ caminho: pathname, secao });
    });
    return () => window.cancelAnimationFrame(quadro);
  }, [secoes, pathname]);

  const tituloAtivo = secoes.find((secao) => secao.id === ativa)?.titulo;

  const linkDaSecao = (secao: GuiaSecao, aoClicar?: () => void) => (
    <a
      href={`#${secao.id}`}
      onClick={aoClicar}
      aria-current={ativa === secao.id ? "location" : undefined}
      className={`block border-l py-1.5 leading-snug transition-colors duration-150 ${
        secao.nivel === 3 ? "pl-6 text-[0.9rem]" : "pl-3 text-[0.95rem]"
      } ${
        ativa === secao.id
          ? "border-violeta-borda text-texto"
          : "border-linha text-texto-3 hover:border-linha-forte hover:text-texto-2"
      }`}
    >
      {secao.titulo}
    </a>
  );

  const botaoRetomar = retomar ? (
    <a
      href={`#${retomar.id}`}
      onClick={() => setRetomar(null)}
      className="flex items-center gap-2 rounded-md border border-violeta-borda/60 bg-caixa px-3 py-2 text-[0.9rem] text-texto hover:border-violeta-borda"
    >
      <History aria-hidden size={16} strokeWidth={1.75} className="shrink-0 text-violeta" />
      <span>
        Continuar de <strong className="font-medium">{retomar.titulo}</strong>
      </span>
    </a>
  ) : null;

  // A página /guias já é a lista completa: sem sidebar repetindo o mesmo conteúdo.
  if (pathname === "/guias") return <>{children}</>;

  return (
    <div className="mx-auto flex max-w-[96rem]">
      <aside className="sticky top-[var(--topbar-h)] hidden h-[calc(100vh-var(--topbar-h))] w-64 shrink-0 overflow-y-auto border-r border-linha px-3 py-8 lg:block">
        <nav aria-label="Guias">
          <GuiaNavLista />
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        {secoes.length > 0 ? (
          <div className="sticky top-[var(--topbar-h)] z-30 border-b border-linha bg-chao shadow-[0_12px_24px_-16px_rgba(0,0,0,0.9)] xl:hidden">
            <button
              type="button"
              onClick={() => setAbertoNoCelular((aberto) => !aberto)}
              aria-expanded={abertoNoCelular}
              aria-controls="indice-celular"
              className="flex min-h-11 w-full items-center gap-2 px-4 text-left text-[0.95rem] sm:px-6"
            >
              <span className="text-texto-3">Nesta página:</span>
              <span className="min-w-0 flex-1 truncate text-texto">{tituloAtivo ?? secoes[0]?.titulo}</span>
              <ChevronDown
                aria-hidden
                size={18}
                strokeWidth={1.75}
                className={`shrink-0 text-texto-3 transition-transform duration-200 ${abertoNoCelular ? "rotate-180" : ""}`}
              />
            </button>
            {abertoNoCelular ? (
              <nav id="indice-celular" aria-label="Nesta página" className="max-h-[60vh] overflow-y-auto px-4 pb-4 sm:px-6">
                {botaoRetomar ? <div className="mb-3">{botaoRetomar}</div> : null}
                <ul>
                  {secoes.map((secao) => (
                    <li key={secao.id}>{linkDaSecao(secao, () => setAbertoNoCelular(false))}</li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
        ) : null}

        <div ref={conteudoRef} data-guia-conteudo>
          {children}
        </div>
      </div>

      {secoes.length > 0 ? (
        <aside className="sticky top-[var(--topbar-h)] hidden h-[calc(100vh-var(--topbar-h))] w-60 shrink-0 overflow-y-auto px-4 py-8 xl:block">
          <nav aria-label="Nesta página">
            <p className="mb-3 text-[0.8125rem] font-bold text-texto-3">Nesta página</p>
            {botaoRetomar ? <div className="mb-4">{botaoRetomar}</div> : null}
            <ul>
              {secoes.map((secao) => (
                <li key={secao.id}>{linkDaSecao(secao)}</li>
              ))}
            </ul>
            <a href="#conteudo" className="mt-6 flex items-center gap-1.5 text-[0.9rem] text-texto-3 hover:text-texto-2">
              <ArrowUp aria-hidden size={14} strokeWidth={1.75} />
              Voltar ao topo
            </a>
          </nav>
        </aside>
      ) : null}
    </div>
  );
}
