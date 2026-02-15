"use client"
import { useState } from "react";
import type { Membro } from "./index";

interface MembersListProps {
  membros: Membro[];
  editingId: number | null;
  onEdit: (membro: Membro) => void;
  onDelete: (id: number) => void;
}

export default function MembersList({ 
  membros, 
  editingId, 
  onEdit, 
  onDelete 
}: MembersListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const membrosFiltrados = membros.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleConfirmDelete() {
    if (confirmDelete !== null) {
      onDelete(confirmDelete);
      setConfirmDelete(null);
    }
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h3 className="text-xl font-black text-white flex items-center gap-2">
          <span className="text-gsw"></span> 
          MEMBROS CADASTRADOS 
          <span className="text-zinc-600">({membros.length})</span>
        </h3>
        
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar membro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-800/50 pl-10 pr-4 py-2 rounded-xl border border-zinc-700 outline-none focus:border-gsw text-white text-sm transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {membrosFiltrados.map((m) => (
          <div 
            key={m.id} 
            className={`group relative bg-zinc-900/50 p-4 rounded-2xl border transition-all hover:-translate-y-1 ${
              editingId === m.id 
                ? 'border-amber-500/50 shadow-lg shadow-amber-500/20' 
                : 'border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <div className="absolute -top-2 -right-2 bg-gsw text-white text-xs font-black px-2 py-1 rounded-full shadow-lg">
              #{m.ordem}
            </div>

            <div className="flex items-start gap-4">
                {m.img && m.img.trim() !== "" ? (
                <img 
                    src={m.img} 
                    alt={m.name} 
                    className="w-16 h-16 rounded-xl object-cover border-2 border-gsw/30 group-hover:border-gsw/60 transition-colors" 
                    onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    }}
                />
                ) : (
                <div className="w-16 h-16 rounded-xl bg-black border-2 border-zinc-700" />
                )}
              
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-white truncate">{m.name}</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">{m.role}</p>
                
                {m.tags && m.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {m.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {m.tags.length > 2 && (
                      <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-md">
                        +{m.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => onEdit(m)}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                </svg>
                Editar
              </button>
              
              <button
                onClick={() => setConfirmDelete(m.id)}
                className="bg-red-900/30 hover:bg-red-900/50 text-red-400 hover:text-red-300 p-2 rounded-lg transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {membrosFiltrados.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          <p className="text-lg mb-2">Nenhum membro encontrado</p>
          <p className="text-sm">Tente ajustar sua busca ou adicione novos membros</p>
        </div>
      )}

      {confirmDelete !== null && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setConfirmDelete(null)}
        >
          <div 
            className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full border border-red-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-black text-white mb-4">⚠️ Confirmar Exclusão</h3>
            <p className="text-zinc-400 mb-6">
              Tem certeza que deseja remover <strong className="text-white">{membros.find(m => m.id === confirmDelete)?.name}</strong>? 
              Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-bold transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-all"
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