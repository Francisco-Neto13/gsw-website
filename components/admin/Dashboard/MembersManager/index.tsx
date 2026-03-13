"use client";

import { useCallback, useEffect, useState } from "react";
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

async function fetchMembers(): Promise<Membro[]> {
  const { data, error } = await supabase
    .from("membros")
    .select("*")
    .order("ordem", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data as Membro[];
}

export default function MembersManager() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const refreshMembers = useCallback(async () => {
    const nextMembers = await fetchMembers();
    setMembros(nextMembers);
  }, []);

  async function deleteImageFromBucket(imgUrl: string) {
    if (!imgUrl) return;

    const path = extractStoragePath(imgUrl);
    if (!path) return;

    await supabase.storage.from("members").remove([path]);
  }

  async function handleSaveMembro(membroData: Omit<Membro, "id">) {
    if (editingId !== null) {
      const currentMember = membros.find((membro) => membro.id === editingId);
      if (currentMember?.img && currentMember.img !== membroData.img) {
        await deleteImageFromBucket(currentMember.img);
      }

      const { error } = await supabase
        .from("membros")
        .update(membroData)
        .eq("id", editingId);

      if (!error) {
        showSuccessMessage("Membro atualizado.");
        setEditingId(null);
        await refreshMembers();
        return true;
      }
    } else {
      const { error } = await supabase.from("membros").insert([membroData]);

      if (!error) {
        showSuccessMessage("Membro adicionado.");
        await refreshMembers();
        return true;
      }
    }

    return false;
  }

  async function handleDeleteMembro(id: number) {
    const member = membros.find((membro) => membro.id === id);

    const { error } = await supabase.from("membros").delete().eq("id", id);

    if (!error) {
      if (member?.img) {
        await deleteImageFromBucket(member.img);
      }

      showSuccessMessage("Membro removido.");
      await refreshMembers();
    }
  }

  function handleStartEdit(membro: Membro) {
    setEditingId(membro.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  function showSuccessMessage(message: string) {
    setSuccessMessage(message);
    window.setTimeout(() => setSuccessMessage(""), 3000);
  }

  useEffect(() => {
    let active = true;

    void (async () => {
      const nextMembers = await fetchMembers();

      if (active) {
        setMembros(nextMembers);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const currentMember =
    editingId !== null ? membros.find((membro) => membro.id === editingId) : null;

  return (
    <div className="space-y-8">
      {successMessage && (
        <div className="fixed top-6 right-6 z-[110] rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg animate-fade-in">
          {successMessage}
        </div>
      )}

      <MemberForm
        membros={membros}
        membroEditando={currentMember}
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
