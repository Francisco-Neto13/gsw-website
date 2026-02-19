import { KeyRound, Loader2, Eye, EyeOff } from 'lucide-react';

interface PasswordFormProps {
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  showNew: boolean;
  setShowNew: (val: boolean) => void;
  strength: { label: string; score: number; color: string };
  loading: boolean;
  disabled: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const PasswordForm = ({ password, setPassword, confirmPassword, setConfirmPassword, showNew, setShowNew, strength, loading, disabled, onSubmit }: PasswordFormProps) => (
  <form onSubmit={onSubmit} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] space-y-6 backdrop-blur-xl h-full">
    <div className="flex items-center gap-3 text-zinc-400">
      <KeyRound size={20} className="text-purple-500" />
      <h3 className="text-xs font-black uppercase tracking-[0.2em]">Alterar Senha</h3>
    </div>

    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-[9px] font-black uppercase tracking-widest text-purple-500 ml-1">Nova Senha</label>
        <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            placeholder="Digite a nova senha"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            disabled={disabled}
            className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500 text-white placeholder:text-zinc-700 disabled:opacity-20 transition-all pr-12"
          />
          <button 
            type="button" 
            onClick={() => setShowNew(!showNew)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            {showNew ? <EyeOff size={18}/> : <Eye size={18}/>}
          </button>
        </div>
      </div>

      {password && (
        <div className="px-1 space-y-2 animate-in slide-in-from-top-1 duration-300">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Força: {strength.label}</span>
          </div>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-500 ${strength.color}`} style={{ width: `${strength.score}%` }} />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-1">Repetir Nova Senha</label>
        <input
          type={showNew ? "text" : "password"}
          placeholder="Confirme sua nova senha"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          required
          disabled={disabled}
          className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500 text-white placeholder:text-zinc-700 disabled:opacity-20 transition-all"
        />
      </div>
    </div>

    <button 
      disabled={loading || disabled || !password || password !== confirmPassword} 
      className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all disabled:opacity-20 cursor-pointer mt-6 active:scale-95"
    >
      {loading ? <Loader2 className="animate-spin mx-auto" size={16}/> : 'Atualizar Senha'}
    </button>
  </form>
);