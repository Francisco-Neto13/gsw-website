"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  const navItems = [
    { name: 'Início', href: '/admin' },
    { name: 'Membros', href: '/admin/members' },
    { name: 'Galeria', href: '/admin/gallery' },
    { name: 'Configurações', href: '/admin/settings' }, 
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white cursor-default">
      {!isLoginPage && (
        <nav className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-[100]">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-gsw font-black tracking-tighter text-xl cursor-default">
                GsW <span className="text-zinc-600 text-[10px] uppercase tracking-widest ml-1">Painel</span>
              </span>
              
              <div className="flex gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      pathname === item.href 
                        ? 'bg-gsw text-white shadow-lg shadow-gsw/20' 
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/" 
              className="flex items-center gap-2 text-[10px] text-zinc-600 hover:text-white transition-colors uppercase font-black tracking-[0.2em] group cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Voltar ao site
            </Link>
          </div>
        </nav>
      )}

      <main className={`flex-1 w-full mx-auto animate-in fade-in duration-700 ${!isLoginPage ? 'max-w-7xl p-8' : ''}`}>
        {children}
      </main>

      {!isLoginPage && (
        <footer className="w-full border-t border-zinc-900 bg-black">
          <Footer />
        </footer>
      )}
    </div>
  );
}