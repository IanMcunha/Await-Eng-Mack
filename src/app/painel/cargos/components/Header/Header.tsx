'use server'
import { H1 } from '@/components/typography/H1'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Home, Settings } from 'lucide-react'
import { Buttons } from './Buttons'
import { Navbar } from './Navbar'

interface HeaderProps {
  section: string
}

export async function Header({ section }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 overflow-x-hidden">
      <div className="flex w-full flex-col space-y-4 rounded-sm border-1 bg-white p-4">
        <div className="flex justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="text-primary">
                <BreadcrumbLink
                  href="/painel"
                  className="flex items-center gap-2 hover:text-primary "
                >
                  <Home className="w-4 brightness-[80%]" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/painel" className="flex gap-2 items-center" >
                  <LayoutGrid className="w-4 hover:text-foreground transition-colors" />
                  Painel
                </BreadcrumbLink>
              </BreadcrumbItem> */}
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">
                  Cargos
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* <div className="flex gap-2 text-gray-500 items-center text-sm">
						<Settings className="size-5" />
					</div> */}
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 bg-white md:flex-row md:gap-0">
          <div className="w-full space-y-2">
            <H1>Cargos</H1>
            <h2 className="line-clamp-3 text-base text-muted-foreground md:line-clamp-2">
              CRUD de cargos
            </h2>
          </div>

          <Buttons section={section} />
        </div>
      </div>

      <Navbar section={section} />
    </header>
  )
}
