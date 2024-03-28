import { NextRequest, NextResponse } from 'next/server'
import { getUserSupabaseSession } from './utils/get-user-supabase-session'

export async function middleware(request: NextRequest) {
  const {data, error} = await getUserSupabaseSession(request)

  if(error) console.log('Error in middleware:', error)

  if(error?.status === 401 || error?.status === 0) {
    if(request.nextUrl.pathname !== '/login') {
      const url = request.nextUrl.clone()
      url.pathname = '/login'

      return NextResponse.redirect(url)
    }
  }

  if(request.nextUrl.pathname === "/login" && data.user !== null) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}