"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import MemberForm from "./MemberForm";
import MembersList from "./MembersList";

export interface Membro {
  id: number;
  name: string;
  role: string;
  img: string;
  tags: string[];
  ordem: number;
}

function extractStoragePath(url: string): string | null {
  try {
    const match = url.match(/\/storage\/v1\/object\/public\/members\/(.+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export default function MembersManager() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  async function fetchMembros() {
    const { data, error } = await supabase
      .from('membros')
      .select('*')
      .order('ordem', { ascending: true });

    if (!error && data) {
      setMembros(data as Membro[]);
    }
  }

  async function deleteImageFromBucket(imgUrl: string) {
    if (!imgUrl) return;
    const path = extractStoragePath(imgUrl);
    console.log("URL:", imgUrl);
    console.log("Path extraído:", path);
    if (!path) return;
    const { error } = await supabase.storage.from('members').remove([path]);
    console.log("Erro ao deletar:", error);
  }

  async function handleSaveMembro(membroData: Omit<Membro, 'id'>) {
    if (editingId) {
      const membroAtual = membros.find(m => m.id === editingId);
      if (membroAtual && membroAtual.img && membroAtual.img !== membroData.img) {
        await deleteImageFromBucket(membroAtual.img);
      }

      const { error } = await supabase
        .from('membros')
        .update(membroData)
        .eq('id', editingId);

      if (!error) {
        showSuccessMessage("✅ Membro atualizado!");
        setEditingId(null);
        fetchMembros();
        return true;
      }
    } else {
      const { error } = await supabase
        .from('membros')
        .insert([membroData]);

      if (!error) {
        showSuccessMessage("✅ Membro adicionado!");
        fetchMembros();
        return true;
      }
    }

    return false;
  }

  async function handleDeleteMembro(id: number) {
    const membro = membros.find(m => m.id === id);

    const { error } = await supabase
      .from('membros')
      .delete()
      .eq('id', id);

    if (!error) {
      if (membro?.img) {
        await deleteImageFromBucket(membro.img);
      }
      showSuccessMessage("🗑️ Membro removido!");
      fetchMembros();
    }
  }

  function handleStartEdit(membro: Membro) {
    setEditingId(membro.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  function showSuccessMessage(message: string) {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  }

  useEffect(() => {
    fetchMembros();
  }, []);

  const membroEditando = editingId
    ? membros.find(m => m.id === editingId)
    : null;

  return (
    <div className="space-y-8">
      {successMessage && (
        <div className="fixed top-6 right-6 z-[110] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {successMessage}
        </div>
      )}
      <MemberForm
        membros={membros}
        membroEditando={membroEditando}
        editingId={editingId}
        onSave={handleSaveMembro}
        onCancel={handleCancelEdit}
      />
      <MembersList
        membros={membros}
        editingId={editingId}
        onEdit={handleStartEdit}
        onDelete={handleDeleteMembro}
      />
    </div>
  );
}