"use client"

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/60 animate-in fade-in duration-300 cursor-default"
      onClick={onClose} 
    >
      <div 
        className="bg-zinc-900 border border-zinc-800 w-full max-w-sm rounded-2xl p-8 shadow-2xl relative animate-in zoom-in-95 cursor-default"
        onClick={(e) => e.stopPropagation()} 
      >
        <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter italic">
          Suporte ao Administrador
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          As credenciais de acesso são fornecidas exclusivamente pelo desenvolvedor do projeto. 
          Caso tenha perdido o acesso ou precise de uma nova conta, entre em contato diretamente com o suporte técnico da plataforma.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-widest cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}