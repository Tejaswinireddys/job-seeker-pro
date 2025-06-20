
import React from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Search, FileText, Send, BarChart3, Settings, User, Calendar } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home, color: "from-emerald-500 to-teal-500" },
  { title: "Job Search", url: "/jobs", icon: Search, color: "from-orange-500 to-red-500" },
  { title: "Resume Builder", url: "/resume", icon: FileText, color: "from-purple-500 to-pink-500" },
  { title: "Applications", url: "/applications", icon: Send, color: "from-cyan-500 to-blue-500" },
  { title: "Analytics", url: "/analytics", icon: BarChart3, color: "from-indigo-500 to-purple-500" },
  { title: "Schedule", url: "/schedule", icon: Calendar, color: "from-green-500 to-emerald-500" },
  { title: "Profile", url: "/profile", icon: User, color: "from-blue-500 to-cyan-500" },
  { title: "Settings", url: "/settings", icon: Settings, color: "from-gray-500 to-gray-600" },
];

function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-0 shadow-lg">
      <SidebarContent className="bg-gradient-to-b from-slate-50 to-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold mb-6 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🎯
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SmartJobHunter
              </span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className={`
                      group rounded-xl transition-all duration-200 hover:shadow-md
                      ${location.pathname === item.url 
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                        : 'hover:bg-gray-100'
                      }
                    `}
                  >
                    <Link to={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className={`h-5 w-5 ${location.pathname === item.url ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'}`} />
                      <span className={`font-medium ${location.pathname === item.url ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>
                        {item.title}
                      </span>
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
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-white">
        <AppSidebar />
        <main className="flex-1">
          <div className="p-6 border-b bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="p-2 hover:bg-gray-100 rounded-lg transition-colors" />
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SmartJobHunter
              </h1>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">AI Assistant Active</span>
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
