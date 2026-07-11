import { Fragment, useEffect, useState } from "react"
import { Link, useLocation } from "react-router"
import { ThemeToggle } from "@khinemyaezin/seller-ui"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@khinemyaezin/seller-ui/components/breadcrumb"
import { SidebarTrigger } from "@khinemyaezin/seller-ui/components/index"
import { eventBus } from "@khinemyaezin/seller-api"
import { matchShellBreadcrumbs } from "@khinemyaezin/seller-contracts"

function RouteBreadcrumb() {
  const { pathname } = useLocation()
  const [leaf, setLeaf] = useState<string | null>(null)

  useEffect(() => {
    return eventBus.subscribe("shell:breadcrumb:v1", ({ leaf: nextLeaf }) => {
      setLeaf(nextLeaf)
    })
  }, [])

  useEffect(() => {
    setLeaf(null)
  }, [pathname])

  const crumbs = matchShellBreadcrumbs(pathname).map((crumb, index, all) => {
    const isLast = index === all.length - 1
    if (isLast && leaf) {
      return { ...crumb, label: leaf, to: undefined }
    }
    return crumb
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <Fragment key={`${crumb.label}-${index}`}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast || !crumb.to ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.to}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function AdminSiteHeader() {
  return (
    <header className="bg-background/90 sticky top-0 z-10 flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <RouteBreadcrumb />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header >
  )
}
