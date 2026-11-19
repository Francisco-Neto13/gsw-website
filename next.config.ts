import type { NextConfig } from "next";
import { LARGURAS } from "./lib/variantes";

// Site estático (docs/MIGRACAO-VPS.md): o `next build` gera out/ e o scripts/gerar-variantes.mjs completa com
// as variantes das imagens, a pré-compressão e os redirects. Redirects, cache e cabeçalhos de segurança ficam
// no Caddy (infra/Caddyfile e infra/gerado/redirects.caddy), não aqui: o export estático não os aplica.
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: {
    // As variantes saem do build; o carregador só escolhe a largura (lib/carregador-de-imagem.ts).
    loader: "custom",
    loaderFile: "./lib/carregador-de-imagem.ts",
    deviceSizes: LARGURAS.filter((largura) => largura >= 384),
    imageSizes: LARGURAS.filter((largura) => largura < 384),
  },
};

export default nextConfig;
