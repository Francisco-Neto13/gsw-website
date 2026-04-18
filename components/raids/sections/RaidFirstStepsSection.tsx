import Image from "next/image";
import RaidImageCard from "@/components/raids/sections/RaidImageCard";
import {
  cinfrasSilverbullImage,
  queueSteps,
  raidFirstStepsIntro,
  raidFirstStepsLabels,
  raidFirstStepsSupportImages,
  silverbullNpcImage,
  raids,
} from "@/components/raids/data/raids-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function RaidFirstStepsSection() {
  const firstStepsMedia = [
    { ...cinfrasSilverbullImage, title: "Centro de Divisão Silverbull" },
    { ...silverbullNpcImage, title: "NPC de inscrição da Raid" },
  ];

  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {raidFirstStepsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {raidFirstStepsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidFirstStepsIntro.description}
          </p>
          <p className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Localizacao: <span className="font-medium text-white">-159, 36, -4795</span>.
            <br />
            O NPC da raid e o da direita.
          </p>
        </div>

        <div className={`mb-10 grid grid-cols-1 gap-4 sm:mb-14 ${firstStepsMedia.length > 1 ? "sm:grid-cols-2 sm:gap-6" : ""}`}>
          {firstStepsMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-video w-full bg-zinc-900/50 p-1 sm:p-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </ClickableImagePreview>
              <div className="px-4 py-3 sm:px-5">
                <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">{item.caption?.trim() || item.alt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {raids.map((raid, index) => (
            <div
              key={raid.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
            >
              <ClickableImagePreview src={raid.image} alt={raid.name}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={raid.image}
                    alt={raid.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute top-4 right-4 select-none text-4xl font-black italic text-white/10 transition-colors duration-300 group-hover:text-gsw/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </ClickableImagePreview>
              <div className="p-5 sm:p-6">
                <h3 className="mb-1 text-base font-bold tracking-tight text-white sm:text-lg">{raid.name}</h3>
                <span className="mb-3 block text-xs font-semibold text-gsw">{raid.level}</span>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                    <span>{raidFirstStepsLabels.quest}: {raid.quest}</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                    <span>
                      {raidFirstStepsLabels.rune}: <span className="font-medium text-white">{raid.rune}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6">
          {raidFirstStepsSupportImages.map((item) => (
            <RaidImageCard key={item.src} src={item.src} alt={item.alt} caption={item.caption} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {queueSteps.map((step) => (
            <RaidImageCard key={step.src} src={step.src} alt={step.alt} aspectClassName="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  );
}

