import Image from "next/image";
import {
  worldEventsAnnihilationLabels,
  annihilationVideo,
  annihilationImages,
  annihilationPartyTips,
  annihilationSunTips,
  worldEventsAnnihilationIntro,
} from "@/components/world-events/data/world-events-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";

export default function WorldEventsAnnihilationSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-900/5 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {worldEventsAnnihilationIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {worldEventsAnnihilationIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {worldEventsAnnihilationIntro.description}
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 sm:mb-14">
          <LazyYouTubeEmbed videoId={annihilationVideo.videoId} title={annihilationVideo.title} />
          <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">
            {annihilationVideo.caption}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <article className="group rounded-2xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {worldEventsAnnihilationLabels.partyTitle}
            </h3>
            <ul className="space-y-3">
              {annihilationPartyTips.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group rounded-2xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {worldEventsAnnihilationLabels.sunTitle}
            </h3>
            <ul className="space-y-3">
              {annihilationSunTips.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {annihilationImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </ClickableImagePreview>
              <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">{image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
