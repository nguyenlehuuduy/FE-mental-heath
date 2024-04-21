import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  console.log(accessToken);

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: [
    "/home",
    "/blog",
    "/chatbox",
    "/friend",
    "/professional",
    "/virtual-space",
  ],
};
