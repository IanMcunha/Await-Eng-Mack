'use server'

import type { User } from '@/lib/models/User'
import { type ReactNode, Suspense } from 'react'
import { AuthClientProvider } from './AuthClientProvider'
import { getUser } from './utils/getUser'
import { handleLogin } from './utils/handleLogin'

interface AuthProviderProps {
  children: ReactNode
}

export async function AuthProvider({ children }: AuthProviderProps) {
  const user: User | null = await getUser()

  return (
    <Suspense>
      <AuthClientProvider user={user} handleLogin={handleLogin}>
        {children}
      </AuthClientProvider>
    </Suspense>
  )
}
