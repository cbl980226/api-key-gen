import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/lib/auth'
import { User } from '@prisma/client'

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()

  return session?.user as User
}
