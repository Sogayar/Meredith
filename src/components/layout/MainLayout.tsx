// src/components/layout/MainLayout.tsx
import { useState } from "react";
import Sidebar from "../../screens/Dashboard/sections/Sidebar";
import Header from "../../screens/Dashboard/sections/Header";
import { LayoutDashboard, CalendarCheck, Users, MessageSquare } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Simulação do status da IA (poderá vir do Supabase futuramente)
  const statusIA = "online";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: CalendarCheck, label: "Agendamentos", path: "/agendamentos" },
    { icon: Users, label: "Clientes" },
    { icon: MessageSquare, label: "Mensagens", path: "/mensagens" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0080df] via-[#005694] to-[#003d6b]">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
        statusIA={statusIA}
        menuItems={menuItems}
      />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="p-4 md:p-6 lg:p-10">{children}</main>
        <Toaster />
      </div>
    </div>
  );
}
