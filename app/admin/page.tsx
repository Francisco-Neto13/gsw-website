"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Membro {
  id: number;
  name: string;
  role: string;
  img: string;
  tags: string[];
}

export default function AdminPage() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newTags, setNewTags] = useState(""); 

  async function fetchMembros() {
    setLoading(true);
    const { data, error } = await supabase
      .from('membros')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) {
      console.error("Erro ao buscar:", error.message);
    } else {
      setMembros((data as Membro[]) || []);
    }
    setLoading(false);
  }

  async function addMembro(e: React.FormEvent) {
    e.preventDefault();
    
    const tagsArray = newTags.split(',').map(tag => tag.trim()).filter(tag => tag !== "");

    const { error } = await supabase.from('membros').insert([
      { 
        name: newName, 
        role: newRole, 
        img: newImg, 
        tags: tagsArray 
      }
    ]);

    if (error) {
      alert("Erro ao inserir: " + error.message);
    } else {
      setNewName(""); 
      setNewRole(""); 
      setNewImg(""); 
      setNewTags("");
      fetchMembros(); 
    }
  }

  async function deleteMembro(id: number) {
    if (confirm("Deseja realmente remover este membro da guilda?")) {
      const { error } = await supabase
        .from('membros')
        .delete()
        .eq('id', id);

      if (error) {
        alert("Erro ao deletar: " + error.message);
      } else {
        fetchMembros();
      }
    }
  }

  useEffect(() => {
    fetchMembros();
  }, []);

  if (loading && membros.length === 0) {
    return <div className="p-10 text-white bg-zinc-950 min-h-screen">Carregando dados da guilda...</div>;
  }

  return (
    <main className="p-6 md:p-10 bg-zinc-950 min-h-screen text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-red-600 tracking-tighter">GSW ADMIN PANEL</h1>
          <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-zinc-400">
            Database Live
          </span>
        </header>

        <section className="mb-12 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 shadow-xl">
          <h2 className="text-xl mb-6 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Recrutar Novo Membro
          </h2>
          <form onSubmit={addMembro} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Nome do Jogador</label>
              <input 
                className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Ex: BadBoyCJ"
                value={newName} onChange={(e) => setNewName(e.target.value)} required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Cargo / Role</label>
              <input 
                className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Ex: Guild Leader"
                value={newRole} onChange={(e) => setNewRole(e.target.value)} required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Arquivo de Imagem</label>
              <input 
                className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Ex: rafael.webp"
                value={newImg} onChange={(e) => setNewImg(e.target.value)} required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Tags (Separadas por vírgula)</label>
              <input 
                className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:ring-2 focus:ring-red-500 outline-none transition-all"
                placeholder="Ex: Dev, Veterano, Goat"
                value={newTags} onChange={(e) => setNewTags(e.target.value)}
              />
            </div>
            <button type="submit" className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-2 shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]">
              Confirmar Recrutamento
            </button>
          </form>
        </section>

        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-semibold">Membros Ativos ({membros.length})</h2>
            <button onClick={fetchMembros} className="text-sm text-zinc-500 hover:text-white underline">Atualizar lista</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {membros.map((m) => (
              <div key={m.id} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 flex justify-between items-center group hover:border-zinc-600 transition-colors">
                <div>
                  <h3 className="font-bold text-zinc-100">{m.name}</h3>
                  <p className="text-sm text-zinc-500 uppercase tracking-tighter">{m.role}</p>
                  <div className="flex gap-1 mt-2">
                    {m.tags?.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 border border-zinc-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => deleteMembro(m.id)}
                  className="bg-zinc-800 hover:bg-red-600/20 text-zinc-500 hover:text-red-500 p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  title="Remover membro"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}