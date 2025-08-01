// src/screens/Dashboard/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const agendamentosData = [
  { dia: "Seg", agendamentos: 4 },
  { dia: "Ter", agendamentos: 6 },
  { dia: "Qua", agendamentos: 3 },
  { dia: "Qui", agendamentos: 5 },
  { dia: "Sex", agendamentos: 8 },
  { dia: "Sáb", agendamentos: 2 },
  { dia: "Dom", agendamentos: 10 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | Meredith";
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0080df] via-[#005694] to-[#003d6b] p-4 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-300 rounded-full blur-lg animate-float" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-lg animate-float" />
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-cyan-200 rounded-full blur-md animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-blue-100 rounded-full blur-xl animate-float" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex-1 mr-4 border border-white/20 shadow-xl">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-xl flex items-center justify-center shadow-lg mr-4">
              <img src="/assets/logo-chat.svg" alt="Meredith Logo" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Painel da Meredith</h1>
              <p className="text-white/80 text-sm md:text-base">Monitoramento em tempo real do atendimento automatizado</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Sair
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-2xl">👥</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Novos Clientes</h2>
          <p className="text-3xl font-bold text-blue-600 mb-1">28</p>
          <p className="text-sm text-gray-500">nos últimos 7 dias</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-2xl">📆</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Agendamentos</h2>
          <p className="text-3xl font-bold text-green-600 mb-1">53</p>
          <p className="text-sm text-gray-500">total da semana</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-4/5 animate-pulse"></div>
          </div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-2xl">📨</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Mensagens</h2>
          <p className="text-3xl font-bold text-purple-600 mb-1">137</p>
          <p className="text-sm text-gray-500">interações automáticas</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-5/6 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-lg flex items-center justify-center shadow-lg mr-3">
              <span className="text-xl">📊</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Agendamentos por dia</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#0080df] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Tempo real</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={agendamentosData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis 
              dataKey="dia" 
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            />
            <Line
              type="monotone"
              dataKey="agendamentos"
              stroke="url(#gradient)"
              strokeWidth={3}
              activeDot={{ 
                r: 8, 
                fill: '#0080df',
                stroke: '#fff',
                strokeWidth: 2,
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
              }}
              dot={{ 
                r: 4, 
                fill: '#0080df',
                stroke: '#fff',
                strokeWidth: 2
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0080df" />
                <stop offset="100%" stopColor="#005694" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
}
