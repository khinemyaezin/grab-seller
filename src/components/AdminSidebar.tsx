import { NavLink, type LinkProps } from "react-router";
import type { MouseEvent } from "react";
import { ChevronDownIcon, LayoutDashboardIcon, LogOutIcon, MoonIcon, PackageIcon, ShoppingBagIcon, SunIcon } from "lucide-react";
import { routes } from "@khinemyaezin/seller-contracts";
import { useTheme } from "@khinemyaezin/seller-ui";
import { Button } from "@khinemyaezin/seller-ui/components/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@khinemyaezin/seller-ui/components/collapsible";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub,
  SidebarMenuSubButton, SidebarMenuSubItem,
} from "@khinemyaezin/seller-ui/components/sidebar";
import { useAuth } from "../app/AuthContext";

const groups = [
  { label: "Inventory", icon: PackageIcon, children: [{ href: "", label: "Locations" }] },
  { label: "Catalog", icon: ShoppingBagIcon, children: [{ href: "", label: "Products" }] },
];

export function AdminSidebar() {
  const { resolvedTheme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 font-semibold">Grab Store</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Overview">
                  <NavLink to={"dashboard"}><LayoutDashboardIcon className="size-4" /><span>Overview</span></NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {groups.map((group) => (
                <Collapsible key={group.label} defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={group.label}>
                        <group.icon className="size-4" /><span>{group.label}</span>
                        <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {group.children.map((child) => (
                          <SidebarMenuSubItem key={child.href}>
                            <SidebarMenuSubButton asChild>
                              <NavLink to={child.href}><span>{child.label}</span></NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="gap-2 p-3">
        {user && (
          <span className="truncate px-2 text-xs text-muted-foreground">{user.email}</span>
        )}
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          {user && (
            <Button size="icon" variant="ghost" aria-label="Sign out" onClick={logout}><LogOutIcon /></Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
