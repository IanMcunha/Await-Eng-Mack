import { cookies } from 'next/headers'
import { Role } from '@/lib/models/Role'
import { RolesDataTable } from './RolesDataTable/RolesDataTable'

interface GetMemberFetchProps {
  data: Role[],
  error?: string
}

export async function Overview() {

  let members: Role[] = []
  let error: string | undefined = undefined

  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  
  const cookieStore = await cookies()
  const cookieHeader = cookieStore.toString()

  const response = await fetch(`${baseUrl}/api/private/roles/get`, {
    method: "GET",
    headers: { cookie: cookieHeader },
  })

  if (!response.ok) {
    try {
      const json = await response.json()
      error = json.error || 'Erro ao carregar sua solicitação'
    } catch {
      error = 'Erro ao carregar sua solicitação'
    }
  }
  else {
    try {
      const json = await response.json() as GetMemberFetchProps
      members = json.data ?? []
      if (json.error) error = json.error
    } catch {
      error = 'Erro ao ler os dados'
    }
  }

  return <RolesDataTable data={members} error={error} />
}
