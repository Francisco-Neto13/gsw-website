"use client"
import Link from "next/link";
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from "next/navigation";
import { Settings, Users, Image as ImageIcon, LogOut } from "lucide-react";

const DASH_VERSION = "v0.1.0";

export default function DashboardOverview() {
  const router = useRouter();
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login"); 
    router.refresh(); 
  };

  return (
    <div className="py-6 md:py-10 px-4 md:px-0">
      <header className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gsw rounded-full" />
            <span className="text-gsw text-[10px] md:text-xs font-bold uppercase tracking-[0.35em]">
              Painel Administrativo
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
            Bem-vindo,<br className="md:hidden" />
            <span className="md:ml-2 bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Administrador
            </span>
          </h1>

          <p className="text-zinc-500 max-w-xl leading-relaxed italic text-sm md:text-base">
            Gerencie conteúdos, edite seções e controle os elementos visuais do site.
          </p>
        </div>

        <button 
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 px-6 py-4 md:py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-all duration-300 cursor-pointer active:scale-95 w-full md:w-auto"
        >
          <LogOut size={14} className="md:hidden" />
          Sair do Sistema
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Link 
          href="/admin/members" 
          className="group relative p-6 md:p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden hover:border-gsw/50 transition-all duration-500"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gsw/10 rounded-xl md:rounded-2xl flex items-center justify-center text-gsw mb-6 group-hover:scale-110 transition-transform duration-500">
              <Users size={28} />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">Membros</h2>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Edite perfis, cargos e informações da página pública.</p>
            <div className="mt-6 md:mt-8 text-gsw text-[10px] font-black uppercase tracking-widest opacity-70">Abrir Gerenciador</div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gsw/5 rounded-full blur-3xl" />
        </Link>

        <Link 
          href="/admin/gallery" 
          className="group relative p-6 md:p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-500">
              <ImageIcon size={28} />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">Galeria</h2>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Envie imagens, organize coleções e mídias.</p>
            <div className="mt-6 md:mt-8 text-purple-500 text-[10px] font-black uppercase tracking-widest opacity-70">Abrir Gerenciador</div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
        </Link>

        <Link 
          href="/admin/settings" 
          className="group relative p-6 md:p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden hover:border-zinc-400/50 transition-all duration-500 sm:col-span-2 lg:col-span-1"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Settings size={28} />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">Configurações</h2>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Gerencie sua conta e senhas de segurança.</p>
            <div className="mt-6 md:mt-8 text-zinc-400 text-[10px] font-black uppercase tracking-widest opacity-70">Acessar Painel</div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        </Link>
      </div>

      <section className="mt-8 md:mt-12 p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="grid grid-cols-2 sm:flex sm:items-center gap-6 md:gap-10">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-1">Database</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-bold text-zinc-300">Supabase</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-1">Storage</span>
            <span className="text-[11px] font-bold text-zinc-300 uppercase">Ativo</span>
          </div>
        </div>
        <div className="text-[10px] text-zinc-700 font-mono tracking-tight border-t border-zinc-800/50 pt-4 md:border-0 md:pt-0 text-center md:text-right">
          Dashboard {DASH_VERSION}
        </div>
      </section>
    </div>
  );
}