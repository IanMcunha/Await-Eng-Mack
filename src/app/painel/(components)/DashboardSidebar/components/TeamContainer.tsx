import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Crown } from 'lucide-react'
import React from 'react'

export function TeamContainer({ open = true }: { open?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        className={`rounded-lg bg-slate-200 transition-[width,height] duration-300 ease-in-out ${open ? 'h-10 w-10' : 'h-8 w-8'}
        `}
      >
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}
      >
        <span className="truncate font-semibold">Time Legal</span>
        <div className="mt-1 flex items-center">
          <span className="truncate text-xs">Premium</span>
          <Crown className="ml-2 h-4 w-4 shrink-0 text-yellow-500" />
        </div>
      </div>
    </div>
  )
}
