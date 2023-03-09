// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  console.log(request.nextUrl.pathname.startsWith("/login") !== true);

  if (!request.nextUrl.pathname.startsWith("/login")) {
    if (!session) return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
