// src/screens/Dashboard/sections/MetricsCards.tsx
import { Users, Calendar, MessageSquare, TrendingUp } from "lucide-react";

export default function MetricsCards() {
  const cards = [
    {
      title: "Novos Clientes",
      icon: Users,
      value: 28,
      description: "nos últimos 7 dias",
      color: "from-blue-500 to-blue-600",
      text: "text-blue-600",
      bar: "w-3/4",
    },
    {
      title: "Agendamentos",
      icon: Calendar,
      value: 53,
      description: "total da semana",
      color: "from-green-500 to-green-600",
      text: "text-green-600",
      bar: "w-4/5",
    },
    {
      title: "Mensagens",
      icon: MessageSquare,
      value: 137,
      description: "interações automáticas",
      color: "from-purple-500 to-purple-600",
      text: "text-purple-600",
      bar: "w-5/6",
    },
    {
      title: "Taxa de Conversão",
      icon: TrendingUp,
      value: "89%",
      description: "sessões concluídas",
      color: "from-orange-500 to-orange-600",
      text: "text-orange-600",
      bar: "w-5/6",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
            >
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">{card.title}</h2>
          <p className={`text-3xl font-bold ${card.text} mb-1`}>{card.value}</p>
          <p className="text-sm text-gray-500">{card.description}</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${card.color} h-2 rounded-full ${card.bar} animate-pulse`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}