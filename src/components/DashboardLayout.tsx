import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@grab/seller-ui/components/sidebar";
import { TooltipProvider } from "@grab/seller-ui/components/tooltip";
import { Toaster } from "@grab/seller-ui";
import { AdminSidebar } from "./AdminSidebar";

export function DashboardLayout() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AdminSidebar />
        <main className="min-h-screen flex-1 bg-[oklch(98.5%_0.002_247.839)] p-8 dark:bg-black">
          <SidebarTrigger />
          <Toaster />
          <Outlet />
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
