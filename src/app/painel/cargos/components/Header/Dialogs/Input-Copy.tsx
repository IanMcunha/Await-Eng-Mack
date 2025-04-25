'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DialogClose } from '@radix-ui/react-dialog'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

export function InputCopyToClipboard({ urlToShare }: { urlToShare: string }) {
  function copyToClipboard() {
    navigator.clipboard.writeText(urlToShare)
    toast.success('Texto Copiado Para Área de Transferência!')
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">
        <Label className="sr-only">Link</Label>
        <Input defaultValue={urlToShare} readOnly />
      </div>
      <DialogClose asChild>
        <Button
          type="submit"
          size="sm"
          className="px-3"
          onClick={copyToClipboard}
        >
          <span className="sr-only">Copiar</span>
          <Copy />
        </Button>
      </DialogClose>
    </div>
  )
}
