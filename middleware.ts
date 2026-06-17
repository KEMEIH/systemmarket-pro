import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  const publicRoutes = [
    '/', '/about', '/blog', '/pricing', '/faq', '/contact',
    '/portfolio', '/testimonials', '/login', '/register'
  ]
  
  const isPublicRoute = publicRoutes.some(route => path === route || path.startsWith(route + '/'))
  
  if (isPublicRoute) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)'],
}
