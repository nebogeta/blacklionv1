import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function (req) {
    const pathname = req.nextUrl.pathname ; //relative path
    console.log("pathname", pathname);
    //Manage protected routes
    const token = await getToken({ req });
    const isAuth = !!token;

    const isAuthPage = pathname.startsWith("/login");


    const sensitiveRoutes = ["/dashboard", "/create", "/update", "/group-search"];

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return null;
    }


    if (
      !isAuth &&
      sensitiveRoutes.some((route) => pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  }

);

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/api/:path*",
    "/expense/:path*",
    "/update/:path*",
    "/group-search/:path*",
      "/login/:path*",
  ],

};
