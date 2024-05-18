import { type NextRequest, NextResponse } from "next/server";
import { COOKIE_ACCESS_TOKEN_KEY } from "./lib/constants";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(COOKIE_ACCESS_TOKEN_KEY)?.value;
  if (!accessToken) {
    return NextResponse.redirect(new URL("/landingpage", request.url));
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
