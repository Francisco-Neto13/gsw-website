"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import LoginForm from "@/components/admin/LoginManager/LoginForm";

export default function AdminLogin() {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace("/admin");
      } else {
        setIsChecking(false);
      }
    };
    checkUser();
  }, [router]);

  if (isChecking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gsw/20 border-t-gsw rounded-full animate-spin mx-auto" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin mx-auto" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }} />
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-6 font-bold">Verificando acesso...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-black relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,22,173,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gsw/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 p-6">
        <Link href="/" className="inline-flex items-center gap-3 text-zinc-500 hover:text-white transition-all group cursor-pointer">
          <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-gsw/50 group-hover:bg-zinc-800/80 transition-all shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Voltar</span>
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest group-hover:text-gsw transition-colors">Página Inicial</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 relative">
        <LoginForm />
      </div>

      <div className="relative z-10 w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}