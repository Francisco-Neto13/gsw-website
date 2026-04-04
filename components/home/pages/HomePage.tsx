import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  const pillars = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Tutoriais em Português",
      description:
        "Conteúdos traduzidos e explicados com foco na comunidade brasileira. Aqui você encontra guias detalhados sobre os sistemas mais complexos do Wynncraft.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      title: "História da GsW",
      description:
        "Um registro vivo da trajetória da guilda desde 2017. Não é o foco principal do portal, mas continua sendo parte importante da identidade da comunidade.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Feito pela Comunidade",
      description:
        "Todo o conteúdo aqui foi pensado por e para jogadores brasileiros de Wynncraft. O objetivo é tornar o jogo mais acessível para quem fala português.",
    },
  ];

  const contentCategories = [
    {
      label: "Profissões",
      description: "Fishing, Mining, Farming e todas as outras. Entenda como funcionam e como evoluir com mais eficiência.",
    },
    {
      label: "Raids",
      description: "Guias das raids do jogo, com dicas de builds, mecânicas e estratégias para grupos e iniciantes.",
    },
    {
      label: "Lootruns",
      description: "Rotas, chests e tudo que você precisa saber para aproveitar melhor os runs de loot.",
    },
    {
      label: "Dungeons",
      description: "Passo a passo das dungeons com mecânicas explicadas de forma clara.",
    },
    {
      label: "XP e Progressão",
      description: "As melhores estratégias para upar personagens sem desperdício de tempo.",
    },
    {
      label: "E muito mais",
      description: "Outros sistemas do jogo também podem ser cobertos aqui ao longo do tempo.",
    },
  ];

  return (
    <main id="gsw" className="relative min-h-screen bg-black">
      <Navbar currentPath="/" />

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-fade-in"
          style={{ backgroundImage: "url('/bg-guilda.webp')", animationDelay: "200ms" }}
        />
        <div className="absolute inset-0 z-[1] bg-black/75" />
        <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-b from-transparent to-zinc-950" />

        <div className="relative z-10 mx-auto max-w-7xl -translate-y-10 text-center animate-fade-in">
          <h1 className="text-7xl font-black italic leading-none tracking-tight text-gsw sm:text-9xl">
            GsW
          </h1>
          <p className="mx-auto -mt-0.5 max-w-md text-xs font-bold uppercase tracking-[0.35em] text-zinc-300">
            Guardians Of Wynn
          </p>
        </div>
      </section>

      {/* ── SOBRE O PORTAL ── */}
      <section id="sobre" className="relative -mt-px overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-32">
        <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-900/5 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Cabeçalho */}
          <div className="mx-auto max-w-3xl text-center reveal-on-scroll">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-gsw">
              Sobre o portal
            </span>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Um portal simples <span className="text-gsw">e direto</span>
            </h2>
          </div>

          {/* Bloco de texto introdutório */}
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-sm leading-relaxed text-zinc-400 reveal-on-scroll sm:mt-14 sm:text-base">
            <p>
              Wynncraft é um jogo rico e complexo, mas boa parte do seu conteúdo nunca foi documentado
              em português de forma acessível. Quem começa hoje depende de wikis em inglês, vídeos
              desatualizados ou de perguntar para alguém da comunidade — e nem sempre há alguém disponível.
            </p>
            <p>
              O objetivo deste portal é mudar isso. Aqui a ideia é reunir{" "}
              <span className="font-medium text-white">guias, tutoriais e referências traduzidas</span>{" "}
              para a comunidade brasileira, escritos com uma linguagem clara e sem enrolação. Seja você
              alguém que acabou de entrar no servidor ou um veterano que quer consultar uma mecânica
              específica, este espaço foi pensado para ser útil.
            </p>
            <p>
              Além dos guias, o portal também carrega um pouco da{" "}
              <span className="font-medium text-white">história da GsW</span> — a guilda brasileira que
              existe desde 2017 e que deu origem a este projeto. Não é o foco principal, mas faz parte
              de quem somos.
            </p>
          </div>

          {/* Cards dos pilares */}
          <div className="mt-14 grid gap-4 md:grid-cols-3 sm:mt-20">
            {pillars.map((item, index) => (
              <article
                key={item.title}
                className="reveal-on-scroll group relative rounded-3xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gsw/10 p-3 text-gsw transition-all duration-200 group-hover:bg-gsw group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-300">
                  {item.description}
                </p>
                <div className="absolute right-6 bottom-4 select-none text-4xl font-black italic text-white/5 group-hover:text-gsw/10">
                  0{index + 1}
                </div>
              </article>
            ))}
          </div>

          {/* Fechamento da seção */}
          <div className="reveal-on-scroll mt-14 text-center sm:mt-20">
            <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
              &ldquo;Nenhum jogador deveria travar num conteúdo por falta de informação em{" "}
              <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">português</span>.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO ── */}
      <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-32">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="reveal-on-scroll mb-10 text-center sm:mb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-gsw">
              O que você vai encontrar
            </span>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Conteúdo <span className="text-gsw">explicado</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              O foco é cobrir os sistemas do jogo de forma completa e em português. Cada guia é pensado
              para funcionar tanto para quem está começando quanto para quem quer se aprofundar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {contentCategories.map((cat, index) => (
              <div
                key={cat.label}
                className="reveal-on-scroll group relative rounded-2xl border border-white/10 bg-zinc-900/20 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gsw/40 hover:bg-black/60 sm:p-6"
              >
                <span className="mb-3 block select-none text-2xl font-black italic text-white/5 group-hover:text-gsw/15">
                  0{index + 1}
                </span>
                <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{cat.label}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal-on-scroll mt-14 text-center sm:mt-20">
            <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
              &ldquo;O conhecimento que a comunidade constrói juntos não pertence a ninguém. Pertence a{" "}
              <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">todos</span>.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
