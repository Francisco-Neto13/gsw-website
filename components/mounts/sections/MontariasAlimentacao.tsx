import { Calculator, Table } from "lucide-react";
import Destaque from "@/components/guias/Destaque";
import RecursoExterno from "@/components/guias/RecursoExterno";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  comoFuncionaAlimentacao,
  dicaDoLevel,
  montariasAlimentacaoIntro,
  recursosDeAlimentacao,
} from "@/components/mounts/data/mounts-content";

const icones = [Table, Calculator];

export default function MontariasAlimentacao() {
  return (
    <SecaoGuia id="alimentacao" titulo="Alimentação" introducao={montariasAlimentacaoIntro}>
      <h3 className="max-w-leitura text-titulo-4 font-bold text-texto">Como funciona</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {comoFuncionaAlimentacao.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Destaque {...dicaDoLevel} className="mt-6" />

      <h3 className="mt-10 max-w-leitura text-titulo-4 font-bold text-texto">Ferramentas</h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {recursosDeAlimentacao.map((recurso, indice) => (
          <li key={recurso.titulo}>
            <RecursoExterno {...recurso} Icone={icones[indice % icones.length]} />
          </li>
        ))}
      </ul>
    </SecaoGuia>
  );
}
