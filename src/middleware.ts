import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchUserData } from "./app/utils/checkUserRole";

// Middleware funkcija za zaštitu ruta
export async function middleware(request: NextRequest) {
  // Dobavi token iz kolačića
  const token = request.cookies.get("token");
  const user = await fetchUserData();

  // Lista zaštićenih ruta
  const protectedRoutes = ["/admin"];

  // Ako korisnik pokušava da pristupi zaštićenoj ruti bez tokena, preusmeri ga na login stranicu
  if (
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    ) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Ako korisnik pokusava da pristupi ruti koja je namijenjena samo za administratore, preusmjeri ga na home page
  if (request.nextUrl.pathname.startsWith("/admin") && user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Ako je korisnik autentifikovan ili pristupa nezaštićenoj ruti, dozvoli nastavak zahteva
  return NextResponse.next();
}

// Konfiguracija middleware-a za određene rute
export const config = {
  //   matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
  matcher: ["/admin/:path*"],
};
