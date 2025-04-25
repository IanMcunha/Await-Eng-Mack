import { randomUUID } from 'node:crypto'

export async function GET() {

  // CORS

  const data = [
    {
      id: randomUUID(),
      name: 'Administrador',
      categories: [
        {
          id: randomUUID(),
          name: "Administração",
        }
      ],
    },
    {
      id: randomUUID(),
      name: 'Caixa',
      categories: [
        {
          id: randomUUID(),
          name: "Finananceiro",
        }
      ],
    },
  ]

  return Response.json({ data })
}
