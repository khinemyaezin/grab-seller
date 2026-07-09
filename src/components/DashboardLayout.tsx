import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@khinemyaezin/seller-ui/components/sidebar";
import { TooltipProvider } from "@khinemyaezin/seller-ui/components/tooltip";
import { Toaster } from "@khinemyaezin/seller-ui";
import { AdminSidebar } from "./AdminSidebar";
import { AdminSiteHeader } from "./AdminSiteHeader";

export function DashboardLayout() {
  return (
    <TooltipProvider>
      <SidebarProvider className="flex flex-col">
        <div className="flex flex-1">
          <AdminSidebar />
          <main className="min-h-screen flex-1 bg-[oklch(98.5%_0.002_247.839)] dark:bg-black">
            <AdminSiteHeader />
            <Toaster />
            <Outlet />
          </main>
        </div>

      </SidebarProvider>
    </TooltipProvider>
  );
}
