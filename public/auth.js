import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {PrisamaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { adapter } from "next/dist/server/web/adapter";

export const { handle, auth, signIn, signOut } = NextAuth({
    adapter: PrisamaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    ...authConfig,
});