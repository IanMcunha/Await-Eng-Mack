'use client'
import React from 'react'
import { useSidebar } from '@/components/ui/sidebar'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  CreditCard,
  Settings,
  SquareChevronLeft,
  SquareChevronRight,
} from 'lucide-react'

export function FooterSidebar() {
  const items = [
    {
      groupName: 'Sua Conta',
      items: [
        {
          title: 'Configurações',
          url: '#',
          icon: Settings,
        },
      ],
    },
  ]

  const { open, toggleSidebar } = useSidebar()

  return (
    <>
      {items.map(group => (
        <SidebarGroup key={group.groupName}>
          <SidebarGroupLabel>{group.groupName}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}

      <SidebarMenu className="px-2 pb-2">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <div
              onKeyDown={() => {}}
              onClick={() => {
                toggleSidebar()
              }}
              className="cursor-pointer"
            >
              {open && (
                <>
                  <SquareChevronLeft />
                  <span>Fechar Barra Lateral</span>
                </>
              )}
              {!open && <SquareChevronRight />}
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* <DropdownMenu>
        <DropdownMenuTrigger
          className={`flex justify-between items-center rounded transition-all duration-300 ease-in-out focus:outline-none ${open ? "px-2" : "px-0"} mb-2`}
        >
          <div className="flex items-center rounded transition-all duration-300 ease-in-out focus:outline-none">
            <Avatar
              className={`rounded-lg bg-slate-200 transition-all duration-300 ease-in-out ${open ? "w-10 h-10" : "w-8 h-8"
                }`}
            >
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div
              className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-w-xs opacity-100" : "max-w-0 opacity-0"}`}
            >
              <div className="text-left">
                <p className="text-sm font-semibold truncate">Pedro Pessuto</p>
                <p className="text-xs truncate">
                  pedropessuto@email.com
                </p>
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={open ? "w-[--radix-dropdown-menu-trigger-width] max-h-[--radix-dropdown-menu-content-available-height]" : "w-56"} align={isMobile ? "start" : "end"} side={isMobile ? "bottom" : "right"} >
          <DropdownMenuLabel>Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  )
}
