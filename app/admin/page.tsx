"use client"
import Link from "next/link";

const DASH_VERSION = "v0.1.0";

export default function AdminPage() {
  return (
    <div className="py-10">

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-gsw rounded-full" />
          <span className="text-gsw text-xs font-bold uppercase tracking-[0.35em]">
            Painel Administrativo
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
          Bem-vindo,
          <span className="ml-2 bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            Administrador
          </span>
        </h1>

        <p className="text-zinc-500 mt-5 max-w-xl leading-relaxed italic">
          Gerencie conteúdos, edite seções e controle os elementos visuais do site.
        </p>
      </header>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link 
          href="/admin/members" 
          className="group relative p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-gsw/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gsw/10 rounded-2xl flex items-center justify-center text-gsw mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
            </div>

            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
              Membros
            </h2>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
              Edite perfis, cargos e informações exibidas na página pública.
            </p>

            <div className="mt-8 text-gsw text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
              Abrir Gerenciador
            </div>
          </div>

          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gsw/5 rounded-full blur-3xl group-hover:bg-gsw/10 transition-colors" />
        </Link>


        <Link 
          href="/admin/gallery" 
          className="group relative p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
              </svg>
            </div>

            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
              Galeria
            </h2>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
              Envie imagens, organize coleções e gerencie mídia exibida no site.
            </p>

            <div className="mt-8 text-purple-500 text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
              Abrir Gerenciador
            </div>
          </div>

          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
        </Link>

      </div>


      <section className="mt-12 p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-1">
              Banco de Dados
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-zinc-300">
                Supabase conectado
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-1">
              Armazenamento
            </span>
            <span className="text-xs font-bold text-zinc-300">
              Operacional
            </span>
          </div>

        </div>

        <div className="text-[10px] text-zinc-700 font-mono tracking-tight">
          Dashboard {DASH_VERSION}
        </div>

      </section>
    </div>
  );
}
