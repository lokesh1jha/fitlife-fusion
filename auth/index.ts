import NextAuth, { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"
import { authOptions } from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/db"

export type UserInfo = {
	id: string
	name: string
	email?: string
	isOnboarded: boolean

}
declare module "next-auth" {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: UserInfo & DefaultSession["user"]
	}
}
declare module "next-auth/jwt" {
	interface JWT {
		user: UserInfo & DefaultJWT["user"]
		id: string
	}
}

export { authOptions };

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authOptions,
	adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
})
