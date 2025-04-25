'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

interface GetHandleLoginResponse {
  sessionId: string
  error?: string
}

export interface HandleLoginResponse {
  success: boolean
  error?: string
}

export interface HandleLoginRequestProps {
  email: string
  password: string
}

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'E-mail inválido' })
    .max(50, { message: 'E-mail deve ter no máximo de 50 caracteres' }),
  password: z
    .string()
    .min(1, { message: 'Senha é obrigatória' })
    .max(50, { message: 'Senha deve ter no máximo de 50 caracteres' }),
})

export async function handleLogin({
  email,
  password,
}: HandleLoginRequestProps): Promise<HandleLoginResponse> {
  'use server'

  const parsedResult = loginSchema.safeParse({ email, password })

  if (!parsedResult.success) {
    return { success: false, error: parsedResult.error.errors[0].message }
  }

  const cookieStore = await cookies()
  const id = cookieStore.get('sessionId')

  if (id) {
    return {
      success: false,
      error: 'Já existe uma conta autenticado no momento',
    }
  }

  const handleLoginUrl: string = 'http://localhost:3000/api/auth/login'

  const response = await fetch(handleLoginUrl, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok || response.status !== 200) {
    return { success: false, error: 'Falha ao fazer login' }
  }

  const { sessionId, error } = (await response.json()) as GetHandleLoginResponse

  if (!sessionId || error) {
    return { success: false }
  }

  cookieStore.set('sessionId', sessionId, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    // maxAge: 0
  })

  return { success: true }
}
