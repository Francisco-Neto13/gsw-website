"use client"
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm bg-black/60 animate-in fade-in duration-300 cursor-default"
      onClick={onClose} 
    >
      <div 
        className="bg-zinc-900 border border-zinc-800 w-full max-w-sm rounded-2xl p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-300 cursor-default"
        style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
        onClick={(e) => e.stopPropagation()} 
      >
        <h3 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 uppercase tracking-tighter italic">
          Suporte ao Administrador
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-5 sm:mb-6">
          As credenciais de acesso são fornecidas exclusivamente pelo desenvolvedor do projeto. 
          Caso tenha perdido o acesso ou precise de uma nova conta, entre em contato diretamente com o suporte técnico da plataforma.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-widest cursor-pointer active:scale-95"
        >
          Entendido
        </button>
      </div>
    </div>,
    document.body
  );
}