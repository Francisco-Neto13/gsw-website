import Destaque from "@/components/guias/Destaque";
import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import type { Setor } from "@/components/guild-house/data/guild-house-content";
import { dimensoesDe } from "@/lib/imagens";

/** Um setor da ilha: descrição, o que tem nele e a galeria. */
export default function GuildHouseSetor({ setor }: { setor: Setor }) {
  const imagens = setor.imagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id={setor.id} titulo={`${setor.numero}. ${setor.nome}`} introducao={setor.resumo}>
      {setor.itens.length > 0 ? (
        <dl className="flex max-w-leitura flex-col gap-2 text-texto-2">
          {setor.itens.map((item) => (
            <div key={item.texto}>
              {item.rotulo ? <dt className="inline font-bold text-texto">{item.rotulo}: </dt> : null}
              <dd className="inline">{item.texto}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {setor.aviso ? <Destaque tipo="aviso" titulo="Aviso" texto={setor.aviso} className={setor.itens.length > 0 ? "mt-6" : ""} /> : null}
      {imagens.length > 0 ? <Galeria className="mt-8" itens={imagens} /> : null}
    </SecaoGuia>
  );
}
