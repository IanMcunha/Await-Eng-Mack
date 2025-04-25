import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { ContentSidebar } from './components/ContentSidebar'
import { FooterSidebar } from './components/FooterSidebar'
import { HeaderSidebar } from './components/HeaderSidebar'

export function DashboardSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <HeaderSidebar />
      </SidebarHeader>
      <SidebarContent>
        <ContentSidebar />
      </SidebarContent>
      <SidebarFooter className="p-0">
        <FooterSidebar />
      </SidebarFooter>
    </Sidebar>
  )
}
