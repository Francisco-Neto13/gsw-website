import SecaoGuia from "@/components/guias/SecaoGuia";
import IconeProfissao from "@/components/professions/sections/IconeProfissao";
import {
  craftingProfessions,
  gatheringProfessions,
  tiposIntro,
} from "@/components/professions/data/professions-content";

function Tabela({ legenda, colunas, linhas }: { legenda: string; colunas: string[]; linhas: { icone: string; nome: string; celulas: string[] }[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-linha">
      <table className="w-full min-w-[36rem] border-collapse text-left text-apoio">
        <caption className="bg-carvao px-4 py-2.5 text-left font-bold text-texto">{legenda}</caption>
        <thead className="border-t border-linha text-texto-3">
          <tr>
            {colunas.map((coluna) => (
              <th key={coluna} scope="col" className="px-4 py-2 font-medium">
                {coluna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha) => (
            <tr key={linha.nome} className="border-t border-linha align-top">
              <th scope="row" className="px-4 py-2.5 font-medium text-texto">
                <span className="flex items-center gap-2.5">
                  <IconeProfissao src={linha.icone} />
                  {linha.nome}
                </span>
              </th>
              {linha.celulas.map((celula, indice) => (
                <td key={colunas[indice + 1]} className="px-4 py-2.5 text-texto-2">
                  {celula}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProfessionTypesSection() {
  return (
    <SecaoGuia id="tipos" titulo="Tipos de profissão" introducao={tiposIntro}>
      <div className="flex flex-col gap-6">
        <Tabela
          legenda="Coleta"
          colunas={["Profissão", "Recursos", "Ferramenta", "Usado por"]}
          linhas={gatheringProfessions.map((p) => ({ icone: p.icone, nome: p.name, celulas: [p.resources, p.tool, p.usadoPor] }))}
        />
        <Tabela
          legenda="Crafting"
          colunas={["Profissão", "Cria", "Materiais de"]}
          linhas={craftingProfessions.map((p) => ({ icone: p.icone, nome: p.name, celulas: [p.produces, p.resources] }))}
        />
      </div>
    </SecaoGuia>
  );
}
