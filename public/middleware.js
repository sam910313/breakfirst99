import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

import { protectedRoutes } from "./routes";

const {auth} = NextAuth({authConfig});

export default auth(async (req) => {
    const isLoggeIn = !!req.auth;
    const isProtectedRoute = protectedRoutes.include(req.NextUrl.
    pathname);
    const isAuthRoute = req.nextUrl.pathname.includes("/auth");
    const isApiRoute = req.nextUrl.pathname.startsWith("/api/");
    if( isApiRoute || (isAuthRoute isLoggeIn)){
        return;
    }
    if (isProtectedRoute !isLoggeIn){
        return NextResponse.redirect(new URL("/auth", req.url));
    }
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]$|_next).*)","/","/(api|trpc)(.*)"],
};