// src/screens/Dashboard/sections/Sidebar.tsx
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CheckCircle, AlertCircle, XCircle, Activity } from "lucide-react";
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
  sidebarOpen,
  setSidebarOpen,
  sidebarExpanded,
  setSidebarExpanded,
  statusIA,
  menuItems,
}: SidebarProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-400";
      case "instavel": return "bg-yellow-400";
      case "offline": return "bg-red-400";
      default: return "bg-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online": return CheckCircle;
      case "instavel": return AlertCircle;
      case "offline": return XCircle;
      default: return Activity;
    }
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 ${
      sidebarExpanded ? "w-64" : "w-20"
    } bg-white/95 backdrop-blur-md border-r border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-xl flex items-center justify-center shadow-lg">
            <img src="/assets/avatar-dra-sofia.svg" alt="Meredith" className="w-6 h-6" />
          </div>
          {sidebarExpanded && <span className="ml-3 text-lg font-bold text-gray-800">Meredith</span>}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarExpanded ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
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

      {/* Status da IA */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Status da IA</span>
            <div className={`w-3 h-3 rounded-full ${getStatusColor(statusIA)} animate-pulse`} />
          </div>
          <div className="flex items-center text-xs text-gray-500">
            {(() => {
              const StatusIcon = getStatusIcon(statusIA);
              return <StatusIcon className="w-4 h-4 mr-2" />;
            })()}
            <span>
              {statusIA === "online" && "Operando normalmente"}
              {statusIA === "instavel" && "Conexão instável"}
              {statusIA === "offline" && "Fora do ar"}
            </span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Última interação: há 3 min, via WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}