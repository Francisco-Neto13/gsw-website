import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";
import {
  dungeonsAccessImages,
  dungeonsAccessIntro,
  dungeonsAccessModes,
} from "@/components/dungeons/data/dungeons-content";

export default function DungeonsAccessSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {dungeonsAccessIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {dungeonsAccessIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {dungeonsAccessModes.map((mode) => (
            <article
              key={mode.title}
              className="group overflow-hidden rounded-md border border-linha bg-carvao transition-all duration-300 hover:border-gsw/30"
            >
              <div className="border-b border-linha p-6 sm:p-8">
                <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{mode.title}</h3>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {mode.steps.map((step) => (
                    <li key={step} className="flex gap-3 text-texto-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                {mode.notes ? (
                  <p className="mt-5 text-apoio leading-relaxed text-texto-3">{mode.notes}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {dungeonsAccessImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full">
                  <ImagemNoQuadro src={image.src} alt={image.alt} sizes={tamanhos.metade} className="p-2" />
                </div>
              </ClickableImagePreview>
              <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">{image.caption?.trim() || image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
