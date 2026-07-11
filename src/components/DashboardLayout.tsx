import { useEffect } from "react";
import { Outlet } from "react-router";
import { SidebarProvider } from "@khinemyaezin/seller-ui/components/sidebar";
import { TooltipProvider } from "@khinemyaezin/seller-ui/components/tooltip";
import { Toaster } from "@khinemyaezin/seller-ui";
import { eventBus } from "@khinemyaezin/seller-api";
import { AdminSidebar } from "./AdminSidebar";
import { AdminSiteHeader } from "./AdminSiteHeader";
import { toast } from "@khinemyaezin/seller-ui/components/index";

export function DashboardLayout() {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe("shell:toast:v1", (payload) => {
      const { type, message, description, position } = payload;
      toast[type](message, { description, position });
    });
    return unsubscribe;
  }, []);

  return (
    <TooltipProvider>
      <SidebarProvider className="flex flex-col" style={{
        "--sidebar-width": "calc(var(--spacing) * 64)",
        "--header-height": "calc(var(--spacing) * 12 + 1px)"
      } as Record<string, string>}>
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
