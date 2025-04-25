'use server'

import { Button } from '@/components/ui/button'
import { ShareDialog } from './Dialogs/ShareDialog'

interface ButtonsProps {
  section: string
}

export async function Buttons({ section }: ButtonsProps) {
  return (
    <>
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end">
        {(section === 'visao-geral' || section === 'membros') && (
          <>
            <ShareDialog />
            <Button>
              <span>Convidar Novo Membro</span>
            </Button>
          </>
        )}
        {section === 'cargos' && (
          <Button>
            <span>Adicionar Novo Cargo</span>
          </Button>
        )}
      </div>
    </>
  )
}
