  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'
  import type { User } from './lib/models/User'

  interface userRequestProps {
    data: User
  }

  const PROTECTED_ROUTES: string[] = ['/painel']

  export async function middleware(req: NextRequest) {

    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('url', req.nextUrl.href)

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })

    const sessionId = req.cookies.get('sessionId')?.value
    const urlPathname = req.nextUrl.pathname
    const baseUrl = process.env.BASE_URL || "http://localhost:3000"

    if (
      urlPathname.includes('private') 
      // || urlPathname.includes(PROTECTED_ROUTES.toString())
    ) {

      if (!sessionId) {
        return NextResponse.json({ error: "Nao autorizado" }, {status: 401})
        return NextResponse.redirect(new URL('/', baseUrl))
      }

      const userResponse = await fetch(
        `http://localhost:3000/api/auth/getUser/?sessionId=${sessionId}`
      )

      if (!userResponse.ok || userResponse.status !== 200) {
        return NextResponse.json({ error: "Nao autorizado" }, {status: 401})
        return NextResponse.redirect(new URL('/', baseUrl))
      }

      const { data: user } = (await userResponse.json()) as userRequestProps

      if (!user) {
        return NextResponse.json({ error: "Nao autorizado" }, {status: 401})
        return NextResponse.redirect(baseUrl)
      }

    }

    return response
  }

  export const config = {
    matcher: [
      // Aplica o middleware para todas as rotas que NÃO sejam:
      // - Arquivos estáticos do Next.js (_next/static)
      // - Imagens otimizadas do Next.js (_next/image)
      // - Favicon
      // - Arquivos de imagem (svg, png, jpg, jpeg, gif, webp)
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      // Garante o middleware para rotas privadas da API
      '/api/private/:path*',
    ],
  }
