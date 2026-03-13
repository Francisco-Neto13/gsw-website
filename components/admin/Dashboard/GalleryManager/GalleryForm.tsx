"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import { supabase } from "@/lib/supabase";
import type { GalleryItem } from "./index";

interface GalleryFormProps {
  items: GalleryItem[];
  itemEditando: GalleryItem | null | undefined;
  editingId: number | null;
  onSave: (itemData: Omit<GalleryItem, "id">) => Promise<boolean>;
  onCancel: () => void;
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

function createStorageFileName() {
  return `${crypto.randomUUID()}.webp`;
}

export default function GalleryForm({
  items,
  itemEditando,
  editingId,
  onSave,
  onCancel,
}: GalleryFormProps) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newSrc, setNewSrc] = useState("");
  const [newOrdem, setNewOrdem] = useState(0);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const duplicatedItem = items.find(
    (item) => item.ordem === newOrdem && item.id !== editingId
  );
  const isOrdemDuplicada = Boolean(duplicatedItem);

  const resetForm = useCallback(() => {
    setNewTitle("");
    setNewDescription("");
    setNewSrc("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    const maxOrdem = items.length > 0 ? Math.max(...items.map((item) => item.ordem)) : 0;
    setNewOrdem(maxOrdem + 1);
  }, [items]);

  useEffect(() => {
    if (itemEditando) {
      setNewTitle(itemEditando.title);
      setNewDescription(itemEditando.description);
      setNewSrc(itemEditando.src);
      setNewOrdem(itemEditando.ordem);
      return;
    }

    resetForm();
  }, [itemEditando, resetForm]);

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      let file = event.target.files[0];
      const validFormats = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

      if (!validFormats.includes(file.type)) {
        alert("Formato não suportado. Use PNG, JPG ou WebP.");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      file = await imageCompression(file, {
        maxSizeMB: 0.4,
        maxWidthOrHeight: 1200,
        useWebWorker: true,
        fileType: "image/webp",
        initialQuality: 0.82,
      });

      const fileName = createStorageFileName();

      const { error: uploadError } = await supabase.storage.from("gallery").upload(fileName, file, {
        contentType: "image/webp",
        cacheControl: "3600",
        upsert: false,
      });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from("gallery").getPublicUrl(fileName);
      setNewSrc(data.publicUrl);
    } catch {
      alert("Erro no upload da imagem. Tente novamente.");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!newSrc) {
      alert("Por favor, faça upload de uma imagem.");
      return;
    }

    if (newOrdem < 0) {
      alert("A ordem não pode ser negativa.");
      return;
    }

    const payload = {
      title: newTitle.trim(),
      description: newDescription.trim(),
      src: newSrc,
      thumb_src: newSrc,
      ordem: newOrdem,
    };

    const success = await onSave(payload);
    if (success) {
      resetForm();
    }
  }

  function handleCancel() {
    resetForm();
    onCancel();
  }

  return (
    <section className="rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 p-5 shadow-2xl sm:rounded-3xl sm:p-8">
      <div className="mb-5 flex items-center justify-between sm:mb-6">
        <h2 className="flex items-center gap-2 text-lg font-black text-white sm:gap-3 sm:text-2xl cursor-default">
          {editingId !== null ? <>EDITAR FOTO</> : <>NOVA FOTO PARA GALERIA</>}
        </h2>

        {editingId !== null && (
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="hidden sm:inline">Cancelar</span>
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">Título</label>
            <input
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-3 text-sm text-white outline-none transition-all focus:border-gsw focus:ring-2 focus:ring-gsw/20"
              placeholder="Guerra em Rodoroc"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">Descrição</label>
            <input
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-3 text-sm text-white outline-none transition-all focus:border-gsw focus:ring-2 focus:ring-gsw/20"
              placeholder="Conquista épica"
              value={newDescription}
              onChange={(event) => setNewDescription(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">
              Posição {isOrdemDuplicada && <span className="text-yellow-500">!</span>}
            </label>
            <input
              type="number"
              min="0"
              className={`w-full rounded-xl border bg-zinc-800/50 p-3 text-sm text-white outline-none transition-all ${
                isOrdemDuplicada
                  ? "border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                  : "border-zinc-700 focus:border-gsw focus:ring-2 focus:ring-gsw/20"
              }`}
              value={newOrdem}
              onChange={(event) => setNewOrdem(Math.max(0, parseInt(event.target.value, 10) || 0))}
            />
            {isOrdemDuplicada && (
              <p className="flex items-center gap-1 text-xs text-yellow-500 cursor-default">
                Posição ocupada por: <strong>{duplicatedItem?.title}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">
            Imagem
            <span className="font-normal normal-case text-zinc-600">(PNG, JPG ou WebP)</span>
            <span className="text-[10px] font-normal normal-case text-green-500">Auto-compressão ativa</span>
          </label>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
            {newSrc && (
              <div className="group relative w-full shrink-0 sm:w-auto">
                <Image
                  src={normalizeImageSrc(newSrc)}
                  alt="Preview"
                  width={256}
                  height={144}
                  className="h-36 w-full rounded-xl border-2 border-gsw/50 object-cover shadow-lg sm:w-64"
                />
                <button
                  type="button"
                  onClick={() => {
                    setNewSrc("");
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  className="absolute -top-2 -right-2 rounded-full bg-red-600 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-700 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            <div className="w-full flex-1">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleImageUpload}
                className="hidden cursor-pointer"
                id="gallery-file-upload"
              />
              <label
                htmlFor="gallery-file-upload"
                className={`flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                  uploading
                    ? "border-blue-500 bg-blue-500/10"
                    : newSrc
                      ? "border-green-500 bg-green-500/10 hover:bg-green-500/20"
                      : "border-zinc-700 bg-zinc-800/30 hover:border-gsw hover:bg-gsw/10"
                }`}
              >
                {uploading ? (
                  <>
                    <div className="mb-2 h-7 w-7 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
                    <span className="text-sm font-medium text-blue-500 cursor-default">Comprimindo...</span>
                  </>
                ) : newSrc ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 text-green-500">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-medium text-green-500">Clique para alterar</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 text-zinc-400">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="text-sm font-medium text-zinc-400">Selecionar imagem</span>
                  </>
                )}
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={uploading || !newSrc}
          className={`w-full cursor-pointer rounded-xl py-3 text-sm font-black uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:py-4 ${
            editingId !== null
              ? "bg-amber-600 text-white hover:bg-amber-700"
              : "bg-gradient-to-r from-gsw to-purple-600 text-white shadow-lg hover:from-purple-600 hover:to-gsw hover:shadow-gsw/50"
          }`}
        >
          {editingId !== null ? "Salvar Alterações" : "Adicionar à Galeria"}
        </button>
      </form>
    </section>
  );
}
