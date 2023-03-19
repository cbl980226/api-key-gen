import type { Session, User as AuthUser } from 'next-auth'
import type { User as DbUser } from '@prisma/client'
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    id: AuthUser['id']
  }
}

declare module 'next-auth' {
  interface DefaultUser extends DbUser {}

  interface Session {
    user: AuthUser
  }
}
