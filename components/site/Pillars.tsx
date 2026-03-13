export default function Pillars() {
  const pillars = [
    {
      title: "Warteam",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /><line x1="13" y1="19" x2="19" y2="13" /><line x1="16" y1="16" x2="20" y2="20" /><line x1="19" y1="21" x2="20" y2="20" /><line x1="14.5" y1="17.5" x2="15" y2="18" /><line x1="17.5" y1="14.5" x2="18" y2="15" /><line x1="2" y1="19" x2="2" y2="22" /><line x1="2" y1="22" x2="5" y2="22" /><line x1="5" y1="22" x2="22" y2="5" /><line x1="22" y1="5" x2="22" y2="2" /><line x1="22" y1="2" x2="19" y2="2" /><line x1="19" y1="2" x2="2" y2="19" /></svg>
      ),
      description: "Os guerreiros, nossa vanguarda que todos os dias colore o mapa do Wynn de rosa. Lidam com tudo relacionado às Guild Wars dentro do Wynn.",
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      title: "Desenvolvimento",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
      ),
      description: "Pessoas especializadas em criar ferramentas para a GsW. Responsáveis por todos os bots que nos ajudam diariamente, como o Guardian Of Wynn.",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Conteúdo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
      ),
      description: "Lidam com o conteúdo próprio de Wynncraft: builds públicas, partys de Annie e ajuda a novatos.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Tickets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" /></svg>
      ),
      description: "Responsáveis pela introdução de novos membros na guilda através do sistema de Tickets nativo do nosso bot exclusivo.",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Eventos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
      ),
      description: "Cuidam da organização e execução de eventos. Com canais abertos ao público, todos podem ver como planejamos nossa diversão.",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="pilares" className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal-on-scroll mb-10 text-center sm:mb-20">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:mb-6 sm:text-6xl">
            Os 5 <span className="text-gsw">Pilares</span>
          </h2>
          <p className="mx-auto max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-lg">
            A estrutura que sustenta a GsW. Estas divisões são destinadas aos membros que alcançam o cargo de{" "}
            <span className="font-bold text-white underline decoration-gsw">Capitão</span>, permitindo que escolham em qual frente desejam integrar e fortalecer o legado da guilda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`reveal-on-scroll group relative flex flex-col items-center rounded-3xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-transform duration-200 will-change-transform hover:-translate-y-2 hover:border-gsw/40 sm:p-10 ${
                index >= 3 ? "lg:translate-x-[50%]" : ""
              }`}
            >
              <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${pillar.color}`} />

              <div className="mb-5 inline-flex rounded-2xl bg-white/5 p-4 text-gsw shadow-[0_0_20px_rgba(113,22,173,0.2)] transition-all duration-200 group-hover:scale-110 group-hover:bg-gsw group-hover:text-white sm:mb-8 sm:p-5">
                {pillar.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-white sm:mb-4 sm:text-2xl">
                {pillar.title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200 sm:text-base">
                {pillar.description}
              </p>

              <div className="absolute right-6 bottom-4 select-none text-4xl font-black italic text-white/5 group-hover:text-gsw/10 sm:right-8 sm:text-5xl">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll mt-16 text-center sm:mt-24">
          <p className="inline-block max-w-2xl border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
            &ldquo;Divididos em frentes, mas unidos por um propósito. Os{" "}
            <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">Pilares</span>{" "}
            não são apenas setores; são os alicerces de um império que se recusa a cair.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
