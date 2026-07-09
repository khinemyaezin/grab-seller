import { ThemeToggle } from "@khinemyaezin/seller-ui"
import { Separator, SidebarTrigger } from "@khinemyaezin/seller-ui/components/index"

export function AdminSiteHeader() {
  return (
    <header className="flex items-center justify-between gap-2 p-4 h-16">
      <SidebarTrigger className="-ml-1" />
      <ThemeToggle className="h-7 w-7" />


    </header >
  )
}
