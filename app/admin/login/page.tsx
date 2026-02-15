"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
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
    <main className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,22,173,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-gsw/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="flex-1 flex items-center justify-center p-6 relative">
        <LoginForm />
      </div>

      <div className="relative z-10 w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}