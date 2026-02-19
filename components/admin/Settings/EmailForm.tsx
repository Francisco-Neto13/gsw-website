import { Mail, Loader2 } from 'lucide-react';

interface EmailFormProps {
  currentEmail: string | null;
  newEmail: string;
  setNewEmail: (val: string) => void;
  loading: boolean;
  disabled: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const EmailForm = ({ currentEmail, newEmail, setNewEmail, loading, disabled, onSubmit }: EmailFormProps) => (
  <form onSubmit={onSubmit} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] space-y-6 backdrop-blur-xl flex flex-col justify-between h-full">
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-zinc-400">
        <Mail size={20} className="text-gsw" />
        <h3 className="text-xs font-black uppercase tracking-[0.2em]">Alterar E-mail</h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-1">E-mail Atual</label>
          <input 
            type="text" 
            value={currentEmail || ''} 
            disabled 
            className="w-full bg-black/20 border border-zinc-800/50 rounded-2xl px-5 py-4 text-sm text-zinc-500 cursor-not-allowed opacity-60 italic" 
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-gsw ml-1">Novo E-mail</label>
          <input
            type="email"
            placeholder="Digite o novo endereço de e-mail"
            value={newEmail}
            onChange={(e)=>setNewEmail(e.target.value)}
            required
            disabled={disabled}
            className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-gsw text-white placeholder:text-zinc-700 disabled:opacity-20 transition-all"
          />
        </div>
      </div>
    </div>

    <button 
      disabled={loading || disabled || !newEmail} 
      className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-gsw hover:text-white transition-all disabled:opacity-20 cursor-pointer mt-6 active:scale-95"
    >
      {loading ? <Loader2 className="animate-spin mx-auto" size={16}/> : 'Atualizar E-mail'}
    </button>
  </form>
);