'use server'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'
import { InputCopyToClipboard } from './Input-Copy'

export async function ShareDialog() {
  // const response = fetch('https://api.example.com/data')
  const urlToShare = 'http://localhost:3000/invite/9382n8dj29nmfi39'

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="overflow-hidden">
          <SquareArrowOutUpRight />
          <span>Convidar Via Link</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Convidar Via Link</DialogTitle>
          <DialogDescription>
            Basta a pessoa estar logada no site e acessar este link para entrar
            no time instantaneamente.
          </DialogDescription>
        </DialogHeader>
        <InputCopyToClipboard urlToShare={urlToShare} />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
