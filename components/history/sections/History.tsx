"use client";

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
        "Um marco histórico: a fundação do Warteam da guilda. Unindo veteranos e novos prodígios, a GsW tornou-se temida pelos seus Dry Snipes. Criamos a Brazucoin, uma moeda de influência que ditava o ritmo das conquistas.",
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
      <header id="historia" className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-y-5 pb-12 pt-8 lg:pt-10">
        <div>
          <h1 className="text-titulo-1 text-texto">História da GsW</h1>
        </div>
          <div className="flex max-w-leitura flex-col gap-4 text-lede text-texto-2">
            <p>Mais do que uma linha do tempo, esta página guarda a memória da GsW: os períodos de ascensão, as guerras que marcaram a guilda, os líderes que conduziram cada era e os membros que ajudaram a transformar a comunidade em uma das presenças brasileiras mais fortes de Wynncraft.</p>
            <p>Aqui ficam registrados os momentos que definiram a identidade da guilda, desde as primeiras chamas até a fase atual, para que cada conquista, ruptura e renascimento continue fazendo parte do legado da GsW.</p>
          </div>
      </header>

      <section className="border-t border-linha py-16 sm:py-20">
        <div className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="reveal-on-scroll mb-10 max-w-leitura lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <h2 className="text-titulo-2 text-texto">
              Crônicas de Wynn
            </h2>
            <p className="mt-3 text-texto-2">
              &ldquo;Um registro eterno das eras, das alianças e do sangue derramado pelos
              Guardiões na busca pela paz nas províncias.&rdquo;
            </p>
          </div>
          <div className="min-w-0">

          <ol className="grid gap-x-12 xl:grid-cols-2">
            {eras.map((era) => (
              <li key={era.year} className="relative border-l border-linha-forte pb-10 pl-6 sm:pl-8">
                <span aria-hidden className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-violeta-borda bg-chao" />
                <p className="numeros font-mono text-apoio text-violeta">{era.year}</p>
                <h3 className="text-titulo-4 mt-1 font-titulo text-texto">{era.title}</h3>
                <p className="mt-2 text-texto-2">{era.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 max-w-leitura">
            <p className="border-l border-linha-forte pl-4 italic text-texto-2">
              &ldquo;O valor de um guardião não se mede apenas pelo seu nível, mas pela sua
              lealdade à bandeira.&rdquo;
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

