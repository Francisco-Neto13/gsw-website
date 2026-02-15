"use client"
import MembersManager from "@/components/admin/MembersManager";
import Footer from "@/components/shared/Footer"; 

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      
      <main className="flex-1 p-6 md:p-10 text-white font-sans"> 
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold text-purple-600 tracking-tighter">GSW ADMIN PANEL</h1>
            <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-zinc-400">
              Database Live
            </span>
          </header>
          
          <MembersManager />
        </div>
      </main>
      
      <Footer /> 
    </div>
  );
}