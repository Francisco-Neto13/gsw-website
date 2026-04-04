# GsW Website

<div align="center">
  <img src="./public/icon.webp" width="120" alt="GsW Logo" style="border-radius: 50%">
  <p>Portal oficial da comunidade GsW.</p>
  <a href="https://gsw-website.vercel.app/"><strong>Acessar site</strong></a>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
</div>

---

## Visão geral

O site da GsW funciona como o portal oficial da comunidade. Ele reúne a identidade da guilda, preserva a sua história e abre espaço para páginas de guia que ajudam novos e antigos membros a navegar melhor pelo universo de Wynncraft.

Mais do que uma landing page, o projeto foi pensado para servir como um ponto central de referência da comunidade: um lugar onde a história da guilda, seus membros, seus registros visuais e seus futuros tutoriais convivem dentro da mesma linguagem visual.

## O que o site entrega

- uma página inicial que apresenta a proposta do portal e o posicionamento da GsW
- uma página de história dedicada ao legado da guilda, com crônicas, pilares, membros e galeria
- uma base para páginas de guia, começando pela área de leveling
- uma navegação pública simples e direta, focada apenas na experiência frontend
- conteúdo visual servido localmente, sem dependência de banco de dados ou painel administrativo

## Conteúdo da comunidade

O projeto mantém a galeria e os membros diretamente no repositório, para que o conteúdo da comunidade continue acessível e fácil de editar sem depender de serviços externos.

### Membros

A seção de membros exibe os nomes, cargos, tags e retratos que representam a estrutura viva da guilda. Esses dados são mantidos localmente, preservando a ordem e a identidade definida pela própria comunidade.

### Galeria

A galeria registra momentos importantes da GsW, como reuniões, finais de season, guerras antigas e eventos internos. Cada item pode carregar título, descrição e imagem local, mantendo o tom memorial que o site precisa transmitir.

## Fluxo de imagens

O site usa imagens locais em `.webp` para manter o carregamento leve e o visual consistente. Para apoiar esse fluxo, o projeto inclui uma área dedicada de conversão:

- entradas em `image-workbench/input`
- saídas em `image-workbench/output`
- script em `scripts/convert-to-webp.mjs`

O conversor segue a lógica usada anteriormente no projeto, mantendo:

- saída em `.webp`
- limite visual de até `800px`
- qualidade equivalente ao padrão anterior
- aviso quando o arquivo final ultrapassa a faixa que antes era tratada como referência de otimização

## Direção atual do projeto

Hoje o site está intencionalmente orientado a frontend. A proposta é evoluir o portal com novas páginas, guias e conteúdos institucionais, sem carregar a complexidade de autenticação, banco de dados ou dashboard interno.

Isso deixa o projeto mais simples de manter, mais previsível visualmente e mais alinhado ao objetivo principal: comunicar a identidade da GsW e organizar seu conteúdo público.

## Licença

Este projeto é fechado e protegido por direitos autorais.

© 2024-2026 GsW. Todos os direitos reservados.

Consulte o arquivo `LICENSE` para os termos completos de uso e restrição.
