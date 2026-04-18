import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      checks: ["none"], // tells Auth.js not to use PKCE or state checks for GitHub
    }),
  ],
}); 