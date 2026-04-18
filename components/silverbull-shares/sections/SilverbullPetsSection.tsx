import { bundlesStoreImage, petsIntro, petBundles } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullPetsSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {petsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {petsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {petsIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-lg">
          <SilverbullImageSlot label={bundlesStoreImage.label} src={bundlesStoreImage.src} alt={bundlesStoreImage.alt} compact />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {petBundles.map((bundle) => (
            <article key={bundle.name} className="rounded-2xl border border-white/10 bg-zinc-900/20 p-5 sm:p-6">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">{bundle.colorLabel}</span>
              <h3 className="text-xl font-bold tracking-tight text-white">{bundle.name}</h3>
              <div className="mt-4 space-y-2">
                {bundle.notes.map((note) => (
                  <p key={note} className="text-sm leading-relaxed text-zinc-400">- {note}</p>
                ))}
              </div>
              <div className="mt-5">
                <SilverbullImageSlot label={bundle.image.label} src={bundle.image.src} alt={bundle.image.alt} compact />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
