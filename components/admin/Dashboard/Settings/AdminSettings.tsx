'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, AlertCircle, ShieldCheck, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';

export default function AdminSettings() {
  const [currentEmail, setCurrentEmail] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setCurrentEmail(user.email ?? null);
    };
    fetchUser();
  }, []);

  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: '', color: 'bg-zinc-800' };
    let score = 0;
    if (pass.length >= 6) score++;
    if (pass.length >= 10) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    if (score <= 2) return { score: 33, label: 'Fraca', color: 'bg-red-500' };
    if (score <= 4) return { score: 66, label: 'Média', color: 'bg-yellow-500' };
    return { score: 100, label: 'Forte', color: 'bg-emerald-500' };
  };

  const verifyCurrentPassword = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) return { error: { message: "Usuário não encontrado." } };
    const { error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });
    setVerified(!error);
    return { error };
  };

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error: authError } = await verifyCurrentPassword();
    if (authError) {
      setMessage({ type: 'error', text: 'Senha atual incorreta.' });
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({ email });
    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: 'Confirme a alteração nos dois e-mails.' });
      setEmail(''); setCurrentPassword(''); setVerified(false);
    }
    setLoading(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'As senhas não coincidem.' });
      return;
    }
    setLoading(true);
    const { error: authError } = await verifyCurrentPassword();
    if (authError) {
      setMessage({ type: 'error', text: 'Senha atual incorreta.' });
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: 'Senha atualizada com sucesso.' });
      setPassword(''); setConfirmPassword(''); setCurrentPassword(''); setVerified(false);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700 max-w-7xl mx-auto py-6 sm:py-10 px-0">
      
      {message && (
        <div className={`p-4 rounded-2xl flex items-center gap-3 border animate-in slide-in-from-top-2 duration-300 ${
          message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {message.type === 'success' ? <CheckCircle2 size={16}/> : <AlertCircle size={16}/>}
          <span className="text-[10px] font-black uppercase tracking-widest">{message.text}</span>
        </div>
      )}

      <div className={`relative border rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 transition-all duration-500 ${verified ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-zinc-900/40 border-zinc-800'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className={`flex items-center gap-3 shrink-0 ${verified ? 'text-emerald-400' : 'text-zinc-400'}`}>
            {verified ? <ShieldCheck size={18}/> : <ShieldAlert size={18}/>}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-black uppercase tracking-widest">{verified ? "Identidade Verificada" : "Sua Senha Atual"}</span>
              <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">Obrigatório para qualquer alteração</span>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Digite sua senha atual para autorizar"
              value={currentPassword}
              onChange={(e) => { setCurrentPassword(e.target.value); setVerified(false); }}
              className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm focus:outline-none focus:border-gsw transition-all text-white placeholder:text-zinc-700 pr-12"
            />
            <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400">
              {showCurrent ? <EyeOff size={16}/> : <Eye size={16}/>}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
        <EmailForm 
          currentEmail={currentEmail} 
          newEmail={email} 
          setNewEmail={setEmail} 
          loading={loading} 
          disabled={!currentPassword}
          onSubmit={handleUpdateEmail}
        />
        
        <PasswordForm 
          password={password} 
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          showNew={showNew}
          setShowNew={setShowNew}
          strength={getPasswordStrength(password)}
          loading={loading}
          disabled={!currentPassword}
          onSubmit={handleUpdatePassword}
        />
      </div>
    </div>
  );
}