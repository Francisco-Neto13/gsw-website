import {
  lootrunCamps,
  lootrunCampsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";
import { tamanhos } from "@/lib/tamanhos";
import { ehPrintPequena } from "@/lib/imagens";

function isAnimado(item: { animado?: boolean }) {
  return Boolean(item.animado);
}

export default function LootrunCampsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div>
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {lootrunCampsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {lootrunCampsIntro.description}
          </p>
        </div>

        <div className="mb-8 rounded-md border border-linha bg-carvao p-5 sm:p-7">
          <p className="mb-4 text-apoio font-bold text-texto-3">Lista literal de camps</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {lootrunCamps.map((camp, index) => (
              <article
                key={`${camp.name}-${camp.coordinates}`}
                className="rounded-md border border-linha bg-carvao px-4 py-3"
              >
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <span className="text-apoio font-bold text-texto-3">
                    Camp {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-md border border-linha bg-gsw/15 px-2 py-1 text-detalhe font-semibold text-texto-2">
                    {camp.difficulty}
                  </span>
                </div>
                <p className="text-apoio font-semibold leading-relaxed text-zinc-200">{camp.name}</p>
                <p className="mt-1 text-detalhe text-texto-2">[{camp.coordinates}]</p>
              </article>
            ))}
          </div>
        </div>

        {/* Notas e a print de requisitos lado a lado (a print é um recorte pequeno; sozinha ficava perdida). */}
        <div className="mb-8 grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div className="rounded-md border border-linha bg-carvao p-5 sm:p-7">
          <div className="space-y-3">
            {lootrunCampsIntro.notes.map((note) => (
              <div key={note} className="flex gap-3 text-texto-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
        {lootrunCampsIntro.media.map((item) => (
          <LootrunMediaPlaceholder key={item.name} item={item} sizes={ehPrintPequena(item.src) ? tamanhos.lateral : tamanhos.metade} />
        ))}
        </div>

        <div className="space-y-4">
          {lootrunCamps.map((camp, index) => {
            const media = camp.media ?? [];
            const featuredMedia = media.find((item) => !isAnimado(item)) ?? media[0];
            const secondaryMedia = media.filter((item) => item !== featuredMedia);
            // Uma mídia secundária só: vai ao lado das notas, em vez de ocupar meia linha sozinha.
            const lateral = secondaryMedia.length === 1 ? secondaryMedia[0] : null;

            return (
              <article key={camp.name} className="rounded-md border border-linha bg-carvao p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-detalhe font-bold uppercase tracking-[0.35em] text-violeta/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-titulo-4 font-bold text-texto">{camp.name}</h3>
                  <span className="rounded-md border border-linha bg-gsw/15 px-2 py-1 text-detalhe text-texto-2">
                    {camp.difficulty}
                  </span>
                </div>

                <p className="text-apoio text-texto-2">
                  Coordenadas: <span className="font-medium text-zinc-200">{camp.coordinates}</span>
                </p>

                <div className={`mt-3 ${lateral ? "grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]" : ""}`}>
                  <div className="space-y-2">
                    {camp.notes.map((note) => (
                      <div key={note} className="flex gap-3 text-texto-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                  {lateral ? <LootrunMediaPlaceholder item={lateral} compact sizes={tamanhos.lateral} /> : null}
                </div>

                {featuredMedia ? (
                  <div className="mt-4 space-y-4">
                    <LootrunMediaPlaceholder item={featuredMedia} />

                    {secondaryMedia.length > 1 ? (
                      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                        {secondaryMedia.map((item) => (
                          <LootrunMediaPlaceholder key={item.name} item={item} compact sizes={tamanhos.terco} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {camp.dangerousChallenges && camp.dangerousChallenges.length > 0 ? (
                  <div className="mt-4 rounded-md border border-linha bg-carvao p-3 sm:p-4">
                    <p className="text-apoio font-bold text-texto-3">Desafios de atenção</p>
                    <div className="mt-2 space-y-1.5">
                      {camp.dangerousChallenges.map((challenge) => (
                        <p key={challenge} className="text-apoio text-texto-2">
                          - {challenge}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

