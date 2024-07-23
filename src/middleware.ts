import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware funkcija za zaštitu ruta
export function middleware(request: NextRequest) {
  // Dobavi token iz kolačića
  const token = request.cookies.get("token");

  // Lista zaštićenih ruta
  const protectedRoutes = ["/dashboard", "/profile", "/settings", "/admin"];

  // Ako korisnik pokušava da pristupi zaštićenoj ruti bez tokena, preusmeri ga na login stranicu
  if (
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    ) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Ako je korisnik autentifikovan ili pristupa nezaštićenoj ruti, dozvoli nastavak zahteva
  return NextResponse.next();
}

// Konfiguracija middleware-a za određene rute
export const config = {
  //   matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
  matcher: ["/admin/:path*"],
};
