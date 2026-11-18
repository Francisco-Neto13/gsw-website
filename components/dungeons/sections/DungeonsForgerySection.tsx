import Destaque from "@/components/guias/Destaque";
import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  forgeryExtras,
  forgeryImagem,
  forgeryIntro,
  forgeryMitico,
  forgeryRegras,
  forgeryTabela,
} from "@/components/dungeons/data/dungeons-content";
import { tamanhos } from "@/lib/tamanhos";

const colunas = ["XP", "Esmeraldas", "Runas", "Tokens", "Mítico"] as const;

export default function DungeonsForgerySection() {
  return (
    <SecaoGuia id="forgery" titulo="Forgery" introducao={forgeryIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div>
          <h3 className="text-titulo-4 font-bold text-texto">Como o Forgery Chest conta</h3>
          <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {forgeryRegras.map((regra) => (
              <li key={regra}>{regra}</li>
            ))}
          </ul>
        </div>
        <FiguraNoTamanho imagem={forgeryImagem} sizes={tamanhos.lateral} />
      </div>

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">O que o baú dá em cada contagem</h3>
      <div className="mt-4 overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[36rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Recompensa média do Forgery Chest por número de dungeons corrompidas concluídas</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Contagem
              </th>
              {colunas.map((coluna) => (
                <th key={coluna} scope="col" className="px-4 py-2.5 text-right font-bold">
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="numeros font-mono">
            {forgeryTabela.map((linha) => (
              <tr key={linha.contagem} className="border-t border-linha">
                <th scope="row" className="px-4 py-2 text-left font-medium text-texto">
                  {linha.contagem}/8
                </th>
                {[linha.xp, linha.esmeraldas, linha.runas, linha.tokens, linha.mitico].map((valor, indice) => (
                  <td key={colunas[indice]} className="px-4 py-2 text-right text-texto-2">
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 max-w-leitura text-apoio text-texto-3">Valores médios; as esmeraldas e as runas variam a cada baú.</p>

      <Destaque {...forgeryMitico} className="mt-6" />

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">Itens que só saem do baú</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {forgeryExtras.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SecaoGuia>
  );
}
