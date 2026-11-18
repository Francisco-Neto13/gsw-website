import { lootrunParticipation } from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";
import { tamanhos } from "@/lib/tamanhos";

export default function LootrunParticipationSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div>
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {lootrunParticipation.title}
          </h2>
          {lootrunParticipation.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-leitura text-texto-2"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-4 max-w-leitura text-texto-2">
            Localização: <span className="font-medium text-white">{lootrunParticipation.location}</span>.
            <br />
            {lootrunParticipation.npcNote}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-4 ${
            lootrunParticipation.media.length > 1 ? "sm:grid-cols-2 sm:gap-6" : ""
          }`}
        >
          {lootrunParticipation.media.map((item) => (
            <LootrunMediaPlaceholder key={item.name} item={item} sizes={lootrunParticipation.media.length > 1 ? tamanhos.metade : tamanhos.artigo} />
          ))}
        </div>
      </div>
    </section>
  );
}

