import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  dungeonsAccessImages,
  dungeonsAccessIntro,
  dungeonsAccessModes,
} from "@/components/dungeons/data/dungeons-content";

export default function DungeonsAccessSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {dungeonsAccessIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {dungeonsAccessIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {dungeonsAccessIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {dungeonsAccessModes.map((mode, index) => (
            <article
              key={mode.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
            >
              <div className="border-b border-white/5 p-6 sm:p-8">
                <span className="mb-3 block select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{mode.title}</h3>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {mode.steps.map((step) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                {mode.notes ? (
                  <p className="mt-5 text-sm leading-relaxed text-zinc-500">{mode.notes}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {dungeonsAccessImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full">
                  <Image src={image.src} alt={image.alt} fill className="object-contain p-2" />
                </div>
              </ClickableImagePreview>
              {image.caption ? (
                <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">{image.caption}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
