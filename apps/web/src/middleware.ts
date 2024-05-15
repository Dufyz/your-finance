import { NextRequest, NextResponse } from 'next/server'
import supabase from './config/supabase'

export async function middleware(request: NextRequest) {
  //TODO - Check refresh token and refresh session; Need also to change token in cookies

  try {
    const sessionToken = request.cookies.get('sessionToken')?.value || ""
    const refreshToken = request.cookies.get('refreshToken')?.value || ""

    const { data, error } = await supabase.auth.setSession({
      access_token: sessionToken,
      refresh_token: refreshToken
    })

    if (error) {
      console.log('Error in middleware:', error);
      throw error;
    }

    const { error: refreshTokenError } = await supabase.auth.refreshSession();

    if (refreshTokenError) {
      console.log('Error in refreshToken middleware:', refreshTokenError);
      throw refreshTokenError;
    }

    if (request.nextUrl.pathname === "/login" && data.user !== null) {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard'

      return NextResponse.redirect(url)
    }

  } catch (error) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'

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