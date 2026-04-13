import { homeContentCategories, homeContentSection } from "@/components/home/data/home-content";

export default function HomeContentSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal-on-scroll mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-gsw">
            {homeContentSection.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            {homeContentSection.title} <span className="text-gsw">{homeContentSection.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {homeContentSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {homeContentCategories.map((cat, index) => (
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
            &ldquo;{homeContentSection.closingQuote}{" "}
            <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">
              {homeContentSection.closingQuoteHighlight}
            </span>.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
