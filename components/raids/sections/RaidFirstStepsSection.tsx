import Image from "next/image";
import RaidImageCard from "@/components/raids/sections/RaidImageCard";
import {
  queueSteps,
  raidFirstStepsIntro,
  raidFirstStepsLabels,
  raidFirstStepsSupportImages,
  silverbullNpcImage,
  raids,
} from "@/components/raids/data/raids-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function RaidFirstStepsSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {raidFirstStepsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {raidFirstStepsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidFirstStepsIntro.description}
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-2xl sm:mb-14">
          <RaidImageCard
            src={silverbullNpcImage.src}
            alt={silverbullNpcImage.alt}
            caption={silverbullNpcImage.caption}
          />
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
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
