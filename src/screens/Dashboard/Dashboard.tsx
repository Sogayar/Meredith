// src/screens/Dashboard/Dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sections/Sidebar";
import Header from "./sections/Header";
import MetricsCards from "./sections/MetricsCards";
import ChartsGrid from "./sections/ChartsGrid";
import RecentActivities from "./sections/RecentActivities";

import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Simulação do status da IA (poderá vir do Supabase futuramente)
  const statusIA = "online";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: CalendarCheck, label: "Agendamentos" },
    { icon: Users, label: "Clientes" },
    { icon: MessageSquare, label: "Mensagens" },
  ];

  useEffect(() => {
    document.title = "Dashboard | Meredith";
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0080df] via-[#005694] to-[#003d6b] overflow-hidden">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
        statusIA={statusIA}
        menuItems={menuItems}
      />

      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="p-4 md:p-6 lg:p-10">
          <MetricsCards />
          <ChartsGrid />
          <RecentActivities />
        </main>
      </div>
    </div>
  );
}
