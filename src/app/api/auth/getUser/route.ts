'use server'
import type { User } from '@/lib/models/User'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<NextResponse> {
  if (!req) {
    return NextResponse.json({ status: 400 })
  }

  const searchParams = req.nextUrl.searchParams
  const sessionId = req.nextUrl.searchParams.get('sessionId')

  if (!searchParams || !sessionId) {
    return NextResponse.json({ status: 401 })
  }

  const data: User = {
    id: 'cd72692f-f50b-40b9-85ed-b530264040fe',
  }

  return NextResponse.json({ data })
}
