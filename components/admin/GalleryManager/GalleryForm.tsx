"use client"
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import imageCompression from 'browser-image-compression';
import type { GalleryItem } from "./index";

interface GalleryFormProps {
  items: GalleryItem[];
  itemEditando: GalleryItem | null | undefined;
  editingId: number | null;
  onSave: (itemData: Omit<GalleryItem, 'id'>) => Promise<boolean>;
  onCancel: () => void;
}

export default function GalleryForm({ 
  items, 
  itemEditando, 
  editingId,
  onSave, 
  onCancel 
}: GalleryFormProps) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newSrc, setNewSrc] = useState("");
  const [newThumbSrc, setNewThumbSrc] = useState("");
  const [newOrdem, setNewOrdem] = useState(0);
  const [uploading, setUploading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const itemComMesmaOrdem = items.find(
    i => i.ordem === newOrdem && i.id !== editingId
  );
  const isOrdemDuplicada = Boolean(itemComMesmaOrdem);

  useEffect(() => {
    if (itemEditando) {
      setNewTitle(itemEditando.title);
      setNewDescription(itemEditando.description);
      setNewSrc(itemEditando.src);
      setNewThumbSrc(itemEditando.thumb_src || "");
      setNewOrdem(itemEditando.ordem);
    } else {
      resetForm();
    }
  }, [itemEditando]);

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

      console.log(`Imagem original: ${(file.size / 1024).toFixed(0)}KB`);

      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(7);

      const thumbOptions = {
        maxSizeMB: 0.1,              
        maxWidthOrHeight: 600,        
        useWebWorker: true,
        fileType: 'image/webp',
        initialQuality: 0.75,
      };

      let thumbFile: File;
      try {
        thumbFile = await imageCompression(file, thumbOptions);
        console.log(`Thumbnail criado: ${(thumbFile.size / 1024).toFixed(0)}KB`);
      } catch (err) {
        console.error("Erro ao criar thumbnail:", err);
        alert("Erro ao criar miniatura da imagem");
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      const thumbFileName = `thumb-${timestamp}-${randomStr}.webp`;
      const thumbPath = `thumbs/${thumbFileName}`;

      const { error: thumbUploadError } = await supabase.storage
        .from('gallery')
        .upload(thumbPath, thumbFile, {
          contentType: 'image/webp',
          cacheControl: '3600',
          upsert: false
        });

      if (thumbUploadError) throw thumbUploadError;

      const { data: thumbData } = supabase.storage.from('gallery').getPublicUrl(thumbPath);
      setNewThumbSrc(thumbData.publicUrl);

      const fullOptions = {
        maxSizeMB: 0.25,             
        maxWidthOrHeight: 1200,      
        useWebWorker: true,
        fileType: 'image/webp',
        initialQuality: 0.85,
      };

      let fullFile: File;
      try {
        fullFile = await imageCompression(file, fullOptions);
        console.log(`Full criado: ${(fullFile.size / 1024).toFixed(0)}KB`);
      } catch (err) {
        console.error("Erro ao criar imagem full:", err);
        alert("Erro ao processar imagem");
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      const fullFileName = `full-${timestamp}-${randomStr}.webp`;
      const fullPath = `full/${fullFileName}`;

      const { error: fullUploadError } = await supabase.storage
        .from('gallery')
        .upload(fullPath, fullFile, {
          contentType: 'image/webp',
          cacheControl: '3600',
          upsert: false
        });

      if (fullUploadError) throw fullUploadError;

      const { data: fullData } = supabase.storage.from('gallery').getPublicUrl(fullPath);
      setNewSrc(fullData.publicUrl);

      console.log(`Upload concluído: Thumb + Full`);

    } catch (error: any) {
      console.error("Erro no upload:", error);
      alert("Erro no upload: " + error.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!newSrc || !newThumbSrc) {
      alert("Por favor, faça upload de uma imagem!");
      return;
    }
    
    if (newOrdem < 0) {
      alert("A ordem não pode ser negativa!");
      return;
    }

    const payload = { 
      title: newTitle, 
      description: newDescription, 
      src: newSrc,
      thumb_src: newThumbSrc,
      ordem: newOrdem
    };

    const success = await onSave(payload);
    if (success) {
      resetForm();
    }
  }

  function resetForm() {
    setNewTitle("");
    setNewDescription("");
    setNewSrc("");
    setNewThumbSrc("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    
    const maxOrdem = items.length > 0 
      ? Math.max(...items.map(i => i.ordem)) 
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
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          {editingId ? (
            <>
              <span className="text-amber-500"></span> EDITAR FOTO
            </>
          ) : (
            <>NOVA FOTO PARA GALERIA</>
          )}
        </h2>
        {editingId && (
          <button
            onClick={handleCancel}
            className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-2"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Título</label>
            <input 
              className="w-full bg-zinc-800/50 p-3 rounded-xl border border-zinc-700 outline-none focus:border-gsw focus:ring-2 focus:ring-gsw/20 text-white transition-all" 
              placeholder="Guerra em Rodoroc" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} 
              required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Descrição</label>
            <input 
              className="w-full bg-zinc-800/50 p-3 rounded-xl border border-zinc-700 outline-none focus:border-gsw focus:ring-2 focus:ring-gsw/20 text-white transition-all" 
              placeholder="Conquista épica" 
              value={newDescription} 
              onChange={(e) => setNewDescription(e.target.value)} 
              required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
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
              <p className="text-xs text-yellow-500 flex items-center gap-1">
                <span>⚠️</span> Posição ocupada por: <strong>{itemComMesmaOrdem?.title}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            Imagem 
            <span className="text-zinc-600 font-normal normal-case">(PNG, JPG ou WebP)</span>
            <span className="text-green-500 text-[10px] font-normal normal-case">
              • Auto-compressão ativa
            </span>
          </label>
          
          <div className="flex gap-4 items-start flex-col md:flex-row">
            {newSrc && (
              <div className="relative group shrink-0">
                <img 
                  src={newSrc} 
                  alt="Preview" 
                  className="w-full md:w-64 h-36 object-cover rounded-xl border-2 border-gsw/50 shadow-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setNewSrc("");
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            )}

            <div className="flex-1 w-full">
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/png,image/jpeg,image/jpg,image/webp" 
                onChange={handleImageUpload}
                className="hidden" 
                id="gallery-file-upload"
              />
              <label 
                htmlFor="gallery-file-upload" 
                className={`flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                  uploading 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : newSrc 
                      ? 'border-green-500 bg-green-500/10 hover:bg-green-500/20' 
                      : 'border-zinc-700 bg-zinc-800/30 hover:border-gsw hover:bg-gsw/10'
                }`}
              >
                {uploading ? (
                  <>
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mb-2"></div>
                    <span className="text-blue-500 font-medium text-sm">Comprimindo e enviando...</span>
                  </>
                ) : newSrc ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-green-500 font-medium text-sm">Imagem otimizada! Clique para alterar</span>
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
              </label>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={uploading || !newSrc || !newThumbSrc} 
          className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
            editingId 
              ? 'bg-amber-600 hover:bg-amber-700 text-white' 
              : 'bg-gradient-to-r from-gsw to-purple-600 hover:from-purple-600 hover:to-gsw text-white shadow-lg hover:shadow-gsw/50'
          }`}
        >
          {editingId ? "Salvar Alterações" : "Adicionar à Galeria"}
        </button>
      </form>
    </section>
  );
}