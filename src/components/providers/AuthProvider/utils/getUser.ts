'use server'

import type { User } from '@/lib/models/User'
import { cookies } from 'next/headers'

interface GetUserResponse {
  data: User
  error?: string
}

export async function getUser(): Promise<User | null> {
  'use server'

  const cookieStore = await cookies()
  const sessionId = cookieStore.get('sessionId')

  if (!sessionId) {
    return null
  }

  const getUserUrl: string = `http://localhost:3000/api/auth/getUser/?sessionId=${sessionId.value}`

  const response = await fetch(getUserUrl, {
    method: 'GET',
  })

  if (!response.ok || response.status !== 200) {
    return null
  }

  const { data: user } = (await response.json()) as GetUserResponse
  return user ? user : null
}
