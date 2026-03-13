"use client";

export default function Essence() {
  return (
    <section id="essencia" className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[150px] sm:h-[500px] sm:w-[500px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-900/5 blur-[150px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-20">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-4">
            Nossa Identidade
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:mb-8 sm:text-5xl lg:text-7xl">
            Além de uma <span className="text-gsw">Guilda</span>
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-sm italic leading-relaxed text-zinc-400 sm:text-lg">
            &ldquo;O que começou como pixels e estratégias se transformou em algo que transcende qualquer tela.&rdquo;
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-300 sm:mb-24 sm:space-y-6 sm:text-lg">
          <p>
            Na <span className="font-semibold text-white">GsW</span>, as fronteiras entre o virtual e o real se dissiparam há muito tempo.
            O que começou em 2017 como um grupo de brasileiros em busca de territórios em Wynncraft evoluiu
            naturalmente para algo muito maior: <span className="font-medium italic text-gsw">uma irmandade viva, pulsante e verdadeira.</span>
          </p>
          <p>
            Não somos apenas jogadores que se encontram online. Somos pessoas que compartilham conquistas,
            derrotas, risadas em calls de madrugada, discussões acaloradas sobre builds, e também os silêncios
            confortáveis de quem sabe que há alguém ali, mesmo sem palavras.
            <span className="font-medium text-white"> Construímos laços que não dependem de ping, servidor ou conexão.</span>
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-24 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <div className="mb-3 inline-flex rounded-xl bg-gsw/10 p-3 text-gsw sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold tracking-tight text-white sm:mb-3 sm:text-xl">Conexões Reais</h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              Alguns já se encontraram pessoalmente. Outros planejam o próximo encontro. Porque o que
              criamos aqui não é efêmero - é vínculo genuíno, amizade que resiste ao teste do tempo
              e da distância. Já celebramos aniversários juntos, apoiamos uns aos outros em momentos
              difíceis e compartilhamos vitórias que vão além do jogo.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <div className="mb-3 inline-flex rounded-xl bg-gsw/10 p-3 text-gsw sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold tracking-tight text-white sm:mb-3 sm:text-xl">Evolução Constante</h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              De simples jogadores a estrategistas, líderes, criadores de conteúdo e desenvolvedores.
              A GsW estimula cada membro a crescer, explorar novos talentos e se superar. Nossos Pilares
              não são apenas estruturas organizacionais - são caminhos para que cada Guardião encontre
              seu propósito e contribua de forma única para o coletivo.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:col-span-2 sm:p-8 md:col-span-1">
            <div className="mb-3 inline-flex rounded-xl bg-gsw/10 p-3 text-gsw sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold tracking-tight text-white sm:mb-3 sm:text-xl">Além de Mundos</h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              Wynncraft foi nossa origem, mas não nosso limite. Exploramos inúmeros universos juntos,
              enfrentamos novos desafios em diferentes jogos e sempre levamos a essência da GsW conosco.
              Porque não importa o mundo virtual - nossa comunidade permanece unida, nossa identidade
              se mantém forte, e nossa bandeira continua tremulando.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-300 sm:space-y-8 sm:text-lg">
          <p>
            Nossa jornada não foi linear nem perfeita. Já passamos por vitórias grandiosas que nos
            encheram de orgulho, e derrotas amargas que testaram nossa determinação. Já discutimos
            ferozmente sobre estratégias, discordamos sobre decisões difíceis, rimos até perder o ar
            em calls memoráveis, e também estivemos presentes nos dias silenciosos, quando alguém
            precisava apenas de companhia.
          </p>
          <p>
            Atravessamos traições políticas, perdemos membros queridos, vimos &ldquo;maçãs podres&rdquo; tentarem
            minar nossa unidade. Mas em cada teste, em cada tempestade, a GsW emergiu mais forte.
            <span className="font-medium text-white"> Porque aqui aprendemos que ninguém caminha sozinho.</span> Quando
            um Guardião tropeça, há sempre uma mão estendida. Quando alguém celebra, todos celebram junto.
          </p>
          <p>
            É assim que a GsW vive desde 2017. Mais do que uma guilda de Minecraft, mais do que um nome
            sob um nickname - somos uma <span className="font-semibold text-white">história coletiva escrita todos os dias</span>,
            feita de pessoas reais, sentimentos autênticos e memórias que continuam crescendo a cada novo amanhecer.
          </p>
          <p>
            Olhamos para trás e vemos as batalhas vencidas, os amigos conquistados, as lições aprendidas.
            Olhamos para frente e vemos um futuro cheio de possibilidades, novos desafios a enfrentar,
            novos capítulos a escrever. Mas acima de tudo, olhamos ao nosso lado e vemos irmãos -
            <span className="font-medium italic text-gsw"> e isso é o que realmente importa.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
