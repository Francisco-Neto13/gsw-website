"use client";

export default function Essence() {
  return (
    <section id="essencia" className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gsw/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <span className="block mb-4 text-xs font-bold tracking-[0.6em] uppercase text-gsw">
            Nossa Identidade
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-8">
            Além de uma <span className="text-gsw">Guilda</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto italic leading-relaxed text-lg">
            "O que começou como pixels e estratégias se transformou em algo que transcende qualquer tela."
          </p>
        </div>

        <div className="mb-24 space-y-6 text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          <p>
            Na <span className="text-white font-semibold">GsW</span>, as fronteiras entre o virtual e o real se dissiparam há muito tempo.
            O que começou em 2017 como um grupo de brasileiros em busca de territórios em Wynncraft evoluiu
            naturalmente para algo muito maior: <span className="text-gsw font-medium italic">uma irmandade viva, pulsante e verdadeira.</span>
          </p>

          <p>
            Não somos apenas jogadores que se encontram online. Somos pessoas que compartilham conquistas,
            derrotas, risadas em calls de madrugada, discussões acaloradas sobre builds, e também os silêncios
            confortáveis de quem sabe que há alguém ali, mesmo sem palavras. 
            <span className="text-white font-medium"> Construímos laços que não dependem de ping, servidor ou conexão.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="group p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-gsw/40 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-gsw/10 text-gsw">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h4 className="text-white font-bold mb-3 text-xl tracking-tight">
              Conexões Reais
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Alguns já se encontraram pessoalmente. Outros planejam o próximo encontro. Porque o que
              criamos aqui não é efêmero — é vínculo genuíno, amizade que resiste ao teste do tempo
              e da distância. Já celebramos aniversários juntos, apoiamos uns aos outros em momentos
              difíceis e compartilhamos vitórias que vão além do jogo.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-gsw/40 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-gsw/10 text-gsw">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h4 className="text-white font-bold mb-3 text-xl tracking-tight">
              Evolução Constante
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              De simples jogadores a estrategistas, líderes, criadores de conteúdo e desenvolvedores.
              A GsW estimula cada membro a crescer, explorar novos talentos e se superar. Nossos Pilares
              não são apenas estruturas organizacionais — são caminhos para que cada Guardião encontre
              seu propósito e contribua de forma única para o coletivo.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-gsw/40 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-gsw/10 text-gsw">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h4 className="text-white font-bold mb-3 text-xl tracking-tight">
              Além de Mundos
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Wynncraft foi nossa origem, mas não nosso limite. Exploramos inúmeros universos juntos,
              enfrentamos novos desafios em diferentes jogos e sempre levamos a essência da GsW conosco.
              Porque não importa o mundo virtual — nossa comunidade permanece unida, nossa identidade
              se mantém forte, e nossa bandeira continua tremulando.
            </p>
          </div>
        </div>

        <div className="mb-24 space-y-8 text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          <p>
            Nossa jornada não foi linear nem perfeita. Já passamos por vitórias grandiosas que nos
            encheram de orgulho, e derrotas amargas que testaram nossa determinação. Já discutimos
            ferozmente sobre estratégias, discordamos sobre decisões difíceis, rimos até perder o ar
            em calls memoráveis, e também estivemos presentes nos dias silenciosos, quando alguém
            precisava apenas de companhia.
          </p>

          <p>
            Atravessamos traições políticas, perdemos membros queridos, vimos "maçãs podres" tentarem
            minar nossa unidade. Mas em cada teste, em cada tempestade, a GsW emergiu mais forte.
            <span className="text-white font-medium"> Porque aqui aprendemos que ninguém caminha sozinho.</span> Quando
            um Guardião tropeça, há sempre uma mão estendida. Quando alguém celebra, todos celebram junto.
          </p>

          <p>
            É assim que a GsW vive desde 2017. Mais do que uma guilda de Minecraft, mais do que um nome
            sob um nickname — somos uma <span className="text-white font-semibold">história coletiva escrita todos os dias</span>,
            feita de pessoas reais, sentimentos autênticos e memórias que continuam crescendo a cada novo amanhecer.
          </p>

          <p>
            Olhamos para trás e vemos as batalhas vencidas, os amigos conquistados, as lições aprendidas.
            Olhamos para frente e vemos um futuro cheio de possibilidades, novos desafios a enfrentar,
            novos capítulos a escrever. Mas acima de tudo, olhamos ao nosso lado e vemos irmãos —
            <span className="text-gsw font-medium italic"> e isso é o que realmente importa.</span>
          </p>
        </div>
      </div>
    </section>
  );
}




