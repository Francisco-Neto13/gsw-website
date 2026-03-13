# GsW Website

<div align="center">
  <img src="./public/icon.webp" width="120" alt="GsW Logo" style="border-radius: 50%">
  <p>Hub digital oficial da comunidade GsW.</p>
  <a href="https://gsw-website.vercel.app/"><strong>Acessar Plataforma</strong></a>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

---

## Descrição

O projeto é um site institucional da comunidade GsW com:

- landing page pública
- painel administrativo em `/admin`
- gerenciamento de membros
- gerenciamento de galeria
- autenticação via Supabase Auth
- dados e imagens armazenados no Supabase

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase Auth, Database e Storage

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente local:

```bash
npm run dev
```

Validações úteis:

```bash
npm run lint
npm run build
```

## Variáveis de ambiente

Crie um arquivo `.env.local` com:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_publica_anon

# Recomendado: UUID do único usuário admin
ADMIN_USER_IDS=uuid-do-usuario-admin

# Opcional: alternativa por e-mail
# ADMIN_EMAILS=admin@seudominio.com
```

Observações:

- `ADMIN_USER_IDS` é a opção recomendada.
- `ADMIN_EMAILS` pode ser usado como fallback ou apoio.
- `ADMIN_PASSWORD` não é utilizado pelo código atual.

## Painel administrativo

O acesso ao painel em `/admin` depende de 2 condições:

1. o usuário precisa estar autenticado no Supabase
2. o usuário precisa estar autorizado no servidor via `ADMIN_USER_IDS` ou `ADMIN_EMAILS`

Na configuração atual do projeto, o cenário recomendado é ter apenas 1 usuário admin criado manualmente no painel do Supabase.

## Estrutura de dados usada pelo código

### Tabela `membros`

Campos usados pela aplicação:

- `id`
- `name`
- `role`
- `img`
- `tags`
- `ordem`

### Tabela `galeria`

Campos usados pela aplicação:

- `id`
- `title`
- `description`
- `src`
- `thumb_src`
- `ordem`

### Buckets do Storage

- `members`
- `gallery`

## Segurança recomendada no Supabase

O site público precisa ler dados de membros e galeria sem login, então a configuração esperada é:

- leitura pública nas tabelas `membros` e `galeria`
- escrita apenas para o UUID admin
- leitura pública dos buckets `members` e `gallery`
- upload, update e delete apenas para o UUID admin

Além disso:

- desative signups públicos no Supabase Auth se o projeto deve ter apenas 1 conta
- não use `service_role` no frontend
- mantenha `ADMIN_USER_IDS` sincronizado com o UUID real do admin

## Rotas principais

- `/` página pública
- `/admin/login` login administrativo
- `/admin` dashboard
- `/admin/members` gestão de membros
- `/admin/gallery` gestão de galeria
- `/admin/settings` alteração de e-mail e senha do admin

## Deploy

O deploy pode ser feito na Vercel. Garanta que as variáveis de ambiente de produção estejam configuradas:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ADMIN_USER_IDS` e/ou `ADMIN_EMAILS`

## Observação final

Se o projeto parar de aceitar seu login admin depois de mudar o usuário no Supabase, o primeiro ponto a conferir é o valor de `ADMIN_USER_IDS` na `.env.local` e no ambiente de produção.
