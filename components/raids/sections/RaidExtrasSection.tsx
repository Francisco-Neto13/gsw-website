import RaidImageCard from "@/components/raids/sections/RaidImageCard";
import {
  extras,
  raidExtraHighlights,
  raidExtrasIntro,
  raidExtrasLabels,
  supportImages,
} from "@/components/raids/data/raids-content";

export default function RaidExtrasSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-gsw/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {raidExtrasIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {raidExtrasIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidExtrasIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {raidExtraHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center sm:p-6"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
                {raidExtrasLabels.highlight}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {extras.map((item, index) => (
            <div
              key={item}
              className="group relative rounded-2xl border border-white/10 bg-black/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gsw/40 hover:bg-black/60 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/5 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gsw/75">
                  {raidExtrasLabels.note} {String(index + 1).padStart(2, "0")}
                </span>
                <span className="select-none text-3xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {supportImages.map((image) => (
            <RaidImageCard key={image.src} src={image.src} alt={image.alt} caption={image.caption} />
          ))}
        </div>

      </div>
    </section>
  );
}

