import React from 'react'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  Home,
  Users,
} from 'lucide-react'

const items = [
  {
    groupName: 'Geral',
    items: [
      {
        title: 'Home',
        url: '#',
        icon: Home,
      },
    ],
  },
]

export function ContentSidebar() {
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

      <SidebarGroup>
        <SidebarGroupLabel>Time</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/painel/cargos">
                  <Users />
                  <span>Cargos</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}
