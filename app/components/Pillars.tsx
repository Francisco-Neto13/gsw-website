export default function Pillars() {
  const pillars = [
    {
      title: "Warteam",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" y1="19" x2="19" y2="13"></line><line x1="16" y1="16" x2="20" y2="20"></line><line x1="19" y1="21" x2="20" y2="20"></line><line x1="14.5" y1="17.5" x2="15" y2="18"></line><line x1="17.5" y1="14.5" x2="18" y2="15"></line><line x1="2" y1="19" x2="2" y2="22"></line><line x1="2" y1="22" x2="5" y2="22"></line><line x1="5" y1="22" x2="22" y2="5"></line><line x1="22" y1="5" x2="22" y2="2"></line><line x1="22" y1="2" x2="19" y2="2"></line><line x1="19" y1="2" x2="2" y2="19"></line></svg>
      ),
      description: "Os guerreiros, nossa vanguarda que todos os dias colore o mapa do Wynn de rosa. Lidam com tudo relacionado às Guild Wars dentro do Wynn.",
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      title: "Desenvolvimento",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
      ),
      description: "Pessoas especializadas em criar ferramentas para a GsW. Responsáveis por todos os BOTs que nos ajudam diariamente, como o Guardian Of Wynn.",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Conteúdo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      ),
      description: "Lidam com o conteúdo próprio de Wynncraft: builds públicas, partys de Annie e ajuda a novatos. Sigam o exemplo do grande Volkzz101.",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Tickets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
      ),
      description: "Responsáveis pela introdução de novos membros na guilda através do sistema de Tickets nativo do nosso BOT exclusivo.",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Eventos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
      ),
      description: "Cuidam da organização e execução de eventos. Com canais abertos ao público, todos podem ver como planejamos nossa diversão.",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="pilares" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gsw/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20 text-center">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Os 5 <span className="text-gsw">Pilares</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed text-lg">
            A estrutura que sustenta a GsW. Estas divisões são destinadas aos membros que alcançam o cargo de <span className="text-white font-bold underline decoration-gsw">Capitão</span>, permitindo que escolham em qual frente desejam integrar e fortalecer o legado da guilda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {pillars.map((pilar, index) => (
            <div 
              key={index}
              className={`reveal-on-scroll group relative p-10 rounded-3xl border border-white/10 bg-zinc-900/20 backdrop-blur-md transition-all duration-500 hover:border-gsw/40 hover:-translate-y-2 text-center flex flex-col items-center ${
                index >= 3 ? "lg:translate-x-[50%]" : "" // Ajuste visual para centralizar os últimos dois se quiser mantê-los alinhados
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow no Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${pilar.color} rounded-3xl blur-xl -z-10`} />

              <div className="mb-8 inline-flex p-5 rounded-2xl bg-white/5 text-gsw group-hover:scale-110 group-hover:bg-gsw group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(113,22,173,0.2)]">
                {pilar.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                {pilar.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                {pilar.description}
              </p>

              <div className="absolute bottom-4 right-8 text-5xl font-black text-white/5 select-none transition-colors group-hover:text-gsw/10 italic">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}