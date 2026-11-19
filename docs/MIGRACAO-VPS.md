# Migração da Vercel para a VPS: análise e plano

> **Status: aguardando aprovação.** Nada foi alterado na VPS, no DNS nem na Vercel. Levantamento feito
> em 18/11/2026 só com leitura (`ssh vps`, `vps-espaco`, `docker stats`, `sar`, arquivos de `/srv/proxy`
> e de `/srv/servidor/docs`), seguindo `/srv/REGRAS-DA-VPS.md`.

## Resumo

- **Forma de servir recomendada:** site **estático** (`output: "export"` do Next), com as versões
  responsivas das imagens geradas no build, servido por um contêiner Caddy mínimo atrás do proxy da VPS.
  Não precisa de servidor Node.
- **Peso na VPS:**
  - **Memória:** +64 MB de teto (uso real de ~15 MB).
  - **CPU:** perto de zero em repouso.
  - **Disco:** ~1,5 GB com rollback e cache de build, dos 145 GB livres.
- **Cabe nas regras:** a soma dos tetos de memória vai de 7,8 GB para 7,86 GB, abaixo do limite de 8 GB. O
  disco continua com ~75% livre.
- **Antes de subir, vale corrigir uma coisa:** as 16 animações do Lootrun somam 80 MB e baixam sozinhas
  ao rolar a página. Uma visita que vai até o fim do Lootrun gasta 82 MB. Recomendo reconverter essas
  animações antes da virada (seção 3.4).
- **Duas decisões suas:** o domínio (seção 5) e se a Cloudflare entra agora ou depois (seção 3.4).

## 1. Estado atual da VPS

### Máquina

| Item | Valor |
|---|---|
| CPU | 6 vCPU (AMD EPYC, 2,0 GHz). Uso médio do dia: ~6% (`sar`: 93,7% ocioso); carga 0,8 a 1,6 |
| Memória | 12 GB, sem swap. Em uso 2,3 GB; disponível 9,6 GB |
| Tetos de memória (`mem_limit`) | Soma de 7,8 GB, de um limite de 8 GB pelas regras. Sobram ~200 MB para projetos novos |
| Disco | 193 GB; 49 GB em uso, **145 GB livres (75%)** |
| Cofre do tracker | 21 GB fixos (`/srv/dados`), 2,1 GB em uso |
| Docker | Imagens 9,7 GB; cache de build 19 GB no total, 3,2 GB dele exclusivo (teto do GC: 3 GB) |
| Rede | IPv4 13.140.208.115; IPv6 `2a02:c207:2372:5060::1` (bloco da Contabo). Os domínios hoje só publicam registro A |
| Provedor de DNS | Porkbun (`chiconeto.dev`), sem Cloudflare na frente |

### Contêineres (uso no momento da leitura / teto)

| Contêiner | Projeto | Memória | Teto | CPU (teto) |
|---|---|---|---|---|
| `proxy-caddy-1` | proxy da VPS | 17 MB | 256 MB | 1 |
| `portfolio-prod-portfolio-1` | Portfolio (Next com servidor) | 244 MB | 768 MB | 2 |
| `gastos-prod-gastos-1` / `-postgres-1` | Gastos | 181 / 72 MB | 768 / 512 MB | 2 / 2 |
| `internship-tracker-prod-app-1` / `-postgres-1` / `-storage-1` | Internship Tracker | 148 / 31 / 79 MB | 768 MB cada | 2 / 1 / 1 |
| `muda-web-1` | Muda (Caddy servindo o front estático) | **13 MB** | 64 MB | 0,5 |
| `muda-api-1` / `-worker-transcribe-1` / `-worker-convert-1` / `-db-1` | Muda | 69 / 453 / 57 / 36 MB | 384 MB / 2 GB / 384 MB / 512 MB | 1 / 3 / 1 / 1 |

No momento da leitura, Portfolio e Gastos estavam com picos de CPU (87% e 102% de um núcleo), mas a
média do dia é baixa.

### Proxy e TLS

- **Servidor:** Caddy 2.10 em `/srv/proxy`, dono das portas 80 e 443. Nenhum projeto publica porta.
- **Sites:** cada site é um arquivo em `/srv/proxy/sites/<projeto>.caddy`, aplicado com
  `sh /srv/proxy/recarregar.sh`, sem derrubar os outros.
- **Destino:** o arquivo aponta para o **nome do contêiner** na rede `borda`.
- **TLS:** HTTPS automático, com certificados emitidos e renovados pelo Caddy (Let's Encrypt), TLS 1.2 e
  1.3.
- **Padrões dos sites atuais:** `encode zstd gzip`, `header -Via`, HSTS no Muda e log de acesso filtrado no
  Gastos.
- **Timeouts do servidor:** `read_header` de 10 s e `idle` de 2 min.

### Padrão para projetos novos (`/srv/servidor/docs/MELHORIAS-VPS.md`)

- **Compose:**
  - nome `<projeto>-prod`;
  - `mem_limit` e `memswap_limit`, `cpus`, `pids_limit: 256`;
  - `no-new-privileges`, `read_only` com `tmpfs` de tamanho fixo;
  - healthcheck;
  - logs `json-file` de 10 MB × 3;
  - rede `borda` só no serviço que o proxy alcança.
- **Antes e depois:** `vps-espaco`, e a soma dos tetos de memória fica abaixo de 8 GB.
- **Registro:** o projeto entra em `docs/SITES-E-SERVICOS.md` e na tabela de memória das regras (no
  repositório `vps-chiconeto`).
- **Deploy (modelo do Portfolio):**
  - A CI chama `ssh deploy-<projeto>@vps "deploy"`.
  - A chave dela só pode disparar o deploy: comando forçado no `authorized_keys`, com sudo restrito a um
    script.
  - No servidor, o script faz `git fetch` e `reset` para `origin/main`, `docker compose build` e
    `up -d --wait`.
  - Se o build falhar, a versão atual continua no ar.

## 2. Forma de servir

### O que prende o site a um servidor Node hoje

Não há rota de API, middleware, server action, cookies nem renderização por pedido: as 18 páginas já são
geradas no build. Só três recursos do `next.config.ts` exigem o `next start`:

| Recurso | Como fica no estático |
|---|---|
| Redirects 308 das rotas antigas (`/raids` → `/guias/raids`, `/guias/guild-house` → `/historia/guild-house`...) | Gerados a partir do registro (`lib/site-content.ts`) num arquivo do Caddy, no próprio build |
| Cabeçalhos (cache de 1 ano na mídia, segurança) | No Caddyfile do site |
| Otimizador de imagens (`/_next/image`: AVIF/WebP no tamanho da tela) | Carregador próprio do `next/image` (`images.loader: "custom"`) que aponta para versões **geradas no build** |

### Por que não servir as imagens como estão

Medido no build atual, rolando cada página até o fim em 1440 px:

| Página | Hoje (com otimizador) | Se servisse os arquivos originais |
|---|---|---|
| `/historia` (galeria) | 1,15 MB | **30,0 MB** |
| `/guias/dungeons` | 0,96 MB | **21,4 MB** |
| `/guias/leveling` | 1,14 MB | **14,7 MB** |
| `/guias/raids` | 1,79 MB | 4,9 MB |

Por isso as versões menores de cada imagem são geradas no build:
- **Larguras:** 384, 640, 960, 1280 e 1920 px, mais as pequenas dos ícones, nunca acima do original.
- **Formato:** WebP com qualidade 82.
- **Teste real:** 353 imagens viraram 945 variantes, com **45 MB** no total, em **58 s**. Hoje os originais
  delas somam 104 MB.
- **Peso das páginas:** fica igual ao de hoje.
- **Originais:** continuam no site, porque a ampliação ao clicar usa o original, e só baixam no clique.

### Opções avaliadas

| Opção | Memória | Prós | Contras |
|---|---|---|---|
| **A. Estático num contêiner Caddy próprio** (recomendada) | +64 MB de teto, ~15 MB de uso | Mesmo padrão do `muda-web`. Rollback por imagem. O projeto não mexe no núcleo do proxy | Um contêiner a mais |
| B. Estático servido direto pelo proxy (pasta montada no `proxy-caddy-1`) | 0 | O mais leve possível | Muda o compose do proxy, que é núcleo versionado e compartilhado. O deploy do GsW passaria a mexer no proxy de todos |
| C. `next start` num contêiner Node (como o Portfolio) | 384 a 768 MB de teto | Nenhuma mudança no código | **Não cabe:** sobram ~200 MB até os 8 GB. O otimizador em tempo real já estourou memória no Portfolio |

**Recomendação: A.** O site fica estático (sem processo Node no ar), com o padrão que a VPS já usa para
front estático. O teto de 64 MB cabe nos ~200 MB que sobram.

## 3. Quanto o projeto vai pesar

### 3.1 Disco

| Parte | Tamanho |
|---|---|
| Imagens originais em `public/` | 186 MB (389 WebP e 20 AVIF; 80 MB são as 16 animações do Lootrun) |
| Vídeos (`public/lootrun/*.mp4`) | 3,8 MB |
| Variantes responsivas geradas no build | ~45 MB |
| HTML, JS, CSS e fontes do export | ~6 MB |
| **Site exportado (`out/`)** | **~240 MB** |
| Imagem Docker (Caddy ~50 MB + site) | ~290 MB |
| Versão anterior guardada para rollback | ~290 MB |
| Clone do repositório em `/srv/gsw` (raso, `--depth 1`) | ~200 MB. O clone completo teria ~1 GB, porque o histórico guarda os GIFs antigos |
| Cache de build (npm e camadas do Next) | ~1 GB, dentro do teto de 3 GB do GC, que já é compartilhado |
| **Total** | **~1,5 GB** dos 145 GB livres |

### 3.2 Memória e CPU

| Situação | Memória | CPU |
|---|---|---|
| Em repouso | ~15 MB (o `muda-web`, que faz o mesmo trabalho, usa 13 MB) | ~0 |
| Com acessos | Pouco acima disso: arquivos estáticos, sem renderização | Baixa. O HTML, o JS e o CSS saem já comprimidos do build (`precompressed`), sem comprimir a cada pedido |
| Teto no compose | 64 MB | 0,5 (no Muda, 0,25 deixou o servidor pausado pelo teto) |
| **Build na VPS** | ~2 GB por alguns minutos, fora dos contêineres (o espaço que as regras já reservam para builds) | Alguns minutos de 2 a 4 núcleos |

### 3.3 Tráfego

Peso de cada página com o build atual, medido com o navegador:

| Página | Primeira tela | Rolando até o fim |
|---|---|---|
| Início | 0,69 MB | 1,24 MB |
| `/guias`, Modos especiais, Profissões, Montarias, Sites úteis, World Events | 0,69 a 0,78 MB | 0,69 a 0,90 MB |
| Dungeons, Shares, Leveling, Festivais, Comunidade, Guild House | 0,56 a 0,84 MB | 0,96 a 1,15 MB |
| Raids | 0,86 MB | 1,79 MB |
| **Lootrun** | 0,79 MB | **82,0 MB** (as animações baixam ao chegar perto da tela) |

Cerca de 0,7 MB de cada página são HTML, JS, CSS e fontes. O JS e as fontes ficam em cache por 1 ano,
então a segunda página da mesma visita pesa bem menos.

Banda por mês, supondo 4 páginas por visita (~1 MB cada) e que 1 em cada 10 visitantes role o Lootrun
inteiro:

| Visitantes por mês | Sem mudar as animações | Com as animações reconvertidas (~12 MB no total) |
|---|---|---|
| 500 | ~6 GB | ~3 GB |
| 2.000 | ~25 GB | ~10 GB |
| 10.000 | ~120 GB | ~50 GB |

**Plano da VPS (Contabo Cloud VPS 6, conferido pelo dono):**
- **Franquia:** tráfego ilimitado, com política de uso justo. A franquia não é problema.
- **Porta:** o limite que importa é a porta de **300 Mbit/s (~37 MB/s)**, dividida entre todos os sites da
  VPS. Uma página comum (~1 MB) não pesa.
- **Lootrun hoje:** rolar o Lootrun inteiro (82 MB) ocupa a porta toda por ~2,2 s. Com 10 pessoas fazendo
  isso juntas, a porta satura por ~20 s, e Portfolio, Gastos, Muda e Internship ficam lentos nesse
  intervalo.
- **Lootrun com as animações reconvertidas:** o mesmo caso cai para ~3 s. É o principal motivo da
  recomendação 1 da seção 3.4.

### 3.4 Duas recomendações de peso

1. **Reconverter as animações do Lootrun antes da virada.** Hoje elas são WebP animado sem perda (80 MB).
   - **WebP com perda (qualidade ~80):** corta ~80% e mantém o mesmo componente.
   - **Vídeo WebM/MP4 curto em loop:** corta ainda mais e o componente de vídeo já existe.

   É uma mudança só de mídia, com teste visual, num PR próprio.
2. **Cloudflare: não precisa agora.** Com cache de 1 ano na mídia, compressão e os números acima, a VPS dá
   conta folgada.
   - **Para colocar a Cloudflare,** o domínio teria que passar a usar os nameservers dela. Se for um
     subdomínio de `chiconeto.dev`, isso mexe em todos os seus projetos. Num domínio próprio do GsW, a
     troca não afeta os outros.
   - **Quando vale:** se o tráfego crescer muito ou se você quiser esconder o IP da VPS. Nesse caso o proxy
     precisa do `trusted_proxies` da Cloudflare, como o comentário do Gastos já prevê.

### 3.5 Onde roda o build

**Na VPS, dentro do `docker build`, no mesmo modelo de Muda e Portfolio.** Um Dockerfile em dois estágios
faz o trabalho:
- **Estágio 1:** `node:24-alpine` roda `npm ci`, `next build` e o script das variantes.
- **Estágio 2:** `caddy:2.10-alpine` recebe só a pasta `out/`.

Resultado: ~3 a 5 minutos e ~2 GB de memória. O deploy confere antes se há pelo menos 10 GB livres, como
o do Muda.

A alternativa seria fazer o build na CI e mandar o `out/` pronto. O comando forçado do modelo atual só
aceita `deploy`, então seria um padrão novo. Não recomendo agora.

## 4. Saída da Vercel

| O que depende da Vercel | Onde | Substituto |
|---|---|---|
| Workflow de deploy com a CLI da Vercel | `.github/workflows/deploy.yml` | Novo `deploy.yml` no modelo do Portfolio: `ssh deploy-gsw@vps "deploy"` com dry-run |
| Secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` | GitHub, Settings › Secrets (só os nomes; nenhum valor aqui) | `VPS_HOST`, `VPS_PORT`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS` |
| Variável `DEPLOY_HABILITADO` | GitHub, Variables | Continua: liga o deploy depois da validação |
| Redirects e cabeçalhos no `next.config.ts` (a Vercel e o `next start` aplicam) | `next.config.ts` | Arquivo do Caddy gerado no build |
| Otimizador de imagens (`/_next/image`) | `next.config.ts`, `images` | Carregador próprio e variantes geradas no build |
| Domínio `gsw-website.vercel.app` | Painel da Vercel | O domínio novo (seção 5) |
| Docs da Vercel | `docs/CI-CD.md`, `docs/INFRAESTRUTURA.md`, `AGENTS.md` | Reescritas para a VPS no mesmo PR da migração |

Não há pacote `@vercel/*` (analytics, speed insights, og), `vercel.json`, pasta `.vercel/` nem
variável de ambiente no código. A integração Git da Vercel já está desligada.

## 5. Plano de implantação (para aprovar)

### 5.1 Decisões suas antes de começar

1. **Domínio.** Qual endereço o site vai ter?
   - um subdomínio, como `gsw.chiconeto.dev` (só um registro na Porkbun, que você já usa); ou
   - um domínio próprio do GsW.

   Hoje não há domínio próprio; o site só existe em `gsw-website.vercel.app`.
2. **Animações do Lootrun:** reconverter antes da virada (recomendado) ou depois.

### 5.2 Mudanças no projeto (um PR para `develop`, CI verde)

1. **`next.config.ts`:**
   - `output: "export"`;
   - `images: { loader: "custom", loaderFile: "./lib/carregador-de-imagem.ts" }`, com tamanhos de tela
     reduzidos;
   - sair os `redirects()` e `headers()`, que vão para o Caddy.
2. **`lib/carregador-de-imagem.ts`:** devolve a variante pré-gerada mais próxima, sem passar do tamanho
   original (lê `lib/dimensoes-imagens.json`). Imagem externa (a miniatura do YouTube) passa direto.
3. **`scripts/gerar-variantes.mjs`:** roda depois do `next build` e gera `out/_v/...`. Também gera as
   versões zstd, br e gzip do HTML, JS e CSS e o arquivo de redirects do Caddy, tirado do registro.
4. **Teste novo:** toda imagem usada pelo `next/image` tem variante; todo redirect do registro aparece no
   arquivo gerado.
5. **`infra/`:**
   - `Dockerfile` em dois estágios (seção 3.5);
   - `Caddyfile` interno, servindo `/srv` em `:80`;
   - `docker-compose.prod.yml`;
   - `proxy/gsw.caddy`;
   - `servidor/configurar-deploy.sh` e `servidor/implantar.sh`.
6. **Compose `gsw-prod`:** serviço `web` na rede `borda`, com:
   - `mem_limit` e `memswap_limit` de 64 MB, `cpus: 0.5`, `pids_limit: 256`;
   - `read_only`, `no-new-privileges`, `cap_drop: [ALL]`;
   - `tmpfs` de 8 MB para o Caddy;
   - healthcheck com `wget` em `/`;
   - logs de 10 MB × 3.
7. **Caddy interno (`infra/Caddyfile`):**
   - `file_server` com `precompressed zstd br gzip`, para servir o arquivo já comprimido;
   - `try_files {path} {path}.html {path}/index.html`, e a página `404.html` do Next para o que não existe;
   - cache: `/_next/static/*`, `/_v/*` e mídia com `max-age=31536000, immutable`; HTML com `no-cache`
     (revalida pelo ETag, então um deploy aparece na hora);
   - os redirects 308 gerados no build.
8. **Arquivo do site no proxy (`infra/proxy/gsw.caddy`):**
   - destino `reverse_proxy gsw-prod-web-1:80`, pelo nome do contêiner;
   - `header -Via`, HSTS e corpo de requisição limitado (o site não recebe envios);
   - cabeçalhos de segurança: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
     `X-Frame-Options DENY`, `Cross-Origin-Opener-Policy`, os mesmos do `next.config.ts` de hoje;
   - log de acesso filtrado, sem cabeçalhos, no modelo do Gastos;
   - redirect de `www.` se o domínio for próprio.
9. **Docs no mesmo PR:**
   - `INFRAESTRUTURA.md`, `CI-CD.md` e `AGENTS.md`, saindo a Vercel;
   - `PENDENCIAS.md` atualizado.

### 5.3 Na VPS (com a sua aprovação, uma etapa por vez)

1. **Medir antes:** `vps-espaco`, já medido: 49 GB em uso, 145 GB livres.
2. **Clonar** raso em `/srv/gsw`.
3. **Criar o usuário de deploy** (`bash infra/servidor/configurar-deploy.sh "<chave pública da CI>"`):
   - cria o usuário `deploy-gsw`;
   - a chave dele só roda `deploy`;
   - sudo restrito ao script.
4. **Primeiro deploy, à mão:** `sudo /usr/local/sbin/gsw-deploy`. Ele:
   - confere o disco (mínimo de 10 GB livres);
   - faz `docker compose build` e `up -d --wait`;
   - instala `gsw.caddy` só depois de `caddy validate`, e então recarrega o proxy, como o `deploy.sh` do
     Muda.
5. **Medir depois:** `vps-espaco` e `docker stats`.
6. **Registrar no repositório `vps-chiconeto`:**
   - a tabela de memória das regras (7,8 GB → 7,86 GB);
   - o `docs/SITES-E-SERVICOS.md`;
   - o site na conferência do `vps-saude`.
7. **Backup:** não precisa. O site não tem dados, e tudo está no Git.

### 5.4 Deploy daqui para frente

Mesmo fluxo da CI de hoje, com a mesma regra de branches (`AGENTS.md`):
1. PR para `develop`, com a CI verde.
2. Promoção para `main`.
3. Com `DEPLOY_HABILITADO = true`, o workflow **Deploy** chama `ssh deploy-gsw@vps "deploy"`, e o
   servidor roda o `implantar.sh` que está em `origin/main`.
4. `deploy --dry-run` mostra os commits que entrariam, sem mudar nada.

O deploy tem uma trava (`flock`), então dois deploys não rodam juntos. Antes de construir, a imagem atual
vira `gsw-web:anterior`.

### 5.5 Rollback

- **Rápido:** `ssh vps 'sudo /usr/local/sbin/gsw-deploy --voltar'`. Ele marca `gsw-web:anterior` como a
  imagem atual e faz `up -d --wait`, sem build, em segundos.
- **Pelo código:** reverter o commit na `main`; o deploy seguinte publica a versão anterior.
- **Falha no build:** o contêiner atual não é trocado. Com `caddy validate` falhando, o proxy continua com
  o arquivo anterior.

### 5.6 DNS e ordem da virada

Hoje nenhum domínio aponta para o site, então **não há virada com risco de queda**: a versão da Vercel
continua no ar em `gsw-website.vercel.app` durante todo o processo.

1. **Na Porkbun:** criar o registro, com TTL de 600 s:
   - **subdomínio:** `A gsw → 13.140.208.115`;
   - **domínio próprio:** `A @ → 13.140.208.115` e `CNAME www → <domínio>`.

   Sem registro AAAA, como os outros sites da VPS. Ligar IPv6 é uma decisão para todos os sites.
2. **Esperar a propagação:** `nslookup <domínio>` precisa devolver 13.140.208.115.
3. **Rodar o primeiro deploy (5.3, passo 4).** O Caddy emite o certificado na primeira visita, desde que
   o DNS já aponte para a VPS. Por isso o DNS vem antes.
4. **Validar:**
   - as 18 páginas, a busca e as galerias;
   - os redirects (`/raids`, `/guias/guild-house`);
   - o certificado;
   - os cabeçalhos (`curl -I`);
   - 390 px e 1440 px.
5. **Ligar `DEPLOY_HABILITADO = true`** e testar um deploy pela CI com dry-run e depois de verdade.

### 5.7 O que sai da Vercel, e quando

**Só depois** da validação (5.6, passo 4) e de pelo menos um deploy pela CI dar certo:
1. Remover os secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` do GitHub.
2. Excluir o projeto na Vercel. O endereço `gsw-website.vercel.app` deixa de existir.
3. Revogar o token da Vercel usado pela CI.
4. Apagar as referências à Vercel que ainda restarem nas docs.

Se algum link público ainda apontar para `gsw-website.vercel.app`, é melhor trocá-lo antes do passo 2.
