"use client";

import { CornerDownLeft, FileText, Hash, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { guiaHref, guiasEmOrdem } from "@/lib/site-content";

type ItemDeBusca = {
  href: string;
  titulo: string;
  contexto: string;
  tipo: "guia" | "secao";
  chave: string;
};

const semAcento = (texto: string) =>
  texto.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

// Índice montado dos dados do site (lib/site-content.ts); sem servidor.
const indice: ItemDeBusca[] = guiasEmOrdem.flatMap((guia) => [
  {
    href: guiaHref(guia.slug),
    titulo: guia.titulo,
    contexto: guia.resumo,
    tipo: "guia" as const,
    chave: semAcento(`${guia.titulo} ${guia.resumo} ${guia.palavrasChave ?? ""}`),
  },
  ...(guia.secoes ?? [])
    .filter((secao) => secao.id !== "fontes")
    .map((secao) => ({
      href: `${guiaHref(guia.slug)}#${secao.id}`,
      titulo: secao.titulo,
      contexto: guia.titulo,
      tipo: "secao" as const,
      chave: semAcento(`${secao.titulo} ${guia.titulo} ${secao.busca ?? ""}`),
    })),
]);

function procurar(consulta: string) {
  const termos = semAcento(consulta).split(/\s+/).filter(Boolean);
  if (termos.length === 0) return indice.filter((item) => item.tipo === "guia");
  return indice.filter((item) => termos.every((termo) => item.chave.includes(termo))).slice(0, 12);
}

export default function Busca() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const listaId = useId();
  const [consulta, setConsulta] = useState("");
  const [ativo, setAtivo] = useState(0);
  const resultados = useMemo(() => procurar(consulta), [consulta]);

  const abrir = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setConsulta("");
    setAtivo(0);
    dialog.showModal();
    inputRef.current?.focus();
  }, []);

  const fechar = () => dialogRef.current?.close();

  const ir = (item: ItemDeBusca | undefined) => {
    if (!item) return;
    fechar();
    router.push(item.href);
  };

  useEffect(() => {
    const atalho = (evento: KeyboardEvent) => {
      const alvo = evento.target as HTMLElement | null;
      const digitando = alvo?.closest("input, textarea, [contenteditable='true']");
      if ((evento.key === "k" || evento.key === "K") && (evento.ctrlKey || evento.metaKey)) {
        evento.preventDefault();
        abrir();
      } else if (evento.key === "/" && !digitando) {
        evento.preventDefault();
        abrir();
      }
    };
    window.addEventListener("keydown", atalho);
    window.addEventListener("gsw:buscar", abrir);
    return () => {
      window.removeEventListener("keydown", atalho);
      window.removeEventListener("gsw:buscar", abrir);
    };
  }, [abrir]);

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        className="flex h-9 items-center gap-2 rounded-md border border-linha bg-carvao px-2.5 text-sm text-texto-2 transition-colors duration-150 hover:border-linha-forte hover:text-texto md:w-56"
        aria-label="Buscar nos guias (Ctrl+K)"
      >
        <Search aria-hidden size={16} strokeWidth={1.75} />
        <span className="hidden md:inline">Buscar</span>
        <kbd className="ml-auto hidden rounded border border-linha px-1.5 font-mono text-[0.7rem] text-texto-3 md:inline">
          Ctrl K
        </kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Buscar nos guias"
        className="m-0 mx-auto mt-[12vh] w-[min(36rem,calc(100vw-2rem))] max-h-[70vh] rounded-md border border-linha-forte bg-carvao p-0 text-texto shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] transition-[opacity,translate] duration-200 [transition-timing-function:var(--ease-saida)] backdrop:bg-black/70 starting:open:translate-y-1 starting:open:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-[120ms] motion-reduce:starting:open:translate-y-0"
        onClick={(evento) => {
          if (evento.target === dialogRef.current) fechar();
        }}
      >
        <div className="flex items-center gap-3 border-b border-linha px-4">
          <Search aria-hidden size={18} strokeWidth={1.75} className="shrink-0 text-texto-3" />
          <input
            ref={inputRef}
            value={consulta}
            onChange={(evento) => {
              setConsulta(evento.target.value);
              setAtivo(0);
            }}
            onKeyDown={(evento) => {
              if (evento.key === "ArrowDown") {
                evento.preventDefault();
                setAtivo((atual) => Math.min(atual + 1, resultados.length - 1));
              } else if (evento.key === "ArrowUp") {
                evento.preventDefault();
                setAtivo((atual) => Math.max(atual - 1, 0));
              } else if (evento.key === "Enter") {
                evento.preventDefault();
                ir(resultados[ativo]);
              }
            }}
            role="combobox"
            aria-expanded="true"
            aria-controls={listaId}
            aria-activedescendant={resultados[ativo] ? `${listaId}-${ativo}` : undefined}
            aria-autocomplete="list"
            placeholder="Raid, sala, beacon, guia…"
            className="h-14 w-full bg-transparent text-base text-texto placeholder:text-texto-3 focus:outline-none focus-visible:outline-none"
          />
          <kbd className="rounded border border-linha px-1.5 font-mono text-[0.7rem] text-texto-3">Esc</kbd>
        </div>

        <ul id={listaId} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
          {resultados.length === 0 ? (
            <li className="px-3 py-6 text-center text-texto-2">
              Nada encontrado para “{consulta}”. Tente o nome de uma raid ou de um guia.
            </li>
          ) : (
            resultados.map((item, indiceItem) => (
              <li
                key={item.href}
                id={`${listaId}-${indiceItem}`}
                role="option"
                aria-selected={indiceItem === ativo}
                onMouseEnter={() => setAtivo(indiceItem)}
                onClick={() => ir(item)}
                className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 ${
                  indiceItem === ativo ? "bg-gsw text-white" : "text-texto-2"
                }`}
              >
                {item.tipo === "guia" ? (
                  <FileText aria-hidden size={16} strokeWidth={1.75} className="shrink-0" />
                ) : (
                  <Hash aria-hidden size={16} strokeWidth={1.75} className="shrink-0" />
                )}
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{item.titulo}</span>
                  <span className={`block truncate text-sm ${indiceItem === ativo ? "text-white/85" : "text-texto-3"}`}>
                    {item.contexto}
                  </span>
                </span>
                {indiceItem === ativo ? <CornerDownLeft aria-hidden size={16} strokeWidth={1.75} /> : null}
              </li>
            ))
          )}
        </ul>
      </dialog>
    </>
  );
}
