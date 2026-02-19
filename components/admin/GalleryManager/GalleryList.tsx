"use client"
import { useState } from "react";
import type { GalleryItem } from "./index";

interface GalleryListProps {
  items: GalleryItem[];
  editingId: number | null;
  onEdit: (item: GalleryItem) => void;
  onDelete: (id: number) => void;
}

export default function GalleryList({ 
  items, 
  editingId, 
  onEdit, 
  onDelete 
}: GalleryListProps) {
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  function handleConfirmDelete() {
    if (confirmDelete !== null) {
      onDelete(confirmDelete);
      setConfirmDelete(null);
    }
  }

  return (
    <section className="space-y-6 cursor-default">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black text-white flex items-center gap-2">
          MURAL DA GALERIA
          <span className="text-zinc-600">({items.length})</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`group relative bg-zinc-900/50 rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 flex flex-col ${
              editingId === item.id 
                ? 'border-amber-500/50 shadow-lg shadow-amber-500/20' 
                : 'border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <div className="absolute top-2 left-2 z-10 bg-gsw text-white text-[10px] font-black px-2 py-1 rounded-md backdrop-blur-md border border-white/5">
              #{item.ordem}
            </div>

            <div className="aspect-video overflow-hidden shrink-0 relative">
              <img 
                src={item.thumb_src || item.src}
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-white text-sm group-hover:text-gsw transition-colors truncate mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-500 line-clamp-2 italic leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => onEdit(item)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                  </svg>
                  Editar
                </button>
                
                <button
                  onClick={() => setConfirmDelete(item.id)}
                  className="bg-red-900/30 hover:bg-red-900/50 text-red-400 hover:text-red-300 p-2 rounded-lg transition-all cursor-pointer active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          <p className="text-lg mb-2">Nenhuma foto na galeria</p>
          <p className="text-sm">Adicione a primeira foto para começar!</p>
        </div>
      )}

      {confirmDelete !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[120] p-4 animate-in fade-in duration-300"
          onClick={() => setConfirmDelete(null)}
        >
          <div 
            className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full border border-zinc-800 shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">⚠️ Confirmar Exclusão</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Tem certeza que deseja remover <strong className="text-white">"{items.find(i => i.id === confirmDelete)?.title}"</strong> da galeria? 
              Essa ação é irreversível.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-bold transition-all cursor-pointer active:scale-95"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-all cursor-pointer active:scale-95 shadow-lg shadow-red-900/20"
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