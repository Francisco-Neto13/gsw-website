"use client";

import GuideIntro from "@/components/shared/GuideIntro";

interface Era {
  year: string;
  title: string;
  description: string;
}

export default function History() {
  const eras: Era[] = [
    {
      year: "2017 - 2019",
      title: "As Primeiras Chamas",
      description:
        "Sob a liderança de BadBoyCJ, a GsW nasceu da vontade de reunir o povo brasileiro sob uma única bandeira em Wynncraft. Foram anos de busca e resistência, quando os primeiros Guardiões começaram a moldar o que viria a ser o maior reduto lusófono do servidor.",
    },
    {
      year: "2020 - 2021",
      title: "A Ascensão Política e as Grandes Guerras",
      description:
        "Com a transição para a liderança de Julinho, a GsW deixou de ser apenas um refúgio para se tornar uma potência bélica. Pela primeira vez, marchamos para as Guerras de Território. Foi a era das grandes alianças, quando defendemos com ação e diplomacia regiões como Corkus e os vastos oceanos.",
    },
    {
      year: "2022 - 2023",
      title: "O Nascimento do Warteam e a Brazucoin",
      description:
        "Um marco histórico: a fundação do Warteam oficial. Unindo veteranos e novos prodígios, a GsW tornou-se temida pelos seus Dry Snipes. Criamos a Brazucoin, uma moeda de influência que ditava o ritmo das conquistas.",
    },
    {
      year: "2024",
      title: "A Grande Comunidade e os Pilares",
      description:
        "A guilda evoluiu para um ecossistema completo. Estruturamos os 5 Pilares: Warteam, Moderação, Eventos, Conteúdo e Desenvolvimento. Apesar das traições políticas, a GsW provou sua resiliência ao forjar novas alianças e criar o maior guia em português já visto em Wynn.",
    },
    {
      year: "2025",
      title: "A Era da Tecnologia e o Futuro",
      description:
        "Hoje, sob o comando de RafaelGomes, a GsW transcende o jogo. Com bots próprios de última geração e uma loja in-game, transformamos a experiência dos membros enquanto o mundo aguarda as Crônicas de Fruma.",
    },
    {
      year: "2026 - O Despertar",
      title: "A Promessa de Fruma e o Renascimento",
      description:
        "Após anos de espera, os portões de Fruma finalmente se abriram. O anúncio da nova província convocou antigos heróis de volta ao lar, e a GsW ressurge com novos rostos, vontade renovada e uma chama que nunca se apagou.",
    },
  ];

  return (
    <>
      <GuideIntro
        id="historia"
        eyebrow="Guia Oficial"
        title={
          <>
            História da <span className="text-gsw">GsW</span>
          </>
        }
        paragraphs={[
          "Mais do que uma linha do tempo, esta página guarda a memória da GsW: os períodos de ascensão, as guerras que marcaram a guilda, os líderes que conduziram cada era e os membros que ajudaram a transformar a comunidade em uma das presenças brasileiras mais fortes de Wynncraft.",
          "Aqui ficam registrados os momentos que definiram a identidade da guilda, desde as primeiras chamas até a fase atual, para que cada conquista, ruptura e renascimento continue fazendo parte do legado da GsW.",
        ]}
        sectionClassName="bg-black"
      />

      <section className="relative overflow-hidden bg-zinc-950 px-4 pb-16 pt-16 sm:px-6 sm:pb-32 sm:pt-24">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="reveal-on-scroll mb-16 text-center sm:mb-28">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
              Documento Oficial
            </span>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:mb-8 sm:text-5xl lg:text-7xl">
              Crônicas de <span className="text-gsw">Wynn</span>
            </h2>
            <p className="mx-auto max-w-xl px-2 text-sm italic leading-relaxed text-zinc-400 sm:text-base">
              &ldquo;Um registro eterno das eras, das alianças e do sangue derramado pelos
              Guardiões na busca pela paz nas províncias.&rdquo;
            </p>
          </div>

          <div className="relative">
            <div className="history-timeline-line-desktop absolute bottom-0 top-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gsw/40 via-white/10 to-transparent sm:block" />
            <div className="history-timeline-line-mobile absolute bottom-0 top-0 left-4 w-px bg-gradient-to-b from-gsw/40 via-white/10 to-transparent sm:hidden" />

            <div className="space-y-12 sm:space-y-28">
              {eras.map((era, index) => (
                <div
                  key={index}
                  className={`reveal-on-scroll group history-era-group relative flex flex-col items-start gap-4 sm:flex-row sm:gap-12 ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 top-2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-gsw bg-zinc-950 sm:hidden" />
                  <div className="absolute left-1/2 top-8 z-20 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gsw bg-zinc-950 transition-transform duration-500 group-hover:scale-150 group-hover:bg-gsw sm:block" />

                  <div
                    className={`hidden w-full sm:block sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pl-12 sm:text-left" : "sm:pr-12 sm:text-right"
                    }`}
                  >
                    <span className="history-year-emphasis mb-4 block transform-gpu text-3xl font-black italic text-gsw/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-gsw">
                      {era.year}
                    </span>
                  </div>

                  <div className={`history-era-card history-sheen-card history-tilt-timeline w-full rounded-2xl border border-white/10 bg-black p-5 pl-10 transition-all duration-500 group-hover:border-gsw/40 group-hover:bg-zinc-900/50 sm:w-1/2 sm:p-8 sm:pl-8 ${
                    index % 2 === 0 ? "history-tilt-right" : "history-tilt-left"
                  }`}>
                    <div className="history-era-card-inner transform-gpu transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                      <span className="history-year-emphasis mb-2 block transform-gpu text-sm font-black italic text-gsw/60 transition-all duration-500 group-hover:scale-110 group-hover:text-gsw sm:hidden">
                        {era.year}
                      </span>
                      <h4 className="mb-3 text-base font-bold uppercase tracking-tight text-white transition-colors duration-500 group-hover:text-gsw sm:mb-4 sm:text-xl">
                        {era.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-zinc-300 transition-colors duration-500 group-hover:text-white">
                        {era.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll mt-16 text-center sm:mt-24">
            <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic text-zinc-500 sm:px-12 sm:pt-12">
              &ldquo;O valor de um guardião não se mede apenas pelo seu nível, mas pela sua
              lealdade à bandeira.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

