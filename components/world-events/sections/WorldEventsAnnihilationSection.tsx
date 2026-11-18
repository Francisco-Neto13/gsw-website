import Destaque from "@/components/guias/Destaque";
import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";
import {
  annihilationFicha,
  annihilationImagens,
  annihilationIntro,
  annihilationOutros,
  annihilationParty,
  annihilationSol,
  annihilationVideo,
  corruptedCache,
} from "@/components/world-events/data/world-events-content";
import { tamanhos } from "@/lib/tamanhos";

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
      {itens.map((item) => (
        <li key={item}>
          <TextoComTermos texto={item} />
        </li>
      ))}
    </ul>
  );
}

export default function WorldEventsAnnihilationSection() {
  const [chefe, portal] = annihilationImagens;
  return (
    <SecaoGuia id="annihilation" titulo="Annihilation" introducao={annihilationIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <figure>
          <div className="overflow-hidden rounded-md border border-linha bg-poco">
            <LazyYouTubeEmbed videoId={annihilationVideo.videoId} title={annihilationVideo.title} />
          </div>
          <figcaption className="mt-2 text-apoio text-texto-3">{annihilationVideo.caption}</figcaption>
        </figure>
        <dl className="grid gap-x-6 gap-y-2.5 rounded-md border border-linha bg-carvao px-5 py-4 sm:grid-cols-[max-content_1fr]">
          {annihilationFicha.map((linha) => (
            <div key={linha.rotulo} className="contents">
              <dt className="text-apoio text-texto-3">{linha.rotulo}</dt>
              <dd className="text-texto">{linha.valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* As listas com o chefe ao lado, na coluna lateral padrão dos guias. */}
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div>
          <h3 className="text-titulo-4 font-bold text-texto">Montando a party</h3>
          <Lista itens={annihilationParty} />

          <h3 className="mt-10 text-titulo-4 font-bold text-texto">O New Sun e os Subjugates</h3>
          <Lista itens={annihilationSol} />

          <h3 className="mt-10 text-titulo-4 font-bold text-texto">Outros ataques para conhecer</h3>
          <Lista itens={annihilationOutros} />

          <Destaque {...corruptedCache} className="mt-8" />
        </div>
        <FiguraNoTamanho imagem={chefe} sizes={tamanhos.lateral} />
      </div>

      <div className="mt-8 lg:max-w-[48rem]">
        <FiguraNoTamanho imagem={portal} sizes={tamanhos.solta} />
      </div>
    </SecaoGuia>
  );
}
