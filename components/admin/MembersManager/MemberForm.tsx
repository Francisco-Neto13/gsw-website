"use client"
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import imageCompression from 'browser-image-compression';
import type { Membro } from "./index";

interface MemberFormProps {
  membros: Membro[];
  membroEditando: Membro | null | undefined;
  editingId: number | null;
  onSave: (membroData: Omit<Membro, 'id'>) => Promise<boolean>;
  onCancel: () => void;
}

export default function MemberForm({ 
  membros, 
  membroEditando, 
  editingId,
  onSave, 
  onCancel 
}: MemberFormProps) {
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newTags, setNewTags] = useState(""); 
  const [newOrdem, setNewOrdem] = useState(0);
  const [uploading, setUploading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const membroComMesmaOrdem = membros.find(
    m => m.ordem === newOrdem && m.id !== editingId
  );
  const isOrdemDuplicada = Boolean(membroComMesmaOrdem);

  useEffect(() => {
    if (membroEditando) {
      setNewName(membroEditando.name);
      setNewRole(membroEditando.role);
      setNewImg(membroEditando.img);
      setNewTags(membroEditando.tags?.join(", ") || "");
      setNewOrdem(membroEditando.ordem);
    } else {
      resetForm();
    }
  }, [membroEditando]);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0) return;

      let file = e.target.files[0];
      
      const validFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      if (!validFormats.includes(file.type)) {
        alert("Formato não suportado! Use PNG, JPG ou WebP");
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      const compressionOptions = {
        maxSizeMB: 0.15,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: 'image/webp',
        initialQuality: 0.8,
      };

      try {
        file = await imageCompression(file, compressionOptions);
        
        if (file.size > 200 * 1024) {
          alert(`⚠️ Imagem ainda grande após compressão: ${(file.size / 1024).toFixed(0)}KB\n\nTente usar uma imagem menor ou com menos detalhes.`);
          if (fileInputRef.current) fileInputRef.current.value = "";
          return;
        }
      } catch (compressionError: any) {
        console.error("Erro na compressão:", compressionError);
        alert("Erro ao comprimir imagem. Tente uma imagem diferente.");
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.webp`;

      const { error: uploadError } = await supabase.storage
        .from('members')
        .upload(fileName, file, {
          contentType: 'image/webp',
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('members').getPublicUrl(fileName);
      setNewImg(data.publicUrl);

    } catch (error: any) {
      console.error("Erro no upload:", error);
      alert("Erro no upload: " + error.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (newOrdem < 0) {
      alert("Ordem inválida!");
      return;
    }
    
    if (!newImg) {
      alert("Por favor, faça upload de uma imagem!");
      return;
    }

    const payload = { 
      name: newName, 
      role: newRole, 
      img: newImg, 
      tags: newTags.split(',').map(t => t.trim()).filter(t => t !== ""),
      ordem: newOrdem 
    };

    const success = await onSave(payload);
    if (success) resetForm();
  }

  function resetForm() {
    setNewName("");
    setNewRole("");
    setNewImg("");
    setNewTags("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    
    const maxOrdem = membros.length > 0 
      ? Math.max(...membros.map(m => m.ordem)) 
      : 0;
    setNewOrdem(maxOrdem + 1);
  }

  function handleCancel() {
    resetForm();
    onCancel();
  }

  return (
    <section className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 p-8 rounded-3xl border border-zinc-800/50 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-white flex items-center gap-3 cursor-default">
          {editingId ? (
            <>
              <span className="text-amber-500"></span> EDITAR MEMBRO
            </>
          ) : (
            <>
              <span className="text-gsw"></span> NOVO MEMBRO
            </>
          )}
        </h2>
        {editingId && (
          <button
            onClick={handleCancel}
            className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Cancelar
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">Nome</label>
            <input 
              className="w-full bg-zinc-800/50 p-3 rounded-xl border border-zinc-700 outline-none focus:border-gsw focus:ring-2 focus:ring-gsw/20 text-white transition-all" 
              placeholder="BadBoyCJ" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">Cargo</label>
            <input 
              className="w-full bg-zinc-800/50 p-3 rounded-xl border border-zinc-700 outline-none focus:border-gsw focus:ring-2 focus:ring-gsw/20 text-white transition-all" 
              placeholder="Guild Leader" 
              value={newRole} 
              onChange={(e) => setNewRole(e.target.value)} 
              required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">
              Posição {isOrdemDuplicada && <span className="text-yellow-500">⚠️</span>}
            </label>
            <input 
              type="number" 
              min="0" 
              className={`w-full bg-zinc-800/50 p-3 rounded-xl border outline-none transition-all ${
                isOrdemDuplicada 
                  ? 'border-yellow-500 focus:ring-2 focus:ring-yellow-500/20' 
                  : 'border-zinc-700 focus:border-gsw focus:ring-2 focus:ring-gsw/20'
              } text-white`}
              value={newOrdem} 
              onChange={(e) => setNewOrdem(Math.max(0, parseInt(e.target.value) || 0))} 
            />
            {isOrdemDuplicada && (
              <p className="text-xs text-yellow-500 flex items-center gap-1 cursor-default">
                <span>⚠️</span> Posição ocupada por: <strong>{membroComMesmaOrdem?.name}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">
            Tags <span className="text-zinc-600 font-normal normal-case">(separadas por vírgula)</span>
          </label>
          <input 
            className="w-full bg-zinc-800/50 p-3 rounded-xl border border-zinc-700 outline-none focus:border-gsw focus:ring-2 focus:ring-gsw/20 text-white transition-all" 
            placeholder="Fundador, Lenda, Pilar" 
            value={newTags} 
            onChange={(e) => setNewTags(e.target.value)} 
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 cursor-default">
            Imagem 
            <span className="text-zinc-600 font-normal normal-case">(PNG, JPG ou WebP)</span>
            <span className="text-green-500 text-[10px] font-normal normal-case">
              • Auto-compressão ativa
            </span>
          </label>
          
          <div className="flex gap-4 items-start">
            {newImg && (
              <div className="relative group">
                <img 
                  src={newImg} 
                  alt="Preview" 
                  className="w-32 h-32 object-cover rounded-xl border-2 border-gsw/50"
                />
                <button
                  type="button"
                  onClick={() => {
                    setNewImg("");
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            )}

            <div className="flex-1">
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/png,image/jpeg,image/jpg,image/webp" 
                onChange={handleImageUpload}
                className="hidden cursor-pointer" 
                id="file-upload"
              />
              <label 
                htmlFor="file-upload" 
                className={`block p-4 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                  uploading 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : newImg 
                      ? 'border-green-500 bg-green-500/10 hover:bg-green-500/20' 
                      : 'border-zinc-700 bg-zinc-800/30 hover:border-gsw hover:bg-gsw/10'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
                      <span className="text-blue-500 font-medium cursor-default">Comprimindo e enviando...</span>
                    </>
                  ) : newImg ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-green-500 font-medium">Imagem otimizada! Clique para alterar</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <span className="text-zinc-400 font-medium">Selecionar imagem (auto-comprime)</span>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={uploading || !newImg} 
          className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
            editingId 
              ? 'bg-amber-600 hover:bg-amber-700 text-white' 
              : 'bg-gradient-to-r from-gsw to-purple-600 hover:from-purple-600 hover:to-gsw text-white shadow-lg hover:shadow-gsw/50'
          }`}
        >
          {editingId ? "Salvar Alterações" : "Adicionar Membro"}
        </button>
      </form>
    </section>
  );
}