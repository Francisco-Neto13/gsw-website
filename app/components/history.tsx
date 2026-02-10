export default function History() {
  const eras = [
    {
      year: "2017 — 2019",
      title: "As Primeiras Chamas",
      description:
        "Sob a liderança de BadBoyCJ, a GsW nasceu da vontade de reunir o povo brasileiro sob uma única bandeira em Wynncraft. Foram anos de busca e resistência, onde os primeiros Guardiões — nomes como Poekieee e BlazeWarrior — começaram a moldar o que viria a ser o maior reduto lusófono do servidor.",
    },
    {
      year: "2020 — 2021",
      title: "A Ascensão Política e as Grandes Guerras",
      description:
        "Com a transição para a liderança de Julinho, a GsW deixou de ser apenas um refúgio para se tornar uma potência bélica. Pela primeira vez, marchamos para as Guerras de Território. Foi a era das grandes alianças (Santa Claus, Banana Army, Coalision), onde defendemos com aço e diplomacia regiões como Corkus e os vastos oceanos.",
    },
    {
      year: "2022 — 2023",
      title: "O Nascimento do Warteam e a Brazucoin",
      description:
        "Um marco histórico: a fundação do Warteam oficial. Unindo veteranos e novos prodígios como yFelipeMC e 1nfinity, a GsW tornou-se temida pelos seus 'Dry Snipes'. Criamos a Brazucoin, uma moeda de influência que ditava o ritmo das conquistas. Canyon e Molten Heights tremeram sob o domínio de nossa aliança com a ICo.",
    },
    {
      year: "2024",
      title: "A Grande Comunidade e os Pilares",
      description:
        "A guilda evoluiu para um ecossistema completo. Estruturamos os 5 Pilares: Warteam, Moderação, Eventos, Conteúdo e Desenvolvimento. Apesar das traições políticas e das feridas deixadas por 'maçãs podres', a GsW provou sua resiliência ao forjar novas alianças e criar o maior guia em português já visto em Wynn.",
    },
    {
      year: "2025",
      title: "A Era da Tecnologia e o Futuro",
      description:
        "Hoje, sob o comando de RafaelGomes, a GsW transcende o jogo. Com bots próprios de última geração e uma loja in-game (JuStore), transformamos a experiência dos membros. Enquanto o mundo aguarda as Crônicas de Fruma, nossos Guardiões permanecem vigilantes, lembrando a todos que a Brazucoin e o nosso Warteam nunca dormem.",
    },
    {
      year: "2026 — O Despertar",
      title: "A Promessa de Fruma e o Renascimento",
      description:
        "Após anos de espera e sussurros, os portões de Fruma finalmente se abriram. O anúncio da nova província serviu como o clarim que convocou os antigos heróis de volta ao lar. Após um período de quietude, a GsW ressurge: novos rostos unem-se aos veteranos, trazendo uma vontade renovada e uma chama que nunca se apagou.",
    },
  ];

  return (
    <section
      id="historia"
      className="relative py-32 px-6 bg-zinc-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-28 text-center reveal-on-scroll">
          <span className="block mb-6 text-xs font-bold tracking-[0.6em] uppercase text-gsw">
            Documento Oficial
          </span>

          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-8">
            Crônicas de <span className="text-gsw">Wynn</span>
          </h2>

          <p className="text-zinc-400 italic max-w-xl mx-auto leading-relaxed">
            "Um registro eterno das eras, das alianças e do sangue derramado pelos
            Guardiões na busca pela paz nas províncias."
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gsw/40 via-white/10 to-transparent hidden sm:block -translate-x-1/2" />

          <div className="space-y-28">
            {eras.map((era, index) => (
              <div
                key={index}
                className={`reveal-on-scroll group relative flex flex-col sm:flex-row gap-12 items-start ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden sm:block absolute left-1/2 top-8 w-3 h-3 rounded-full bg-zinc-950 border-2 border-gsw -translate-x-1/2 z-20 transition-transform duration-500 group-hover:scale-150 group-hover:bg-gsw" />

                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0
                      ? "sm:text-left sm:pl-12"
                      : "sm:text-right sm:pr-12"
                  }`}
                >
                  <span className="block text-3xl font-black italic text-gsw/40 mb-4 transition-colors duration-500 group-hover:text-gsw">
                    {era.year}
                  </span>
                </div>

                <div className="w-full sm:w-1/2 p-8 rounded-2xl bg-black border border-white/10 transition-all duration-500 group-hover:scale-[1.03] group-hover:border-gsw/40 group-hover:bg-zinc-900/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase transition-colors duration-500 group-hover:text-gsw">
                    {era.title}
                  </h4>

                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base transition-colors duration-500 group-hover:text-white">
                    {era.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center reveal-on-scroll">
          <p className="text-zinc-500 italic border-t border-white/5 pt-12 inline-block px-12">
            "O valor de um guardião não se mede apenas pelo seu nível, mas pela sua
            lealdade à bandeira."
          </p>
        </div>
      </div>
    </section>
  );
}