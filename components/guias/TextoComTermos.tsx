import { Fragment } from "react";
import Coordenada from "@/components/guias/Coordenada";
import Termo from "@/components/guias/Termo";
import { glossario, type ChaveDoGlossario } from "@/lib/glossario";

// Marcação nos textos de data/: [[chave]] ou [[chave|texto exibido]] vira um <Termo>; {{x, y, z}}, uma <Coordenada>.
// A pontuação logo depois da marca vai junto dela, para a vírgula não cair sozinha na linha de baixo.
const MARCA = /(?:\[\[(\w+)(?:\|([^\]]+))?\]\]|\{\{(-?\d+, -?\d+, -?\d+)\}\})([.,;:!?)]*)/g;

const ehChave = (chave: string): chave is ChaveDoGlossario => chave in glossario;

/** Texto de guia com termos do jogo interativos. Chave desconhecida aparece como texto simples. */
export default function TextoComTermos({ texto }: { texto: string }) {
  const partes: React.ReactNode[] = [];
  let ultimo = 0;
  for (const marca of texto.matchAll(MARCA)) {
    const [inteira, chave, exibido, coordenada, pontuacao] = marca;
    const inicio = marca.index ?? 0;
    partes.push(texto.slice(ultimo, inicio));
    const peca = coordenada ? (
      <Coordenada valor={coordenada} />
    ) : ehChave(chave) ? (
      <Termo id={chave}>{exibido}</Termo>
    ) : (
      (exibido ?? chave)
    );
    partes.push(
      pontuacao ? (
        <span key={inicio} className="whitespace-nowrap">
          {peca}
          {pontuacao}
        </span>
      ) : (
        <Fragment key={inicio}>{peca}</Fragment>
      ),
    );
    ultimo = inicio + inteira.length;
  }
  partes.push(texto.slice(ultimo));
  return (
    <>
      {partes.map((parte, indice) => (
        <Fragment key={indice}>{parte}</Fragment>
      ))}
    </>
  );
}
