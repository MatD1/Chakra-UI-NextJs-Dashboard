import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_DOMAIN,
    }),
  ],
  debug: true,
  secret: process.env.SECRET,
  session: {
      strategy: "jwt",
      maxAge: 1000,
  },
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, account }) {
      token.userRole = "admin"
      if (account) {
          token.accessToken = account.access_token
          token.sub = account.providerAccountId
      }
      return token
    },

    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken
        session.id = token.sub
        session.user
        return session
      },
  },
})