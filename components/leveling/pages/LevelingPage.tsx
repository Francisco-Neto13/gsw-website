import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";

const spots = [
  {
    name: "Emerald Trail",
    range: "Lvl 1 - 10",
    coords: "-753, -1574",
    image: "/leveling/emerald_trail.webp",
    notes: [
      "Está logo após os portões de Ragni e funciona como a área de início do leveling.",
      "Nos primeiros levels o XP vem rápido, então totens ainda não são necessários.",
      "Apenas encontre mobs próximos e siga em frente.",
    ],
  },
  {
    name: "Pigman Ravines",
    range: "Lvl 5 - 25",
    coords: "-818, -1260",
    image: "/leveling/pigman_ravines.webp",
    notes: [
      "Esteja bem equipado, porque os mobs conseguem te matar com facilidade.",
      "Primeiro spot onde totens passam a fazer bastante diferença.",
      "Healer e party ainda não são obrigatórios aqui.",
      "Tome cuidado com o Pigman Overlord, que tem mais vida e dano do que os mobs normais.",
    ],
  },
  {
    name: "Mt. Wynn Spiders",
    range: "Lvl 20 - 35",
    coords: "-30, -1960",
    image: "/leveling/mt_wynn_spiders.webp",
    notes: [
      "Spot mais seguro do que o Saint's Row, mas com ganho de XP menor.",
      "Tome cuidado com a Spider Tamer e com as teias das aranhas.",
      "A partir daqui, um healer se torna essencial.",
    ],
  },
  {
    name: "Saint's Row",
    range: "Lvl 20 - 40",
    coords: "320, -2048",
    image: "/leveling/saints_row.webp",
    notes: [
      "O ganho de XP é enorme, mas os mobs podem te matar muito rápido.",
      "É necessário completar a quest Grave Digger para entrar no spot.",
      "Healer é indispensável aqui.",
      "Se sua classe tiver bom alcance, é possível matar mobs de fora do cemitério.",
    ],
  },
  {
    name: "Llevigar Spiders",
    range: "Lvl 35 - 50",
    coords: "-2151, -4717",
    image: "/leveling/llevigar_spiders.webp",
    notes: [
      "Vale iniciar no level 35 para poder descobrir Llevigar e respawnar lá se morrer.",
      "Fique atento ao Holehold Orc Marathon, que pode aparecer após um totem ser usado.",
    ],
  },
  {
    name: "Herb Cave",
    range: "Lvl 40 - 70",
    coords: "-499, -810",
    image: "/leveling/herb_cave.webp",
    notes: [
      "Spot muito bom que pode ser usado por bastante tempo.",
      "A parte de baixo costuma render mais XP.",
      "Se a party estiver com dificuldade, a parte de cima ainda é uma boa alternativa.",
    ],
  },
  {
    name: "Flesh Cave",
    range: "Lvl 55 - 75",
    coords: "-996, -5558",
    image: "/leveling/flesh_cave.webp",
    notes: [
      "Por ser uma caverna, os mobs podem dropar itens e esmeraldas.",
      "Fique atento a itens como The Jingling Jester e Suppression.",
      "Use totens no corredor estreito antes do baú para maximizar o spawn de mobs.",
    ],
  },
  {
    name: "Waterfall",
    range: "Lvl 65 - 80",
    coords: "-106, -4592",
    image: "/leveling/waterfall.webp",
    notes: [
      "Tem XP superior ao da Flesh Cave, mas sobreviver é mais difícil.",
      "Healer é altamente necessário, então fique sempre próximo dele.",
      "Os mobs têm muita vida, então a party precisa de bom dano para manter o ritmo.",
    ],
  },
  {
    name: "Scrapyard",
    range: "Lvl 75 - 106",
    coords: "-1445, -2522",
    image: "/leveling/scrapyard.webp",
    notes: [
      "Pode ser utilizado com tranquilidade até o level 106.",
      "A partir daqui, o healer também pode ajudar com dano sem atrapalhar o XP da party.",
      "Use os totens na parte esquerda do spot.",
    ],
  },
  {
    name: "Church",
    range: "Lvl 100 - 106",
    coords: "1023, -390",
    image: "/leveling/church.webp",
    notes: [
      "Spot menos popular devido ao Scrapyard, mas ainda muito eficiente.",
      "Necessita da quest A Journey Beyond para ser acessado.",
      "Também pode ser usado para farmar XP para a guilda.",
    ],
  },
];

export default function LevelingPage() {
  return (
    <>
      <Navbar currentPath="/leveling" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Leveling"
          paragraphs={[
            "O leveling no Wynncraft pode parecer simples à primeira vista, mas existe uma diferença enorme entre upar de forma aleatória e upar de forma eficiente e organizada. Escolher o spot errado para o seu nível, ignorar a importância de uma party ou não saber usar totens pode fazer com que você leve o dobro do tempo para chegar ao endgame.",
            "As recomendações a seguir são baseadas em matar mobs e bônus de XP. Se for sua primeira classe, é fortemente recomendado que você faça quests, caves e descobertas antes de focar em grinding, porque o XP das quests ainda pesa bastante nos levels iniciais.",
          ]}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-10 text-center sm:mb-16">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
                Fundamentos
              </span>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                Parties
              </h2>
              <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Upar em party é quase obrigatório. O ganho de XP é maior e a chance de sobreviver
                aumenta bastante. Para encontrar uma, use{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-mono text-gsw">/pfinder</code>{" "}
                no chat ou fale com um party finder em qualquer cidade.
              </p>
            </div>

            <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 sm:mb-16">
              <div className="relative aspect-video w-full">
                <Image src="/leveling/party_example.webp" alt="Exemplo de party de XP" fill className="object-cover" />
              </div>
              <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">
                Exemplo de uma party de XP no party finder.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="group rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">Healers</h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Sempre jogadores de nível 105 ou 106 com build dedicada à cura, normalmente
                  de Shaman ou Mage. Em parties de nível baixo, também usam itens que removem
                  seu dano para não roubar XP.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">Totens</h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Distribuídos diariamente para jogadores com ranks da loja, acessíveis via{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-mono text-gsw">/totem</code>.
                  Duram 5 minutos cada e aumentam muito o spawn de mobs, elevando
                  significativamente o ganho de XP da party.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-10 text-center sm:mb-16">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
                Do nível 1 ao 106
              </span>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                Spots
              </h2>
              <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Alguns spots cobrem faixas de nível sobrepostas. Se um spot estiver difícil demais
                ou pouco eficiente, sinta-se livre para mudar para outro mais adequado ao seu momento.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {spots.map((spot, index) => (
                <div
                  key={spot.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
                >
                  <div className="flex flex-col gap-2 border-b border-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
                    <div className="flex items-center gap-4">
                      <span className="select-none text-3xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15 sm:text-4xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">{spot.name}</h3>
                        <span className="text-xs font-semibold text-gsw">{spot.range}</span>
                      </div>
                    </div>
                    <code className="w-fit rounded-lg bg-white/5 px-3 py-1.5 text-xs font-mono text-zinc-400">
                      {spot.coords}
                    </code>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                      {spot.notes.map((note, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="relative aspect-video w-full border-t border-white/5 lg:border-t-0 lg:border-l">
                      <Image
                        src={spot.image}
                        alt={`Screenshot do spot ${spot.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center sm:mt-20">
              <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
                &ldquo;Com a party certa e o spot certo, o level 106 é só uma questão de{" "}
                <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">tempo</span>.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
