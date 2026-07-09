import { LayoutDashboardIcon, ChevronsUpDown, UserIcon } from "lucide-react";
import React, { Suspense, lazy } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@khinemyaezin/seller-ui/components/sidebar";
import { NavMain, ThemeToggleSidebarItem, UserAvatarDetails } from "@khinemyaezin/seller-ui";
import { useAuth } from "../app/AuthContext";
import { useEntryLink } from "../app/EntryLinkContext";
import { Avatar, AvatarFallback, AvatarImage } from "@khinemyaezin/seller-ui/components/avatar";

const RemoteUserMenuWidget = lazy(() => import("grab_seller_auth/UserMenuWidget"));

type Menu = {
  label: string;
  icon: React.ElementType;
  children: { href: string; label: string }[];
};

const groups: Menu[] = [];

export function AdminSidebar() {
  const { platform, user, logout } = useAuth();
  const identityLink = useEntryLink("identity");

  const navItems = [
    ...groups.map((g) => ({
      title: g.label,
      url: "#",
      icon: g.icon as any,
      items: g.children.map((c) => ({
        title: c.label,
        url: c.href,
      })),
    })),
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={""} alt={"Grab Seller Central"} />
                <AvatarFallback className="rounded-lg"><UserIcon /></AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Seller Central</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain label="Menu" items={navItems} />
        <div className="mt-auto px-4 pb-4">
          <SidebarMenu>
            <ThemeToggleSidebarItem />
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-3">
        {user && identityLink && (
          <SidebarMenu>
            <SidebarMenuItem>
              <Suspense fallback={<div className="h-12 w-full animate-pulse bg-sidebar-accent rounded-lg" />}>
                <RemoteUserMenuWidget
                  onLogout={logout}
                  platform={platform}
                  identityLink={identityLink}
                  trigger={
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <UserAvatarDetails avatar={(user as any).avatar} email={user.email} />
                      <ChevronsUpDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                  }
                />
              </Suspense>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

