import { DashboardSidebar } from '@/app/painel/(components)/DashboardSidebar/DashboardSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { cookies } from 'next/headers'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar />
      <main className="relative w-full overflow-x-hidden">{children}</main>
    </SidebarProvider>
  )
}
