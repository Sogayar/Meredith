// src/screens/Dashboard/sections/Header.tsx
import { Bell, Menu } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors mr-4"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
              Painel da Meredith
            </h1>
            <p className="text-white/80 text-sm lg:text-base">
              Monitoramento em tempo real do atendimento automatizado
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button
            onClick={handleLogout}
            className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300 font-medium border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}