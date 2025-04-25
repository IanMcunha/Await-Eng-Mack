import { loginSchema } from '@/lib/schemas/loginSchema'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (!req) {
    return NextResponse.json({ status: 400 })
  }

  const { email, password } = await req.json()

  const parsedResult = loginSchema.safeParse({ email, password })

  if (!parsedResult.success) {
    return NextResponse.json(
      { error: parsedResult.error.errors[0].message },
      { status: 400 }
    )
  }

  const sessionId = '123'
  const response = NextResponse.json({ sessionId: sessionId }, { status: 200 })

  return response
}
