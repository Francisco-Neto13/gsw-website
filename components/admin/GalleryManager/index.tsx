"use client"
import { useEffect, useState } from "react";
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

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  async function fetchGallery() {
    const { data, error } = await supabase
      .from('galeria')
      .select('*')
      .order('ordem', { ascending: true });
    
    if (!error && data) {
      setItems(data as GalleryItem[]);
    }
  }

  async function handleSaveItem(itemData: Omit<GalleryItem, 'id'>) {
    const { error} = editingId 
      ? await supabase.from('galeria').update(itemData).eq('id', editingId)
      : await supabase.from('galeria').insert([itemData]);

    if (!error) {
      showSuccessMessage(editingId ? "✅ Galeria atualizada!" : "✅ Foto adicionada!");
      setEditingId(null);
      fetchGallery();
      return true;
    }
    return false;
  }

  async function handleDeleteItem(id: number) {
    const { error } = await supabase.from('galeria').delete().eq('id', id);
    if (!error) {
      showSuccessMessage("🗑️ Foto removida!");
      fetchGallery();
    }
  }

  function handleStartEdit(item: GalleryItem) {
    setEditingId(item.id);
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
    fetchGallery();
  }, []);

  const itemEditando = editingId 
    ? items.find(i => i.id === editingId) 
    : null;

  return (
    <div className="space-y-8">
      {successMessage && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {successMessage}
        </div>
      )}

      <GalleryForm
        items={items}
        itemEditando={itemEditando}
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