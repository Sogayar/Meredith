// src/screens/Dashboard/sections/Sidebar.tsx
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  XCircle,
  Activity,
} from "lucide-react";
import { useState } from "react";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  statusIA: string;
  menuItems: MenuItem[];
}

export default function Sidebar({
  sidebarExpanded,
  setSidebarExpanded,
  statusIA,
  menuItems,
}: SidebarProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-400";
      case "instavel":
        return "bg-yellow-400";
      case "offline":
        return "bg-red-400";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return CheckCircle;
      case "instavel":
        return AlertCircle;
      case "offline":
        return XCircle;
      default:
        return Activity;
    }
  };

  return (
    <aside
      className={`relative h-screen transition-all duration-300 bg-white/95 backdrop-blur-md border-r border-white/20 shadow-lg ${
        sidebarExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* Logo + Toggle */}
      <div className="flex flex-col items-center py-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-xl flex items-center justify-center shadow-lg">
          <img
            src="/assets/avatar-dra-sofia.svg"
            alt="Meredith"
            className="w-6 h-6"
          />
        </div>

        {sidebarExpanded && (
          <span className="mt-3 text-lg font-bold text-gray-800">Meredith</span>
        )}

        <button
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="mt-6 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {sidebarExpanded ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-2 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active
                ? "bg-gradient-to-r from-[#0080df] to-[#005694] text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {sidebarExpanded && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* IA Status */}
    <div className="absolute bottom-4 left-9">
        <div className="flex items-center space-x-2">
            {/* Ícone de status colorido com animação */}
            <div className={`w-3 h-3 rounded-full ${getStatusColor(statusIA)} animate-pulse`} />

                {/* Texto só aparece se a sidebar estiver expandida */}
                {sidebarExpanded && (
                <div className="text-sm text-gray-700 leading-tight">
                    <p className="font-medium">Status da IA</p>
                    <p>Operando normalmente</p>
                    <p className="text-xs text-gray-500">
                    Última interação: há 3 min, via WhatsApp
                    </p>
                </div>
            )}
        </div>
    </div>

    </aside>
  );
}
