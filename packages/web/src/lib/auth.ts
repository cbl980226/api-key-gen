import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: getCredentials('GOOGLE').clientId,
      clientSecret: getCredentials('GOOGLE').clientSecret,
      httpOptions: {
        timeout: 40000
      }
    }),
    GithubProvider({
      clientId: getCredentials('GITHUB').clientId,
      clientSecret: getCredentials('GITHUB').clientSecret
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email
        }
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image
      }
    },
    redirect() {
      return '/dashboard'
    }
  }
}

type ProviderPrefix = 'GOOGLE' | 'GITHUB'

function getCredentials(PREFIX: ProviderPrefix): {
  clientId: string
  clientSecret: string
} {
  const clientIdKey = `${PREFIX}_CLIENT_ID`
  const clientSecretKey = `${PREFIX}_CLIENT_SECRET`
  const clientId = process.env[clientIdKey]
  const clientSecret = process.env[clientSecretKey]

  if (!clientId || clientId.length === 0) {
    throw new Error(`Missing ${clientIdKey}`)
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error(`Missing ${clientSecretKey}`)
  }
  return { clientId, clientSecret }
}
