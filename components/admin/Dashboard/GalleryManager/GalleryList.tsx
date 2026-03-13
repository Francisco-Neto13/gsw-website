"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "./index";

interface GalleryListProps {
  items: GalleryItem[];
  editingId: number | null;
  onEdit: (item: GalleryItem) => void;
  onDelete: (id: number) => void;
}

function normalizeImageSrc(src: string) {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:") ||
    src.startsWith("/")
  ) {
    return src;
  }

  return `/${src}`;
}

export default function GalleryList({
  items,
  editingId,
  onEdit,
  onDelete,
}: GalleryListProps) {
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  function handleConfirmDelete() {
    if (confirmDelete !== null) {
      onDelete(confirmDelete);
      setConfirmDelete(null);
    }
  }

  const itemToDelete = items.find((item) => item.id === confirmDelete);

  return (
    <section className="space-y-4 cursor-default sm:space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-black text-white sm:text-xl">
          MURAL DA GALERIA
          <span className="text-zinc-600">({items.length})</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-zinc-900/50 transition-all hover:-translate-y-1 ${
              editingId === item.id
                ? "border-amber-500/50 shadow-lg shadow-amber-500/20"
                : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            <div className="absolute top-2 left-2 z-10 rounded-md border border-white/5 bg-gsw px-2 py-1 text-[10px] font-black text-white backdrop-blur-md">
              #{item.ordem}
            </div>

            <div className="relative aspect-video shrink-0 overflow-hidden">
              <Image
                src={normalizeImageSrc(item.thumb_src || item.src)}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
              <div>
                <h4 className="mb-1 truncate text-sm font-bold text-white transition-colors group-hover:text-gsw">
                  {item.title}
                </h4>
                <p className="line-clamp-2 text-[11px] italic leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex gap-2 sm:mt-4">
                <button
                  onClick={() => onEdit(item)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-800 py-2 text-xs font-bold text-zinc-300 transition-all hover:bg-zinc-700 hover:text-white active:scale-95 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                  Editar
                </button>

                <button
                  onClick={() => setConfirmDelete(item.id)}
                  className="rounded-lg bg-red-900/30 p-2 text-red-400 transition-all hover:bg-red-900/50 hover:text-red-300 active:scale-95 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="py-10 text-center text-zinc-500 sm:py-12">
          <p className="mb-2 text-base sm:text-lg">Nenhuma foto na galeria</p>
          <p className="text-sm">Adicione a primeira foto para começar.</p>
        </div>
      )}

      {confirmDelete !== null && (
        <div
          className="fixed inset-0 z-[120] flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300 sm:items-center"
          onClick={() => setConfirmDelete(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl animate-in slide-in-from-bottom-4 sm:p-8 sm:zoom-in-95"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="mb-3 text-xl font-black uppercase italic tracking-tighter text-white sm:mb-4 sm:text-2xl">
              Confirmar Exclusão
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-zinc-400 sm:mb-6 sm:text-base">
              Tem certeza que deseja remover <strong className="text-white">&quot;{itemToDelete?.title}&quot;</strong> da galeria?
              Essa ação é irreversível.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 rounded-xl bg-zinc-800 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-700 active:scale-95 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 rounded-xl bg-red-600 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all hover:bg-red-700 active:scale-95 cursor-pointer"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
