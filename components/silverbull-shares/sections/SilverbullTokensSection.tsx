import { tokenCards, tokenStoreImage, tokensIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullTokensSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {tokensIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {tokensIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {tokensIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-3xl">
          <SilverbullImageSlot label={tokenStoreImage.label} src={tokenStoreImage.src} alt={tokenStoreImage.alt} />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {tokenCards.map((token, index) => (
            <article
              key={token.name}
              className="group relative rounded-2xl border border-white/10 bg-black/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gsw/40"
            >
              <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
                <span className="text-xl">{token.icon}</span>
                <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">{token.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{token.description}</p>
              <span className="pointer-events-none absolute right-4 bottom-3 select-none text-3xl font-black italic text-white/5 group-hover:text-gsw/15">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
