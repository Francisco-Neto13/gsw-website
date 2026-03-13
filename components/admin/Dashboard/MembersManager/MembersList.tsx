"use client";

import Image from "next/image";
import { useState } from "react";
import type { Membro } from "./index";

interface MembersListProps {
  membros: Membro[];
  editingId: number | null;
  onEdit: (membro: Membro) => void;
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

export default function MembersList({
  membros,
  editingId,
  onEdit,
  onDelete,
}: MembersListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const filteredMembers = membros.filter(
    (membro) =>
      membro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      membro.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleConfirmDelete() {
    if (confirmDelete !== null) {
      onDelete(confirmDelete);
      setConfirmDelete(null);
    }
  }

  const memberToDelete = membros.find((membro) => membro.id === confirmDelete);

  return (
    <section className="space-y-4 cursor-default sm:space-y-6">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
        <h3 className="flex items-center gap-2 text-base font-black text-white sm:text-xl">
          MEMBROS CADASTRADOS
          <span className="text-zinc-600">({membros.length})</span>
        </h3>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar membro..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 py-2 pr-4 pl-10 text-sm text-white outline-none transition-all focus:border-gsw"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMembers.map((membro) => (
          <div
            key={membro.id}
            className={`group relative rounded-2xl border bg-zinc-900/50 p-3 transition-all hover:-translate-y-1 sm:p-4 ${
              editingId === membro.id
                ? "border-amber-500/50 shadow-lg shadow-amber-500/20"
                : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            <div className="absolute -top-2 -right-2 z-10 rounded-full bg-gsw px-2 py-1 text-xs font-black text-white shadow-lg">
              #{membro.ordem}
            </div>

            <div className="flex items-start gap-3">
              {membro.img?.trim() ? (
                <Image
                  src={normalizeImageSrc(membro.img.trim())}
                  alt={membro.name}
                  width={64}
                  height={64}
                  className="h-14 w-14 shrink-0 rounded-xl border-2 border-gsw/30 object-cover transition-colors group-hover:border-gsw/60 sm:h-16 sm:w-16"
                />
              ) : (
                <div className="h-14 w-14 shrink-0 rounded-xl border-2 border-zinc-700 bg-black sm:h-16 sm:w-16" />
              )}

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-bold text-white sm:text-base">{membro.name}</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500">{membro.role}</p>

                {membro.tags && membro.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {membro.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-md bg-zinc-800 px-2 py-0.5 text-[9px] text-zinc-400">
                        {tag}
                      </span>
                    ))}
                    {membro.tags.length > 2 && (
                      <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[9px] text-zinc-400">
                        +{membro.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 flex gap-2 sm:mt-4">
              <button
                onClick={() => onEdit(membro)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-800 py-2 text-xs font-bold text-zinc-300 transition-all hover:bg-zinc-700 hover:text-white active:scale-95 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
                Editar
              </button>

              <button
                onClick={() => setConfirmDelete(membro.id)}
                className="rounded-lg bg-red-900/30 p-2 text-red-400 transition-all hover:bg-red-900/50 hover:text-red-300 active:scale-95 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="py-10 text-center text-zinc-500 sm:py-12">
          <p className="text-base sm:text-lg">Nenhum membro encontrado</p>
        </div>
      )}

      {confirmDelete !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300 cursor-default sm:items-center"
          onClick={() => setConfirmDelete(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl animate-in slide-in-from-bottom-4 cursor-default sm:p-8 sm:zoom-in-95"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="mb-3 text-xl font-black text-white sm:mb-4 sm:text-2xl">Confirmar Exclusão</h3>
            <p className="mb-5 text-sm text-zinc-400 sm:mb-6 sm:text-base">
              Tem certeza que deseja remover <strong className="text-white">{memberToDelete?.name}</strong>?
              Esta ação não pode ser desfeita.
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
