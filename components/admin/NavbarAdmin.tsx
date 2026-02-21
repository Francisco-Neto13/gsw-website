"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Image as ImageIcon, Settings, ArrowLeft } from "lucide-react";

export default function NavbarAdmin() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', href: '/admin', icon: LayoutDashboard },
    { name: 'Membros', href: '/admin/members', icon: Users },
    { name: 'Galeria', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Config', href: '/admin/settings', icon: Settings }, 
  ];

  return (
    <>
      <nav className="border-b border-zinc-800/50 bg-black/80 backdrop-blur-xl sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-gsw font-black tracking-tighter text-2xl cursor-default">
              GsW <span className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] ml-1 hidden sm:inline">Painel</span>
            </span>
            
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    pathname === item.href 
                      ? 'bg-gsw text-white shadow-lg shadow-gsw/20' 
                      : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/" 
            className="flex items-center gap-2 text-[10px] text-zinc-500 hover:text-white transition-colors uppercase font-black tracking-[0.2em] group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Voltar ao site</span>
            <span className="sm:hidden text-gsw">Sair</span>
          </Link>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-lg border-t border-zinc-800 z-[100] px-4 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? 'text-gsw' : 'text-zinc-500'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}