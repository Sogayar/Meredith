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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Painel da Meredith</h1>
          <p className="text-gray-600">Monitoramento em tempo real do atendimento automatizado</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:underline font-medium"
        >
          Sair
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">👥 Novos Clientes</h2>
          <p className="text-3xl font-bold text-blue-600">28</p>
          <p className="text-sm text-gray-400">nos últimos 7 dias</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">📆 Agendamentos</h2>
          <p className="text-3xl font-bold text-green-600">53</p>
          <p className="text-sm text-gray-400">total da semana</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">📨 Mensagens</h2>
          <p className="text-3xl font-bold text-purple-600">137</p>
          <p className="text-sm text-gray-400">interações automáticas</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">📊 Agendamentos por dia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={agendamentosData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="agendamentos"
              stroke="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}