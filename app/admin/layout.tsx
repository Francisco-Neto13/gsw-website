"use client"
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";
import NavbarAdmin from "@/components/admin/NavbarAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white cursor-default">
      {!isLoginPage && <NavbarAdmin />}

      <main className={`flex-1 w-full mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700 
        ${!isLoginPage ? 'max-w-7xl p-6 md:p-12 pb-24 md:pb-12' : ''}`}>
        {children}
      </main>

      {!isLoginPage && (
        <footer className="w-full border-t border-zinc-900 bg-black hidden md:block">
          <Footer />
        </footer>
      )}
    </div>
  );
}