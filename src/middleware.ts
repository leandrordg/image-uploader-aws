import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const {
    auth,
    nextUrl: { pathname },
  } = req;

  if (!auth && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/get-started", req.nextUrl));
  }

  if (auth && pathname.startsWith("/get-started")) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
