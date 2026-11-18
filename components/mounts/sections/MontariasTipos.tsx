import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { tiposDeMontaria } from "@/components/mounts/data/mounts-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

export default function MontariasTipos() {
  return (
    <SecaoGuia
      id="tipos"
      titulo="Tipos de montaria"
      introducao="Cada tipo é liberado por uma quest e fica num curral próprio, onde você treina, alimenta e cruza as montarias dele."
    >
      <ul className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {tiposDeMontaria.map((tipo) => (
          <li key={tipo.id} id={tipo.id} className="flex flex-col rounded-md border border-linha bg-carvao p-4 sm:p-5">
            {/* A imagem só entra depois de medida (lib/dimensoes-imagens.json): sem ela, o cartão fica só com os dados. */}
            {dimensoesDe(tipo.imagem.src) ? (
              <Figura src={tipo.imagem.src} alt={tipo.imagem.alt} sizes={tamanhos.terco} proporcao="4 / 3" className="mb-4" />
            ) : null}
            <h3 className="text-titulo-4 font-bold text-texto">
              {tipo.nome} <span className="font-normal text-texto-3">({tipo.nomeIngles})</span>
            </h3>
            <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1.5 text-apoio">
              <dt className="text-texto-3">Liberado</dt>
              <dd className="text-texto">
                Nível <span className="numeros">{tipo.nivel}</span>, na quest {tipo.quest}
              </dd>
              <dt className="text-texto-3">Curral</dt>
              <dd className="text-texto">
                {tipo.curral}, em {tipo.regiao}
              </dd>
              <dt className="text-texto-3">Coordenadas</dt>
              <dd className="numeros whitespace-nowrap font-mono text-texto">{tipo.coordenadas}</dd>
            </dl>
            <p className="mt-3 border-t border-linha pt-3 text-texto-2">{tipo.caracteristicas}</p>
          </li>
        ))}
      </ul>
    </SecaoGuia>
  );
}
