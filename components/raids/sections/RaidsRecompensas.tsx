import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import {
  raidAspectDetails,
  raidAspectExamples,
  raidDailyBonus,
  raidRewardImages,
  raidRewardOutcomes,
  raidRewardsDescription,
} from "@/components/raids/data/raids-content";
import { tamanhoDe } from "@/components/raids/data/raids-midia";
import ImagemDoJogo from "@/components/shared/ImagemDoJogo";

export default function RaidsRecompensas() {
  return (
    <SecaoGuia id="recompensas" titulo="Recompensas" introducao={raidRewardsDescription}>
      <ul className="flex max-w-[60ch] flex-col gap-3">
        {raidRewardOutcomes.map((resultado) => (
          <li key={resultado.label}>
            <p className="font-bold text-texto">
              {resultado.label}: <span className="text-violeta">{resultado.value}</span>
            </p>
            <p className="text-texto-2">{resultado.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-[60ch] text-texto-2">{raidDailyBonus}</p>

      <h3 className="mt-10 max-w-[60ch] text-lg font-bold text-texto">
        <TextoComTermos texto="[[aspect|Aspects]]" />
      </h3>
      <div className="mt-4 grid max-w-[56rem] items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 flex flex-wrap gap-2 text-[0.9rem]" aria-label="Raridades de aspect">
            <span className="rounded border border-raridade-legendary/60 px-2 py-0.5 text-raridade-legendary">Legendary</span>
            <span className="rounded border border-raridade-fabled/60 px-2 py-0.5 text-raridade-fabled">Fabled</span>
            <span className="rounded border border-raridade-mythic px-2 py-0.5 text-raridade-mythic-texto">Mythic</span>
          </p>
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {raidAspectDetails.map((detalhe) => (
              <li key={detalhe}>{detalhe}</li>
            ))}
          </ul>
          <p className="mt-4 text-texto-2">
            Exemplos de efeito: <span className="text-texto">{raidAspectExamples.join(", ")}</span>.
          </p>
        </div>
        <figure>
          <ImagemDoJogo
            base="/raids/prints/raid-ui-aspecto-mitico"
            alt="Caixa de item de um aspect mítico do Warrior, aberta no baú da raid, com os bônus por habilidade"
            larguras={[640, 1280]}
            largura={1280}
            altura={720}
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="h-auto w-full rounded-md border border-linha"
          />
          <figcaption className="mt-2 text-[0.95rem] text-texto-3">
            Um aspect mítico no baú final, com a caixa de item aberta. Print da guilda.
          </figcaption>
        </figure>
      </div>

      <div className="mt-10 grid max-w-[56rem] gap-6 md:grid-cols-3">
        <figure>
          <ImagemDoJogo
            base="/raids/prints/raid-ui-bau-recompensa"
            alt="Baú de recompensa da raid aberto, com pulls, esmeraldas e itens"
            larguras={[640, 1280]}
            largura={1280}
            altura={720}
            sizes="(min-width: 768px) 18rem, 100vw"
            className="h-auto w-full rounded-md border border-linha"
          />
          <figcaption className="mt-2 text-[0.95rem] text-texto-3">O baú final por dentro. Print da guilda.</figcaption>
        </figure>
        {raidRewardImages.map((imagem) => (
          <Figura
            key={imagem.src}
            src={imagem.src}
            alt={imagem.alt}
            legenda={imagem.caption}
            sizes="(min-width: 768px) 18rem, 100vw"
            {...tamanhoDe(imagem.src)}
          />
        ))}
      </div>
    </SecaoGuia>
  );
}
