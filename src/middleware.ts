import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/account')) {
    const userCookie = cookies().get("sessionID")

    console.log("hellllloooooooo")

    if (!userCookie) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
  }
}


export const config = {matcher: "/account"}