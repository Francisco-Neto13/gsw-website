import Image from "next/image";

export default function LevelingPartySection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Fundamentos
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">Parties</h2>
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
  );
}
