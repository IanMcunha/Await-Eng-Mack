'use client'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSidebar } from '@/components/ui/sidebar'
import { ChevronsUpDown, Plus } from 'lucide-react'
import { TeamContainer } from './TeamContainer'

export function HeaderSidebar() {
  const { open, isMobile } = useSidebar()
  const side = isMobile ? 'bottom' : 'right'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center justify-between rounded transition-all duration-300 ease-in-out focus:outline-none ${open ? 'px-2' : 'px-0'} mt-2`}
      >
        <TeamContainer open={open} />
        <ChevronsUpDown
          className={`h-4 w-4 transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={
          open && isMobile
            ? 'max-h-[--radix-dropdown-menu-content-available-height] w-[--radix-dropdown-menu-trigger-width]'
            : 'w-56'
        }
        align="start"
        side={side}
      >
        <DropdownMenuLabel>Times</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <TeamContainer />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TeamContainer />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TeamContainer />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="opacity-50">
          <Plus />
          <span>Adicionar Time</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
