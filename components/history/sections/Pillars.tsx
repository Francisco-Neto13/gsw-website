export default function Pillars() {
  const pillars = [
    {
      title: "Warteam",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /><line x1="13" y1="19" x2="19" y2="13" /><line x1="16" y1="16" x2="20" y2="20" /><line x1="19" y1="21" x2="20" y2="20" /><line x1="14.5" y1="17.5" x2="15" y2="18" /><line x1="17.5" y1="14.5" x2="18" y2="15" /><line x1="2" y1="19" x2="2" y2="22" /><line x1="2" y1="22" x2="5" y2="22" /><line x1="5" y1="22" x2="22" y2="5" /><line x1="22" y1="5" x2="22" y2="2" /><line x1="22" y1="2" x2="19" y2="2" /><line x1="19" y1="2" x2="2" y2="19" /></svg>
      ),
      description: "Os guerreiros, nossa vanguarda que todos os dias colore o mapa do Wynn de rosa. Lidam com tudo relacionado às Guild Wars dentro do Wynn.",
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      title: "Desenvolvimento",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
      ),
      description: "Pessoas especializadas em criar ferramentas para a GsW. Responsáveis por todos os bots que nos ajudam diariamente, como o Guardian Of Wynn.",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Conteúdo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
      ),
      description: "Lidam com o conteúdo próprio de Wynncraft: builds públicas, partys de Annie e ajuda a novatos.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Tickets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" /></svg>
      ),
      description: "Responsáveis pela introdução de novos membros na guilda através do sistema de Tickets nativo do nosso bot exclusivo.",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Eventos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
      ),
      description: "Cuidam da organização e execução de eventos. Com canais abertos ao público, todos podem ver como planejamos nossa diversão.",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="pilares" className="border-t border-linha py-16 sm:py-20">

      <div className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="reveal-on-scroll mb-10 max-w-leitura lg:sticky lg:top-24 lg:mb-0 lg:self-start">
          <h2 className="text-titulo-2 text-texto">
            Os <span className="numeros font-mono">5</span> Pilares
          </h2>
          <p className="mt-3 text-texto-2">
            A estrutura que sustenta a GsW. Estas divisões são destinadas aos membros que alcançam o cargo de{" "}
            <span className="font-bold text-texto">Capitão</span>, permitindo que escolham em qual frente desejam integrar e fortalecer o legado da guilda.
          </p>
        </div>
        <div className="min-w-0">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-md border border-linha bg-carvao p-6 sm:last:col-span-2"
            >

              <div className="mb-4 text-violeta">
                {pillar.icon}
              </div>

              <h3 className="text-titulo-4 mb-2 font-titulo text-texto">
                {pillar.title}
              </h3>

              <p className="text-texto-2">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-leitura">
          <p className="border-l border-linha-forte pl-4 italic text-texto-2">
            &ldquo;Divididos em frentes, mas unidos por um propósito. Os{" "}
            <span className="font-medium text-texto">Pilares</span>{" "}
            não são apenas setores; são os alicerces de um império que se recusa a cair.&rdquo;
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
