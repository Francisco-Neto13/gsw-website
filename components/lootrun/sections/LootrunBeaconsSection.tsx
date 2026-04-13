import { lootrunBeacons, lootrunBeaconsIntro } from "@/components/lootrun/data/lootrun-content";

export default function LootrunBeaconsSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {lootrunBeaconsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunBeaconsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunBeaconsIntro.description}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {lootrunBeacons.map((beacon, index) => (
            <div key={beacon.color} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900/20 px-5 py-4 sm:px-7 sm:py-5">
              <span className="select-none text-2xl font-black italic text-white/10 sm:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-28 shrink-0 text-sm font-bold text-white">{beacon.color}</span>
                <span className="text-sm leading-relaxed text-zinc-400 sm:text-base">{beacon.effect}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
