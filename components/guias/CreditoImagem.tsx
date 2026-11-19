import { creditoDe } from "@/lib/imagens";

/** "© Wynncraft" com link para a página de origem da imagem de terceiros (lib/terceiros.ts). Nada para imagem própria. */
export default function CreditoImagem({ src, rotulo }: { src: string; rotulo?: string }) {
  const credito = creditoDe(src);
  if (!credito) return null;
  const texto = rotulo ? `${rotulo} ${credito.texto}` : credito.texto;
  return credito.href ? (
    <a
      href={credito.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-detalhe text-texto-3 underline decoration-texto-3/40 hover:text-texto-2"
    >
      {texto}
      <span className="sr-only"> (origem da imagem, abre em nova aba)</span>
    </a>
  ) : (
    <span className="text-detalhe">{texto}</span>
  );
}
