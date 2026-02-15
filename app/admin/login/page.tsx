"use client"
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Tentando iniciar sessão...");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Erro retornado pelo Supabase:", error.message);
        alert("Erro no acesso: " + error.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        console.log("Login realizado com sucesso!");
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
      alert("Ocorreu um erro inesperado na conexão.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 text-white font-sans">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-red-600 italic tracking-tighter">GSW SECURE ACCESS</h1>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Identificação de Dev</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-zinc-400 ml-1">E-mail</label>
            <input 
              type="email"
              placeholder="seu@email.com"
              className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-zinc-400 ml-1">Senha</label>
            <input 
              type="password"
              placeholder="••••••••"
              className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 font-bold py-3 rounded-lg transition-all active:scale-95 mt-4"
          >
            {loading ? "Verificando..." : "Entrar no Painel"}
          </button>
        </form>
      </div>
    </main>
  );
}