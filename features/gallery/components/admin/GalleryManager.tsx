"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import GalleryForm from "./GalleryForm";
import GalleryList from "./GalleryList";

export interface GalleryItem {
  id: number;
  src: string;
  thumb_src: string | null;
  title: string;
  description: string;
  ordem: number;
}

function extractStoragePath(url: string): string | null {
  try {
    const match = url.match(/\/storage\/v1\/object\/public\/gallery\/(.+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

async function fetchGalleryItems(): Promise<GalleryItem[]> {
  const { data, error } = await supabase
    .from("galeria")
    .select("*")
    .order("ordem", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data as GalleryItem[];
}

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const refreshGallery = useCallback(async () => {
    const nextItems = await fetchGalleryItems();
    setItems(nextItems);
  }, []);

  async function deleteImageFromBucket(imgUrl: string) {
    if (!imgUrl) return;

    const path = extractStoragePath(imgUrl);
    if (!path) return;

    await supabase.storage.from("gallery").remove([path]);
  }

  async function handleSaveItem(itemData: Omit<GalleryItem, "id">) {
    if (editingId !== null) {
      const currentItem = items.find((item) => item.id === editingId);
      if (currentItem?.src && currentItem.src !== itemData.src) {
        await deleteImageFromBucket(currentItem.src);
      }

      const { error } = await supabase
        .from("galeria")
        .update(itemData)
        .eq("id", editingId);

      if (!error) {
        showSuccessMessage("Galeria atualizada.");
        setEditingId(null);
        await refreshGallery();
        return true;
      }
    } else {
      const { error } = await supabase.from("galeria").insert([itemData]);

      if (!error) {
        showSuccessMessage("Foto adicionada.");
        await refreshGallery();
        return true;
      }
    }

    return false;
  }

  async function handleDeleteItem(id: number) {
    const item = items.find((currentItem) => currentItem.id === id);

    const { error } = await supabase.from("galeria").delete().eq("id", id);

    if (!error) {
      if (item?.src) {
        await deleteImageFromBucket(item.src);
      }

      showSuccessMessage("Foto removida.");
      await refreshGallery();
    }
  }

  function handleStartEdit(item: GalleryItem) {
    setEditingId(item.id);
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
      const nextItems = await fetchGalleryItems();

      if (active) {
        setItems(nextItems);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const currentItem =
    editingId !== null ? items.find((item) => item.id === editingId) : null;

  return (
    <div className="space-y-8">
      {successMessage && (
        <div className="fixed top-6 right-6 z-[110] rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg animate-fade-in">
          {successMessage}
        </div>
      )}

      <GalleryForm
        items={items}
        itemEditando={currentItem}
        editingId={editingId}
        onSave={handleSaveItem}
        onCancel={handleCancelEdit}
      />

      <GalleryList
        items={items}
        editingId={editingId}
        onEdit={handleStartEdit}
        onDelete={handleDeleteItem}
      />
    </div>
  );
}
