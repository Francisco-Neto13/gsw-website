import RaidImageCard from "@/components/raids/sections/RaidImageCard";

const rewardOutcomes = [
  {
    label: "Run Perfeita",
    value: "+3 pulls por sala + 1 aspect",
    description:
      "Concluir a raid sem perder desempenho nas salas mantém o ganho máximo de pulls em cada etapa e libera o aspect no baú final.",
  },
  {
    label: "Run com morte",
    value: "+2 pulls por sala",
    description:
      "Se a party completa a raid com falha em algum desafio, cada sala passa a render menos pulls e o aspect deixa de cair.",
  },
  {
    label: "Run falhada",
    value: "Sem baú final",
    description: "Sem conclusão, não existe recompensa final. A runa já foi consumida e a tentativa termina ali.",
  },
];

const aspectDetails = [
  "São aprimoramentos da árvore de habilidades e existem em versões mítica, fabled e lendária.",
  "Variam do Tier I ao Tier IV. Quanto maior o tier, maior o bônus aplicado.",
  "O aspect obtido não precisa ser da classe usada naquela run.",
  "Eles podem ser usados em todas as classes compatíveis com o efeito.",
];

const aspectExamples = [
  "Área extra no Bash",
  "Anjos e summons",
  "Ice Snakes",
  "Clones",
  "Duração de Totem",
];

export default function RaidRewardsSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Ao final da raid
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Recompensas
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Depois de concluir a raid, a party é enviada para a sala de recompensa. É ali que entram os pulls
            finais, os aspects e os drops mais valiosos da run. O resultado muda conforme o desempenho da
            equipe ao longo das salas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {rewardOutcomes.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-zinc-900/20 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-6"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
                {item.label}
              </span>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{item.value}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-6 sm:p-8">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-gsw">
              Pulls Finais
            </span>
            <ul className="space-y-3">
              {[
                "Os pulls não dependem só do baú final: o desempenho da party ao longo das salas define o valor acumulado da run.",
                "Manter a raid limpa preserva o total de pulls por sala e transforma cada clear em uma farm mais eficiente.",
                "No fechamento da run, o baú ainda pode entregar tomes, esmeraldas, acessórios únicos, powders, corkian amplifier e outros drops relevantes.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-gsw">Aspects</span>
            <ul className="space-y-3">
              {aspectDetails.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/5 pt-6">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">
                Exemplos de efeito
              </span>
              <div className="flex flex-wrap gap-2">
                {aspectExamples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {[
            {
              src: "/raids/reward_chest_location.webp",
              alt: "Local do baú final da raid",
              caption: "Baú final disponível na sala de recompensa após concluir a raid.",
            },
            {
              src: "/raids/reward_chest_opened.webp",
              alt: "Baú final aberto com rewards",
              caption: "Exemplo do conteúdo de um baú final com aspects, pulls e tomes.",
            },
          ].map((item) => (
            <RaidImageCard key={item.src} src={item.src} alt={item.alt} caption={item.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}
