import { LayoutDashboardIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@khinemyaezin/seller-ui/components/sidebar";
import { NavMain, NavUser } from "@khinemyaezin/seller-ui";
import { useAuth } from "../app/AuthContext";

type Menu = {
  label: string;
  icon: React.ElementType;
  children: { href: string; label: string }[];
};

const groups: Menu[] = [];

export function AdminSidebar() {
  const { user, logout } = useAuth();

  const navItems = [
    {
      title: "Overview",
      url: "dashboard",
      icon: LayoutDashboardIcon as any,
    },
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
      <SidebarHeader className="p-4 font-semibold">Grab Store</SidebarHeader>
      <SidebarContent>
        <NavMain label="Menu" items={navItems} />
      </SidebarContent>
      <SidebarFooter className="p-3">
        {user && <NavUser user={user} onLogout={logout} />}
      </SidebarFooter>
    </Sidebar>
  );
}

