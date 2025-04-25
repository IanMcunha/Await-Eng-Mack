'use server'

import { notFound } from 'next/navigation'
import { Header } from '../components/Header/Header'
import { Overview } from '../components/screens/Overview'

interface PageProps {
  params: Promise<{ section?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {

  const { section } = await params
  const tab = section?.[0] ? section[0] : 'visao-geral'

  const validSections = ['visao-geral', 'categorias']
  const isValidSection = validSections.includes(tab)

  // if (!validSections.includes(tab)) {
  //   notFound()
  // }

  // check if sections is a UUID
  // ai redirecionar para a tela de cargo 

  return (
    <div className="h-full space-y-6 bg-bg-theme p-4 md:p-8">
      {
        isValidSection && (
          <>
            <Header section={tab} />

            <section>
              {tab === 'visao-geral' && <Overview />}
              {tab === 'categorias' && 'categorias'}
            </section>
          </>
        )
      }
      {
        !isValidSection && (
          <>
            Tela de cargo personalizada
          </>
        )
      }

    </div>
  )
}
