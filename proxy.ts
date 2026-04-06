import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const auth = request.cookies.get('crow-auth')?.value
  if (auth !== 'authenticated') {
    const from = request.nextUrl.pathname
    return NextResponse.redirect(new URL(`/enter?from=${encodeURIComponent(from)}`, request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/work/:path*'],
}
