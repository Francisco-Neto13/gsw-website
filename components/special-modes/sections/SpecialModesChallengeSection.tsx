import Image from "next/image";
import {
  combinedModesRequirements,
  specialModesChallengeIntro,
  specialModesChallengeLabels,
  specialModesReferenceImage,
} from "@/components/special-modes/data/special-modes-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function SpecialModesChallengeSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {specialModesChallengeIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {specialModesChallengeIntro.description}
          </p>
        </div>

        <article className="overflow-hidden rounded-md border border-linha bg-carvao">
          <div className="border-b border-linha px-6 py-5 sm:px-8 sm:py-6">
            <h3 className="text-lg font-bold text-texto sm:text-xl">
              {specialModesChallengeLabels.blockTitle}
            </h3>
            <p className="mt-2 text-texto-2">
              {specialModesChallengeLabels.blockDescription}
            </p>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-violeta">
              {specialModesChallengeLabels.requirementsTitle}
            </h4>
            <ul className="space-y-3">
              {combinedModesRequirements.map((requirement) => (
                <li key={requirement} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-linha bg-carvao p-4 sm:p-5">
            <h4 className="mb-3 text-[0.9rem] font-bold text-texto-3">
              {specialModesChallengeLabels.imageTitle}
            </h4>
            <ClickableImagePreview
              src={specialModesReferenceImage.src}
              alt={specialModesReferenceImage.alt}
            >
              <div className="relative aspect-[25/9] w-full overflow-hidden rounded-xl border border-linha bg-black/60">
                <Image
                  src={specialModesReferenceImage.src}
                  alt={specialModesReferenceImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                />
              </div>
            </ClickableImagePreview>
            <p className="mt-3 px-1 text-xs leading-relaxed text-texto-3">
              {specialModesReferenceImage.alt}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
