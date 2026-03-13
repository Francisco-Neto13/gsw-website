"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import { supabase } from "@/lib/supabase";
import type { Membro } from "./index";

interface MemberFormProps {
  membros: Membro[];
  membroEditando: Membro | null | undefined;
  editingId: number | null;
  onSave: (membroData: Omit<Membro, "id">) => Promise<boolean>;
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

export default function MemberForm({
  membros,
  membroEditando,
  editingId,
  onSave,
  onCancel,
}: MemberFormProps) {
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newTags, setNewTags] = useState("");
  const [newOrdem, setNewOrdem] = useState(0);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const duplicatedMember = membros.find(
    (membro) => membro.ordem === newOrdem && membro.id !== editingId
  );
  const isOrdemDuplicada = Boolean(duplicatedMember);

  const resetForm = useCallback(() => {
    setNewName("");
    setNewRole("");
    setNewImg("");
    setNewTags("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    const maxOrdem = membros.length > 0 ? Math.max(...membros.map((membro) => membro.ordem)) : 0;
    setNewOrdem(maxOrdem + 1);
  }, [membros]);

  useEffect(() => {
    if (membroEditando) {
      setNewName(membroEditando.name);
      setNewRole(membroEditando.role);
      setNewImg(membroEditando.img);
      setNewTags(membroEditando.tags?.join(", ") || "");
      setNewOrdem(membroEditando.ordem);
      return;
    }

    resetForm();
  }, [membroEditando, resetForm]);

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
        maxSizeMB: 0.15,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: "image/webp",
        initialQuality: 0.8,
      });

      if (file.size > 200 * 1024) {
        alert(
          `Imagem ainda grande após compressão: ${(file.size / 1024).toFixed(0)}KB.\n\nTente usar uma imagem menor ou com menos detalhes.`
        );
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      const fileName = createStorageFileName();

      const { error: uploadError } = await supabase.storage.from("members").upload(fileName, file, {
        contentType: "image/webp",
        cacheControl: "3600",
        upsert: false,
      });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from("members").getPublicUrl(fileName);
      setNewImg(data.publicUrl);
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

    if (newOrdem < 0) {
      alert("Ordem inválida.");
      return;
    }

    if (editingId === null && !newImg) {
      alert("Por favor, faça upload de uma imagem.");
      return;
    }

    const payload = {
      name: newName.trim(),
      role: newRole.trim(),
      img: newImg,
      tags: newTags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
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
          {editingId !== null ? <>EDITAR MEMBRO</> : <>NOVO MEMBRO</>}
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
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">Nome</label>
            <input
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-3 text-sm text-white outline-none transition-all focus:border-gsw focus:ring-2 focus:ring-gsw/20"
              placeholder="BadBoyCJ"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">Cargo</label>
            <input
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-3 text-sm text-white outline-none transition-all focus:border-gsw focus:ring-2 focus:ring-gsw/20"
              placeholder="Guild Leader"
              value={newRole}
              onChange={(event) => setNewRole(event.target.value)}
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
                Posição ocupada por: <strong>{duplicatedMember?.name}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">
            Tags <span className="font-normal normal-case text-zinc-600">(separadas por vírgula)</span>
          </label>
          <input
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 p-3 text-sm text-white outline-none transition-all focus:border-gsw focus:ring-2 focus:ring-gsw/20"
            placeholder="Fundador, Lenda, Pilar"
            value={newTags}
            onChange={(event) => setNewTags(event.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-default">
            Imagem
            <span className="font-normal normal-case text-zinc-600">(PNG, JPG ou WebP)</span>
            <span className="text-[10px] font-normal normal-case text-green-500">Auto-compressão ativa</span>
            {editingId !== null && (
              <span className="text-[10px] font-normal normal-case text-zinc-600">
                remover deixa o membro sem foto
              </span>
            )}
          </label>

          <div className="flex items-start gap-3 sm:gap-4">
            {newImg && (
              <div className="group relative shrink-0">
                <Image
                  src={normalizeImageSrc(newImg)}
                  alt="Preview"
                  width={128}
                  height={128}
                  className="h-20 w-20 rounded-xl border-2 border-gsw/50 object-cover sm:h-32 sm:w-32"
                />
                <button
                  type="button"
                  onClick={() => {
                    setNewImg("");
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
                className={`block cursor-pointer rounded-xl border-2 border-dashed p-3 transition-all sm:p-4 ${
                  uploading
                    ? "border-blue-500 bg-blue-500/10"
                    : newImg
                      ? "border-green-500 bg-green-500/10 hover:bg-green-500/20"
                      : "border-zinc-700 bg-zinc-800/30 hover:border-gsw hover:bg-gsw/10"
                }`}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {uploading ? (
                    <>
                      <div className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
                      <span className="text-sm font-medium text-blue-500 cursor-default">Comprimindo...</span>
                    </>
                  ) : newImg ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-green-500">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm font-medium text-green-500">Clique para alterar</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-400">
                        {editingId !== null ? "Adicionar imagem (opcional)" : "Selecionar imagem"}
                      </span>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={uploading || (editingId === null && !newImg)}
          className={`w-full cursor-pointer rounded-xl py-3 text-sm font-black uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:py-4 ${
            editingId !== null
              ? "bg-amber-600 text-white hover:bg-amber-700"
              : "bg-gradient-to-r from-gsw to-purple-600 text-white shadow-lg hover:from-purple-600 hover:to-gsw hover:shadow-gsw/50"
          }`}
        >
          {editingId !== null ? "Salvar Alterações" : "Adicionar Membro"}
        </button>
      </form>
    </section>
  );
}
