/**
 * Texto corrompido de propósito (o "mistério" do Festival of the Spirits): o glitch é só visual (motion.css,
 * .texto-glitch) e fica escondido dos leitores de tela, que leem a frase limpa.
 */
export default function TextoGlitch({ visivel, leitura }: { visivel: string; leitura: string }) {
  return (
    <span className="texto-glitch-caixa">
      <span aria-hidden className="texto-glitch" data-texto={visivel}>
        {visivel}
      </span>
      <span className="sr-only">{leitura}</span>
    </span>
  );
}
