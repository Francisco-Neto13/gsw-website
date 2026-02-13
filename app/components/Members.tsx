"use client";

import { useRef, useState, useEffect, memo } from 'react';

const MemberCard = memo(({ 
  member, 
  isVisible 
}: { 
  member: any; 
  isVisible: boolean;
}) => {
  if (!isVisible) {
    return (
      <div className="relative bg-black/40 border border-white/10 rounded-2xl p-4 overflow-hidden min-h-[400px]">
        <div className="animate-pulse">
          <div className="aspect-square w-full mb-6 rounded-xl bg-zinc-800/50" />
          <div className="h-3 bg-zinc-800/50 rounded w-1/3 mx-auto mb-2" />
          <div className="h-5 bg-zinc-800/50 rounded w-2/3 mx-auto mb-4" />
          <div className="flex gap-2 justify-center">
            <div className="h-4 w-16 bg-zinc-800/50 rounded" />
            <div className="h-4 w-16 bg-zinc-800/50 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative bg-black/40 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-gsw/40 hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-xl bg-zinc-900">
        <img 
          src={`/members/${member.img}`} 
          alt={member.name}
          loading="lazy"
          decoding="async"
          width="400"
          height="400"
          className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=7116ad&color=fff&size=400`;
          }}
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
          {member.tags.map((tag: string, tIndex: number) => (
            <span 
              key={tIndex}
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

MemberCard.displayName = 'MemberCard';

export default function Members() {
  const members = [
    { name: "BadBoyCJ", role: "Eterno Líder", tags: ["Fundador", "Lenda", "Pilar"], img: "cj.webp" },
    { name: "RafaelGomes", role: "Guild Leader", tags: ["Dev", "Estrategista", "Visionário"], img: "rafael.webp" },
    { name: "Julinho", role: "Alto Comando", tags: ["Diplomata", "Guerreiro", "Brazucoin"], img: "julinho.webp" },
    { name: "Six", role: "Guardião", tags: ["Executor", "Frio", "Letal"], img: "six.webp" },
    { name: "m4ninja", role: "Guardião", tags: ["Executor", "Frio", "Letal"], img: "m4ninja.webp" },
    { name: "P4gu", role: "Guardião", tags: ["Criativo", "Roteirista", "Dedicado"], img: "p4gu.webp" },
    { name: "K0tae", role: "Guardião", tags: ["Warteam", "Implacável", "Fiel"], img: "k0tae.webp" },
    { name: "Bigouslino", role: "Guardião", tags: ["Carismático", "Explorador", "Resiliente"], img: "bigouslino.webp" },
    { name: "Fustaco", role: "Guardião", tags: ["Veterano", "Sábio", "Mestre de Armas"], img: "fustaco.webp" },
    { name: "Killer", role: "Guardião", tags: ["Veterano", "Sábio", "Mestre de Armas"], img: "killer.webp" },
    { name: "Mor7ee", role: "Guardião", tags: ["Sombrio", "Tático", "Silencioso"], img: "mor7ee.webp" },
    { name: "iYasuo_", role: "Guardião", tags: ["Habilidoso", "Veloz", "Combatente"], img: "iyasuo.webp" },
    { name: "Volkzz101", role: "Guardião", tags: ["Engraçado", "Ânimo do Chat", "Protetor"], img: "volkzz.webp" },
    { name: "Cavalheri", role: "Guardião", tags: ["Cavalheiro", "Leal", "Braço Direito"], img: "cavalheri.webp" },
    { name: "Atmisuki", role: "Guardião", tags: ["Místico", "Lore Master", "Atento"], img: "atmisuki.webp" },
    { name: "Closerapha", role: "Guardião", tags: ["Agitador", "Eventos", "Comediante"], img: "closerapha.webp" },
    { name: "yFelipeMC", role: "Guardião", tags: ["Prodígio", "Warteam", "Calculista"], img: "felipe.webp" },
    { name: "Fallingo", role: "Guardião", tags: ["Destemido", "Vanguarda", "Impacto"], img: "fallingo.webp" },
    { name: "Kw", role: "Guardião", tags: ["Analista", "Eficiente", "Rápido"], img: "kw.webp" },
    { name: "Radicchi", role: "Guardião", tags: ["Líder de Esquadrão", "Técnico", "Firme"], img: "radicchi.webp" },
    { name: "Frame", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "frame.webp" },
    { name: "Eduus", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "eduus.webp" },
    { name: "Victo", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "victo.webp" },
    { name: "Faye", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "faye.webp" },
  ];

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 8 }); 
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const changes = entries.filter(entry => entry.isIntersecting);
        
        if (changes.length > 0) {
          setVisibleRange((prev) => {
            let newStart = prev.start;
            let newEnd = prev.end;

            changes.forEach((entry) => {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              newStart = Math.min(newStart, Math.max(0, index - 1)); 
              newEnd = Math.max(newEnd, Math.min(members.length - 1, index + 8));
            });

            if (newStart !== prev.start || newEnd !== prev.end) {
              return { start: newStart, end: newEnd };
            }
            return prev;
          });
        }
      },
      {
        root: null,
        rootMargin: '100px', 
        threshold: 0,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [members.length]);

  useEffect(() => {
    const currentObserver = observerRef.current;
    const currentSentinels = Array.from(sentinelRefs.current.values());

    if (currentObserver && currentSentinels.length > 0) {
      currentSentinels.forEach((sentinel) => {
        currentObserver.observe(sentinel);
      });
    }
  }, [visibleRange]);

  const setSentinelRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      sentinelRefs.current.set(index, el);
    } else {
      sentinelRefs.current.delete(index);
    }
  };

  return (
    <section id="membros" className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(113,22,173,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="block mb-4 text-xs font-bold tracking-[0.6em] uppercase text-gsw">
            Elite de Wynn
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-8">
            Os <span className="text-gsw">Guardiões</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto italic leading-relaxed">
            "Não são apenas nomes em uma lista, são as lendas que escrevem as crônicas da GsW a cada batalha."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => {
            const isVisible = index >= visibleRange.start && index <= visibleRange.end;
            const isSentinel = index % 6 === 0; 

            return (
              <div
                key={member.name}
                ref={isSentinel ? setSentinelRef(index) : undefined}
                data-index={index}
              >
                <MemberCard 
                  member={member} 
                  isVisible={isVisible}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
