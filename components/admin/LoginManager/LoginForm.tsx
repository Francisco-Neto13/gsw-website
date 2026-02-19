"use client"
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SupportModal from "./SupportModal";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Por favor, preencha todos os campos para prosseguir.");
      return;
    }

    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError("E-mail ou senha incorretos. Verifique suas credenciais.");
        setLoading(false);
        return;
      }

      if (data.session) {
        router.replace("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("Erro de conexão ou servidor. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-gsw/10 via-purple-600/10 to-gsw/10 border-b border-zinc-800/50 p-8 text-center cursor-default">
          <div className="inline-block mb-4">
            <Link href="/" className="group block cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-gsw/20 via-purple-600/20 to-gsw/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-zinc-900 border border-gsw/30 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-gsw/60 transition-colors overflow-hidden">
                  <Image src="/favicon.ico" alt="GsW" width={40} height={40} className="object-contain" />
                </div>
              </div>
            </Link>
          </div>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
            Painel <span className="text-gsw">GsW</span>
          </h1>
          <p className="text-zinc-500 text-sm font-medium">Área Administrativa</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} noValidate className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                E-mail
              </label>
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="w-full bg-zinc-950/50 border border-zinc-800 p-3 rounded-xl focus:border-gsw focus:ring-2 focus:ring-gsw/20 outline-none transition-all text-white placeholder:text-zinc-600"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 cursor-default">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Senha
                </label>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-[10px] font-bold text-gsw hover:text-purple-400 uppercase tracking-tighter transition-colors cursor-pointer"
                >
                  Esqueceu a senha?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="w-full bg-zinc-950/50 border border-zinc-800 p-3 pr-12 rounded-xl focus:border-gsw focus:ring-2 focus:ring-gsw/20 outline-none transition-all text-white placeholder:text-zinc-600"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-gsw to-purple-600 hover:from-purple-600 hover:to-gsw disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-gsw/30 hover:shadow-gsw/50 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
            >
              {loading ? (
                <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Autenticando...</>
              ) : (
                <><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg> Acessar Painel</>
              )}
            </button>
          </form>
        </div>

        <div className="bg-zinc-950/50 border-t border-zinc-800/50 px-8 py-5 cursor-default">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span className="font-medium uppercase tracking-widest text-[10px]">Conexão Criptografada SSL/TLS</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-600">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span>Sistema Ativo</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <span>Supabase Auth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SupportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}