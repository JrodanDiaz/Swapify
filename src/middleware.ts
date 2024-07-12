import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const userID = cookies().get("userID");
  const userSession = cookies().get("userSession");

  if (userID && userSession) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/account")) {
    if (!userID) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }
}
