'use client'

import type { User } from '@/lib/models/User'
import { type ReactNode, createContext } from 'react'
import {
  type HandleLoginRequestProps,
  type HandleLoginResponse,
  handleLogin,
} from './utils/handleLogin'

interface AuthContextProps {
  user: User | null
  handleLogin: ({
    email,
    password,
  }: HandleLoginRequestProps) => Promise<HandleLoginResponse>
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

interface AuthClientProviderProps {
  children: ReactNode
  user: User | null
  handleLogin: ({
    email,
    password,
  }: HandleLoginRequestProps) => Promise<HandleLoginResponse>
}

export const AuthClientProvider = ({
  children,
  user,
}: AuthClientProviderProps) => {
  return (
    <AuthContext
      value={{
        user: user,
        handleLogin: handleLogin,
      }}
    >
      {children}
    </AuthContext>
  )
}
