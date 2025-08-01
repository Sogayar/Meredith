// src/screens/Dashboard/sections/ChartsGrid.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { BarChart3, MessageCircle, Activity, Zap } from "lucide-react";

const agendamentosData = [
  { dia: "Seg", agendamentos: 4, respondidas: 3, abandonadas: 1 },
  { dia: "Ter", agendamentos: 6, respondidas: 5, abandonadas: 1 },
  { dia: "Qua", agendamentos: 3, respondidas: 2, abandonadas: 1 },
  { dia: "Qui", agendamentos: 5, respondidas: 4, abandonadas: 1 },
  { dia: "Sex", agendamentos: 8, respondidas: 7, abandonadas: 1 },
  { dia: "Sáb", agendamentos: 2, respondidas: 2, abandonadas: 0 },
  { dia: "Dom", agendamentos: 10, respondidas: 8, abandonadas: 2 },
];

const canalData = [
  { canal: "WhatsApp", mensagens: 85, cor: "#25D366" },
  { canal: "Instagram", mensagens: 32, cor: "#E4405F" },
  { canal: "Site", mensagens: 20, cor: "#0080df" },
];

const servicosData = [
  { nome: "Agendamento", valor: 45, cor: "#0080df" },
  { nome: "Informações", valor: 30, cor: "#10B981" },
  { nome: "Cancelamento", valor: 15, cor: "#F59E0B" },
  { nome: "Outros", valor: 10, cor: "#8B5CF6" },
];

export default function ChartsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Line Chart */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-lg flex items-center justify-center shadow-lg mr-3">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Agendamentos por dia</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#0080df] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Tempo real</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={agendamentosData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis dataKey="dia" stroke="#6b7280" fontSize={12} tickLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            />
            <Line
              type="monotone"
              dataKey="agendamentos"
              stroke="#0080df"
              strokeWidth={3}
              activeDot={{ r: 8, fill: "#0080df", stroke: "#fff", strokeWidth: 2 }}
              dot={{ r: 4, fill: "#0080df", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg mr-3">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Mensagens por Canal</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={canalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis dataKey="canal" stroke="#6b7280" fontSize={12} tickLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            />
            <Bar dataKey="mensagens" fill="#0080df" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg mr-3">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Serviços Solicitados</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={servicosData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="valor"
            >
              {servicosData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.cor} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {servicosData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.cor }}
              />
              <span className="text-sm text-gray-600">{item.nome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Area Chart */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg mr-3">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Status das Mensagens</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={agendamentosData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis dataKey="dia" stroke="#6b7280" fontSize={12} tickLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            />
            <Area
              type="monotone"
              dataKey="respondidas"
              stackId="1"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="abandonadas"
              stackId="1"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}