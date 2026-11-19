import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { participacaoImagens, participacaoIntro, participacaoRegras } from "@/components/world-events/data/world-events-content";
import { dimensoesDe } from "@/lib/imagens";

export default function WorldEventsParticipationSection() {
  const imagens = participacaoImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="participar" titulo="Como participar" introducao={participacaoIntro}>
      <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {participacaoRegras.map((regra) => (
          <li key={regra}>{regra}</li>
        ))}
      </ul>
      {imagens.length > 0 ? <Galeria className="mt-8" itens={imagens} /> : null}
    </SecaoGuia>
  );
}
