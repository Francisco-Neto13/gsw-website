/**
 * Prévia de cada guia para a Início: tópicos principais e tempo estimado de leitura, tirados do próprio conteúdo
 * do guia (os arquivos `*-content.ts`), para nunca ficarem desatualizados. Só roda no servidor (a Início é um
 * componente de servidor): os módulos de conteúdo não vão para o navegador.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import * as dungeons from "@/components/dungeons/data/dungeons-content";
import * as leveling from "@/components/leveling/data/leveling-content";
import * as lootrun from "@/components/lootrun/data/lootrun-content";
import * as profissoes from "@/components/professions/data/professions-content";
import * as raids from "@/components/raids/data/raids-content";
import * as shares from "@/components/silverbull-shares/data/silverbull-shares-content";
import * as festivais from "@/components/festivals/data/festivals-content";
import * as montarias from "@/components/mounts/data/mounts-content";
import * as modos from "@/components/special-modes/data/special-modes-content";
import * as eventos from "@/components/world-events/data/world-events-content";
import { guias, type Guia } from "@/lib/site-content";

const conteudoDoGuia: Record<string, Record<string, unknown>> = {
  leveling,
  profissoes,
  montarias,
  lootrun,
  raids,
  dungeons,
  "world-events": eventos,
  "silverbull-shares": shares,
  "modos-especiais": modos,
  festivais,
};

/** Arquivo de dados de cada guia, para ler a ordem das seções (a Início é gerada no build). */
const arquivoDoGuia: Record<string, string> = {
  leveling: "components/leveling/data/leveling-content.ts",
  profissoes: "components/professions/data/professions-content.ts",
  lootrun: "components/lootrun/data/lootrun-content.ts",
  "world-events": "components/world-events/data/world-events-content.ts",
  "silverbull-shares": "components/silverbull-shares/data/silverbull-shares-content.ts",
  "modos-especiais": "components/special-modes/data/special-modes-content.ts",
};

const PALAVRAS_POR_MINUTO = 200;
const MAXIMO_DE_TOPICOS = 4;

/** Junta todo texto corrido do módulo. Só conta frase (tem espaço): caminho, id de vídeo e cor ficam fora. */
function textosDe(valor: unknown, saida: string[] = [], vistos = new Set<unknown>()): string[] {
  if (typeof valor === "string") {
    if (valor.includes(" ")) saida.push(valor.replace(/\[\[\w+\|?([^\]]*)\]\]/g, "$1"));
  } else if (valor && typeof valor === "object" && !vistos.has(valor)) {
    vistos.add(valor);
    for (const item of Object.values(valor)) textosDe(item, saida, vistos);
  }
  return saida;
}

/** Minutos de leitura, arredondados para cima; null para guia sem conteúdo ainda. */
export function tempoDeLeitura(slug: string): number | null {
  const modulo = conteudoDoGuia[slug];
  if (!modulo) return null;
  const palavras = textosDe(modulo).join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palavras / PALAVRAS_POR_MINUTO));
}

/**
 * Tópicos principais: os títulos das seções do guia. Na Raids vêm do registro (`secoes`); nos outros, das
 * introduções de seção (objetos com `eyebrow` e `title`), sem o título do próprio guia e sem "Extra".
 */
export function topicosDoGuia(guia: Guia): string[] {
  if (guia.secoes) {
    return guia.secoes.filter((secao) => secao.nivel !== 3 && secao.id !== "fontes").map((secao) => secao.titulo).slice(0, MAXIMO_DE_TOPICOS);
  }
  const modulo = conteudoDoGuia[guia.slug];
  if (!modulo) return [];
  // As exportações de um módulo vêm em ordem alfabética; a ordem do guia é a do arquivo de dados.
  const fonte = arquivoDoGuia[guia.slug] ? readFileSync(path.join(process.cwd(), arquivoDoGuia[guia.slug]), "utf8") : "";
  const posicao = (titulo: string) => {
    const i = fonte.indexOf(`title: "${titulo}"`);
    return i < 0 ? Number.MAX_SAFE_INTEGER : i;
  };
  return Object.entries(modulo)
    .filter(([nome]) => !/GuideIntro$/.test(nome))
    .map(([, valor]) => valor)
    .filter((valor): valor is { title: string; eyebrow: string } =>
      Boolean(valor && typeof valor === "object" && "eyebrow" in valor && "title" in valor),
    )
    .map((intro) => intro.title)
    .filter((titulo) => titulo !== "Extra" && titulo !== guia.titulo)
    .sort((a, b) => posicao(a) - posicao(b))
    .slice(0, MAXIMO_DE_TOPICOS);
}

export type PreviaDoGuia = { guia: Guia; topicos: string[]; minutos: number | null };

export const previaDoGuia = (guia: Guia): PreviaDoGuia => ({
  guia,
  topicos: topicosDoGuia(guia),
  minutos: guia.estado === "em-construcao" ? null : tempoDeLeitura(guia.slug),
});

/** Para conferência (teste e depuração): a prévia de todos os guias do registro. */
export const todasAsPrevias = () => guias.map(previaDoGuia);
