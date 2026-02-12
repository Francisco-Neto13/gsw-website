"use client";

export default function Members() {
  const members = [
    { name: "BadBoyCJ", role: "Eterno Líder", tags: ["Fundador", "Lenda", "Pilar"], img: "cj.png" },
    { name: "RafaelGomes", role: "Guild Leader", tags: ["Dev", "Estrategista", "Visionário"], img: "rafael.png" },
    { name: "Julinho", role: "Alto Comando", tags: ["Diplomata", "Guerreiro", "Brazucoin"], img: "julinho.png" },
    { name: "Six", role: "Guardião", tags: ["Executor", "Frio", "Letal"], img: "six.png" },
    { name: "m4ninja", role: "Guardião", tags: ["Executor", "Frio", "Letal"], img: "m4ninja.png" },
    { name: "P4gu", role: "Guardião", tags: ["Criativo", "Roteirista", "Dedicado"], img: "p4gu.png" },
    { name: "K0tae", role: "Guardião", tags: ["Warteam", "Implacável", "Fiel"], img: "k0tae.png" },
    { name: "Bigouslino", role: "Guardião", tags: ["Carismático", "Explorador", "Resiliente"], img: "bigouslino.png" },
    { name: "Fustaco", role: "Guardião", tags: ["Veterano", "Sábio", "Mestre de Armas"], img: "fustaco.png" },
    { name: "Killer", role: "Guardião", tags: ["Veterano", "Sábio", "Mestre de Armas"], img: "killer.png" },
    { name: "Mor7ee", role: "Guardião", tags: ["Sombrio", "Tático", "Silencioso"], img: "mor7ee.png" },
    { name: "iYasuo_", role: "Guardião", tags: ["Habilidoso", "Veloz", "Combatente"], img: "iyasuo.png" },
    { name: "Volkzz101", role: "Guardião", tags: ["Engraçado", "Ânimo do Chat", "Protetor"], img: "volkzz.png" },
    { name: "Cavalheri", role: "Guardião", tags: ["Cavalheiro", "Leal", "Braço Direito"], img: "cavalheri.png" },
    { name: "Atmisuki", role: "Guardião", tags: ["Místico", "Lore Master", "Atento"], img: "atmisuki.png" },
    { name: "Closerapha", role: "Guardião", tags: ["Agitador", "Eventos", "Comediante"], img: "closerapha.png" },
    { name: "yFelipeMC", role: "Guardião", tags: ["Prodígio", "Warteam", "Calculista"], img: "felipe.png" },
    { name: "Fallingo", role: "Guardião", tags: ["Destemido", "Vanguarda", "Impacto"], img: "fallingo.png" },
    { name: "Kw", role: "Guardião", tags: ["Analista", "Eficiente", "Rápido"], img: "kw.jpeg" },
    { name: "Radicchi", role: "Guardião", tags: ["Líder de Esquadrão", "Técnico", "Firme"], img: "radicchi.png" },
    { name: "Frame", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "frame.png" },
    { name: "Eduus", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "eduus.png" },
    { name: "Victo", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "victo.png" },
    { name: "Faye", role: "Guardião", tags: ["Estético", "Designer", "Observador"], img: "faye.png" },
  ];

  return (
    <section id="membros" className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(113,22,173,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20 text-center">
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
          {members.map((member, index) => (
            <div 
              key={index}
              className="reveal-on-scroll group relative bg-black/40 border border-white/10 rounded-2xl p-4 transition-all duration-500 hover:border-gsw/40 hover:-translate-y-2"
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">
                <img 
                  src={`/members/${member.img}`} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=7116ad&color=fff`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gsw/80 mb-1 block">
                  {member.role}
                </span>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-gsw transition-colors italic">
                  {member.name}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 group-hover:border-gsw/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gsw/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}