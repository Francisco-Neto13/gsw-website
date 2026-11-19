import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  atributosDoFilho,
  avisoDoBreeding,
  comoFazerBreeding,
  corDoFilho,
  montariasBreedingIntro,
  requisitoDoBreeding,
} from "@/components/mounts/data/mounts-content";

export default function MontariasBreeding() {
  return (
    <SecaoGuia id="breeding" titulo="Breeding" introducao={montariasBreedingIntro}>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-linha bg-carvao px-5 py-4">
          <h3 className="text-titulo-5 font-bold text-texto">Como fazer</h3>
          <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {comoFazerBreeding.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </ol>
        </div>
        <div className="rounded-md border border-linha bg-carvao px-5 py-4">
          <h3 className="text-titulo-5 font-bold text-texto">Requisito</h3>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {requisitoDoBreeding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="mt-10 max-w-leitura text-titulo-4 font-bold text-texto">Como os atributos do filho são calculados</h3>
      <dl className="mt-4 grid gap-4 sm:gap-6 lg:grid-cols-3">
        {atributosDoFilho.map((atributo) => (
          <div key={atributo.nome} className="rounded-md border border-linha bg-carvao px-5 py-4">
            <dt className="font-mono font-bold text-violeta">{atributo.nome}</dt>
            <dd className="mt-2 text-texto-2">
              {atributo.texto}
              {atributo.dica ? <span className="mt-2 block text-apoio text-texto-3">Dica: {atributo.dica}</span> : null}
            </dd>
          </div>
        ))}
      </dl>

      <Destaque {...avisoDoBreeding} className="mt-6" />

      <h3 className="mt-10 max-w-leitura text-titulo-4 font-bold text-texto">Aparência do filho</h3>
      <p className="mt-2 max-w-leitura text-texto-2">{corDoFilho}</p>
    </SecaoGuia>
  );
}
