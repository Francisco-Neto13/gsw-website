"use client";

import type { CSSProperties } from "react";
import TextoAnimado from "@/components/shared/TextoAnimado";

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
        "Com BadBoyCJ na liderança, a GsW nasceu da vontade de juntar os brasileiros do Wynncraft numa guilda só. Foram anos de luta para crescer, e foi nessa época que os primeiros Guardiões começaram a montar o que viraria a maior casa de quem fala português no servidor.",
    },
    {
      year: "2020 - 2021",
      title: "A Ascensão Política e as Grandes Guerras",
      description:
        "Quando Julinho assumiu a liderança, a GsW deixou de ser só um ponto de encontro e virou uma guilda de guerra. Pela primeira vez entramos nas Guerras de Território. Foi a época das grandes alianças, em que defendemos regiões como Corkus e os oceanos, na luta e na diplomacia.",
    },
    {
      year: "2022 - 2023",
      title: "O Nascimento do Warteam e a Brazucoin",
      description:
        "Um marco: nasceu o Warteam da guilda. Juntando veteranos e novatos talentosos, a GsW ficou conhecida e temida pelos Dry Snipes. Também criamos a Brazucoin, uma moeda interna que movimentava as conquistas da guilda.",
    },
    {
      year: "2024",
      title: "A Grande Comunidade e os Pilares",
      description:
        "A guilda cresceu e se organizou nos 5 Pilares: Warteam, Moderação, Eventos, Conteúdo e Desenvolvimento. Mesmo com traições políticas no caminho, a GsW se reergueu, fez novas alianças e criou o maior guia em português de Wynn.",
    },
    {
      year: "2025",
      title: "A Era da Tecnologia e o Futuro",
      description:
        "Hoje, com RafaelGomes no comando, a GsW vai além do jogo. Com bots próprios e uma loja in-game, mudamos a experiência dos membros enquanto todo mundo esperava Fruma.",
    },
    {
      year: "2026 - O Despertar",
      title: "A Promessa de Fruma e o Renascimento",
      description:
        "Depois de anos de espera, Fruma finalmente chegou. A nova província trouxe muita gente antiga de volta para casa, e a GsW volta com caras novas, vontade renovada e a mesma chama de sempre.",
    },
  ];

  return (
    <>
      <header id="historia" className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-y-5 pb-12 pt-8 lg:pt-10">
        <div>
          <h1 className="text-titulo-1 text-texto">
            <TextoAnimado texto="História da GsW" />
          </h1>
        </div>
          <div className="entra flex max-w-leitura flex-col gap-4 text-lede text-texto-2" style={{ "--i": 4 } as CSSProperties}>
            <p>Esta página guarda a memória da GsW: as fases de crescimento, as guerras que marcaram a guilda, os líderes de cada era e os membros que fizeram dela uma das guildas brasileiras mais fortes do Wynncraft.</p>
            <p>Aqui ficam os momentos que fizeram a guilda ser o que é, do começo até hoje: as conquistas, as brigas e as voltas por cima.</p>
          </div>
      </header>

      <section className="border-t border-linha py-16 sm:py-20">
        <div className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="mb-10 max-w-leitura lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <h2 className="text-titulo-2 text-texto">
              Crônicas de Wynn
            </h2>
            <p className="mt-3 text-texto-2">
              &ldquo;As eras, as alianças e as batalhas dos Guardiões pelas
              províncias de Wynn.&rdquo;
            </p>
          </div>
          <div className="min-w-0">

          <ol className="grid gap-x-12 xl:grid-cols-2">
            {eras.map((era) => (
              <li key={era.year} className="trilho-desenha relative pb-10 pl-6 sm:pl-8">
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

