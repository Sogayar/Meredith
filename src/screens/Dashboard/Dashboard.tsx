// src/screens/Dashboard/Dashboard.tsx
import { useEffect, useState } from "react";
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
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  ChevronLeft, 
  ChevronRight,
  Calendar,
  MessageSquare,
  Users,
  Settings,
  Home,
  BarChart3,
  Download,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Menu,
  X,
  Bell,
  Activity,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from "lucide-react";


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

const atividadesRecentes = [
  {
    id: 1,
    tipo: "novo_cliente",
    mensagem: "Novo cliente iniciou conversa",
    canal: "WhatsApp",
    tempo: "há 2 minutos",
    icone: Users,
    cor: "#25D366",
  },
  {
    id: 2,
    tipo: "agendamento",
    mensagem: "Agendamento realizado com sucesso",
    canal: "Site",
    tempo: "há 5 minutos",
    icone: Calendar,
    cor: "#0080df",
  },
  {
    id: 3,
    tipo: "resposta",
    mensagem: "Sessão concluída com sucesso",
    canal: "Instagram",
    tempo: "há 8 minutos",
    icone: CheckCircle,
    cor: "#E4405F",
  },
  {
    id: 4,
    tipo: "informacao",
    mensagem: "Informações sobre serviços solicitadas",
    canal: "WhatsApp",
    tempo: "há 12 minutos",
    icone: MessageSquare,
    cor: "#25D366",
  },
  {
    id: 5,
    tipo: "cancelamento",
    mensagem: "Cancelamento processado",
    canal: "Site",
    tempo: "há 15 minutos",
    icone: XCircle,
    cor: "#F59E0B",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filtroData, setFiltroData] = useState("7dias");
  const [filtroCanal, setFiltroCanal] = useState("todos");
  const [statusIA, setStatusIA] = useState("online");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  useEffect(() => {
    document.title = "Dashboard | Meredith";
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: MessageSquare, label: "Conversas" },
    { icon: BarChart3, label: "Estatísticas" },
    { icon: Settings, label: "Configurações" },
    { icon: Users, label: "Conta" },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-[#0080df] via-[#005694] to-[#003d6b] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-300 rounded-full blur-lg animate-float" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-lg animate-float" />
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-cyan-200 rounded-full blur-md animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-blue-100 rounded-full blur-xl animate-float" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-md border-r border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-xl flex items-center justify-center shadow-lg">
              <img src="/assets/avatar-dra-sofia.svg" alt="Meredith" className="w-6 h-6" />
            </div>
            <span className="ml-3 text-lg font-bold text-gray-800">Meredith</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
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
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
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

      {/* Main Content */}
      <div className="lg:ml-64 relative z-10">
        {/* Header */}
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

        {/* Filters */}
        <div className="p-4 lg:p-6">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 p-4 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <select
                  value={filtroData}
                  onChange={(e) => setFiltroData(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0080df] outline-none"
                >
                  <option value="7dias">Últimos 7 dias</option>
                  <option value="30dias">Últimos 30 dias</option>
                  <option value="personalizado">Personalizado</option>
                </select>
                <select
                  value={filtroCanal}
                  onChange={(e) => setFiltroCanal(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0080df] outline-none"
                >
                  <option value="todos">Todos os canais</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="instagram">Instagram</option>
                  <option value="site">Site</option>
                </select>
              </div>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0080df] to-[#005694] text-white rounded-lg hover:shadow-lg transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Exportar Relatório
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <div className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="w-6 h-6 text-white" />
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
                  <Calendar className="w-6 h-6 text-white" />
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
                  <MessageSquare className="w-6 h-6 text-white" />
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

            <div className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Taxa de Conversão</h2>
              <p className="text-3xl font-bold text-orange-600 mb-1">89%</p>
              <p className="text-sm text-gray-500">sessões concluídas</p>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-5/6 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
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
                <LineChart data={agendamentosData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
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
                    activeDot={{
                      r: 8,
                      fill: "#0080df",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
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
                <BarChart data={canalData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
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
                <AreaChart data={agendamentosData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
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

          {/* Recent Activities */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-lg flex items-center justify-center shadow-lg mr-3">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Últimas Atividades</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Tempo real</span>
              </div>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {atividadesRecentes.map((atividade) => (
                <div
                  key={atividade.id}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md"
                    style={{ backgroundColor: `${atividade.cor}20` }}
                  >
                    <atividade.icone className="w-5 h-5" style={{ color: atividade.cor }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{atividade.mensagem}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-xs text-gray-500">{atividade.canal}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{atividade.tempo}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {atividade.canal === "WhatsApp" && <Phone className="w-4 h-4 text-green-500" />}
                    {atividade.canal === "Instagram" && <MessageCircle className="w-4 h-4 text-pink-500" />}
                    {atividade.canal === "Site" && <Globe className="w-4 h-4 text-blue-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}