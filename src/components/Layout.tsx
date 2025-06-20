
import React from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Search, FileText, Send, BarChart3, Settings, User, Calendar } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Job Search", url: "/jobs", icon: Search },
  { title: "Resume Builder", url: "/resume", icon: FileText },
  { title: "Applications", url: "/applications", icon: Send },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-primary mb-4">
            🎯 SmartJobHunter
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="mb-6 flex items-center gap-4">
            <SidebarTrigger className="p-2 hover:bg-accent rounded-lg transition-colors" />
            <div className="h-8 w-px bg-border" />
            <h1 className="text-2xl font-semibold">SmartJobHunter</h1>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
