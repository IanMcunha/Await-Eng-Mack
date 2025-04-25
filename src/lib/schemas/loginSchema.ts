import { z } from 'zod'

export const loginSchema = z.object({

  email: z
    .string()
    .email({ message: 'E-mail inválido' })
    .max(50, { message: 'E-mail deve ter no máximo de 50 caracteres' }),
  password: z
    .string()
    .min(1, { message: 'Senha é obrigatória' })
    .max(50, { message: 'Senha deve ter no máximo de 50 caracteres' }),
})
