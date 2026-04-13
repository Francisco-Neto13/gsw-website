import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { lootrunParticipation } from "@/components/lootrun/data/lootrun-content";

export default function LootrunParticipationSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {lootrunParticipation.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunParticipation.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunParticipation.description}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Localização: <span className="font-medium text-white">{lootrunParticipation.location}</span>.
            <br />
            {lootrunParticipation.npcNote}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {lootrunParticipation.images.map((image, index) => (
            <ClickableImagePreview key={image.src} src={image.src} alt={image.alt}>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ClickableImagePreview>
          ))}
        </div>
      </div>
    </section>
  );
}
