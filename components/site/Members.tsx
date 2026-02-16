"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { supabase } from "@/lib/supabase";

interface Member {
  id?: number;
  name: string;
  role: string;
  img: string;
  tags?: string[];
}

const MemberCard = memo(({ member }: { member: Member }) => {
  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name}&background=7116ad&color=fff&size=400`;
  }, [member.name]);

  return (
    <div className="group relative bg-black/40 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-gsw/40 hover:-translate-y-1 overflow-hidden">
      
      <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          width="400"
          height="400"
          onError={handleError}
          className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="text-center relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gsw/80 mb-1 block">
          {member.role}
        </span>

        <h3 className="text-xl font-black text-white mb-4 tracking-tight transition-colors duration-300 group-hover:text-gsw italic">
          {member.name}
        </h3>

        <div className="flex flex-wrap justify-center gap-2">
          {member.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-zinc-500 transition-all duration-300 group-hover:text-zinc-300 group-hover:border-gsw/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gsw/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
    </div>
  );
});

MemberCard.displayName = "MemberCard";

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    let mounted = true;

    async function fetchMembers() {
      const { data, error } = await supabase
        .from("membros")
        .select("*")
        .order("ordem", { ascending: true });

      if (!error && data && mounted) {
        setMembers(data);
      }
    }

    fetchMembers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="membros" className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(113,22,173,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-20 text-center">
          <span className="block mb-4 text-xs font-bold tracking-[0.6em] uppercase text-gsw">
            Elite de Wynn
          </span>

          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-8">
            Os <span className="text-gsw">Guardiões Principais</span>
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto italic leading-relaxed">
            "Não são apenas nomes em uma lista, são as lendas que escrevem as crônicas da GsW a cada batalha."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <MemberCard
              key={member.id ?? member.name}
              member={member}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
