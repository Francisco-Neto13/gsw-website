import { Fragment } from "react";
import Termo from "@/components/guias/Termo";
import { glossario, type ChaveDoGlossario } from "@/lib/glossario";

// Marcação nos textos de data/: [[chave]] ou [[chave|texto exibido]] vira um <Termo>.
const MARCA = /\[\[(\w+)(?:\|([^\]]+))?\]\]/g;

const ehChave = (chave: string): chave is ChaveDoGlossario => chave in glossario;

/** Texto de guia com termos do jogo interativos. Chave desconhecida aparece como texto simples. */
export default function TextoComTermos({ texto }: { texto: string }) {
  const partes: React.ReactNode[] = [];
  let ultimo = 0;
  for (const marca of texto.matchAll(MARCA)) {
    const [inteira, chave, exibido] = marca;
    const inicio = marca.index ?? 0;
    partes.push(texto.slice(ultimo, inicio));
    partes.push(ehChave(chave) ? <Termo key={inicio} id={chave}>{exibido}</Termo> : (exibido ?? chave));
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
