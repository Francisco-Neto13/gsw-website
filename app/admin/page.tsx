"use client"
import MembersManager from "@/components/admin/MembersManager"; 

export default function AdminPage() {
  return (
    <main className="p-6 md:p-10 bg-zinc-950 min-h-screen text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-red-600 tracking-tighter">GSW ADMIN PANEL</h1>
          <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-zinc-400">
            Database Live
          </span>
        </header>
        <MembersManager />
      </div>
    </main>
  );
}