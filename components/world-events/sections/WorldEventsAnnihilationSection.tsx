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
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {worldEventsAnnihilationIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {worldEventsAnnihilationIntro.description}
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-md border border-linha bg-carvao sm:mb-14">
          <LazyYouTubeEmbed videoId={annihilationVideo.videoId} title={annihilationVideo.title} />
          <p className="px-4 py-3 text-[0.9rem] text-texto-3 sm:px-5">
            {annihilationVideo.caption}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <article className="group rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-texto sm:text-2xl">
              {worldEventsAnnihilationLabels.partyTitle}
            </h3>
            <ul className="space-y-3">
              {annihilationPartyTips.map((item) => (
                <li key={item} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-texto sm:text-2xl">
              {worldEventsAnnihilationLabels.sunTitle}
            </h3>
            <ul className="space-y-3">
              {annihilationSunTips.map((item) => (
                <li key={item} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {annihilationImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
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
              <p className="px-4 py-3 text-[0.9rem] text-texto-3 sm:px-5">{image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
