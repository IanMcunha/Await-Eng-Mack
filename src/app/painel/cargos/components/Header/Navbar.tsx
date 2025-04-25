'use server'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from "@/lib/utils"
import { ChevronRight, ChevronRightCircle } from 'lucide-react'

interface NavbarProps {
  section: string
}

export async function Navbar({ section }: NavbarProps) {
  function navigationMenuTriggerStyle() {
    return 'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1'
  }

  return (
    <div className="flex justify-between items-center rounded-sm border-1 bg-white p-2">
      <div className="flex items-start overflow-x-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div
                className={`py-1.5 ${(section === 'visao-geral' || section === 'membros') && 'border-primary border-b-2'}`}
              >
                <NavigationMenuLink
                  href="/painel/cargos/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    `${(section === 'visao-geral' || section === 'membros') && 'bg-primary/10 hover:bg-primary/10 focus:bg-primary/10'}`
                  )}
                >
                  Visão Geral
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
            <div className="m-2 inline-block w-0.5 self-stretch bg-neutral-200" />
            <NavigationMenuItem>
              <div
                className={`py-1.5 ${section === 'atividades' && 'border-primary border-b-2'}`}
              >
                <NavigationMenuLink
                  href="/painel/cargos/categorias"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    `${section === 'atividades' && 'bg-primary/10 hover:bg-primary/10 focus:bg-primary/10'}`
                  )}
                >
                  Categorias
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <span className="block sm:hidden">
        <ChevronRight />
      </span>
    </div>
  )
}
