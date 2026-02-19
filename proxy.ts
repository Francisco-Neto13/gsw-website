import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Proxy Middleware para proteção de rotas administrativas.
 * O Next.js espera um export padrão ou uma função chamada 'middleware'/'proxy'.
 */
export default async function proxy(request: NextRequest) {
  // 1. Inicializa a resposta padrão
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // 2. Configura o cliente do Supabase para Server-Side (SSR)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // Atualiza os cookies na requisição para que o Supabase leia os dados novos
          request.cookies.set({ name, value, ...options })
          // Atualiza a resposta para persistir o cookie no navegador do usuário
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // 3. Validação de Segurança Crítica
  // getUser() é mais seguro que getSession() pois valida o token no banco de dados.
  const { data: { user } } = await supabase.auth.getUser()

  // 4. Lógica de Redirecionamento e Proteção
  const { pathname } = request.nextUrl
  const isLoginPage = pathname === '/admin/login'
  const isAdminRoute = pathname.startsWith('/admin')

  // Se for uma rota /admin e não for o login...
  if (isAdminRoute && !isLoginPage) {
    // ...e o usuário não estiver autenticado, manda para o login.
    if (!user) {
      const redirectUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(redirectUrl)
    }
  }

  // Se o usuário já estiver logado e tentar acessar a tela de login...
  if (isLoginPage && user) {
    // ...manda ele direto para o dashboard/painel.
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return response
}

// 5. Filtro de Rotas: define onde este middleware deve rodar
export const config = {
  matcher: ['/admin/:path*'],
}