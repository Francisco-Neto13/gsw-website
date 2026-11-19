import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import {
  bombasDeProfissao,
  craftingImagens,
  craftingIntro,
  craftingRegras,
  craftingXp,
} from "@/components/professions/data/professions-content";
import { dimensoesDe } from "@/lib/imagens";

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

export default function ProfessionCraftingSection() {
  const imagens = craftingImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="crafting" titulo="Crafting" introducao={craftingIntro}>
      <Lista itens={craftingRegras} />
      {imagens.length > 0 ? <Galeria className="mt-8 lg:max-w-[60rem]" proporcao="4 / 3" numerar itens={imagens} /> : null}

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">Como subir o XP de crafting</h3>
      <Lista itens={craftingXp} />

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">Bombas de profissão</h3>
      <Lista itens={bombasDeProfissao} />
    </SecaoGuia>
  );
}
