// src/screens/Dashboard/sections/RecentActivities.tsx
import { Clock3 } from "lucide-react";

const atividades = [
  {
    id: 1,
    descricao: "Nova mensagem recebida via WhatsApp",
    hora: "10:45",
    tipo: "mensagem",
  },
  {
    id: 2,
    descricao: "Agendamento confirmado para 12h30",
    hora: "10:40",
    tipo: "agendamento",
  },
  {
    id: 3,
    descricao: "Usuário acessou o site via celular",
    hora: "10:32",
    tipo: "acesso",
  },
  {
    id: 4,
    descricao: "IA sugeriu horário alternativo",
    hora: "10:30",
    tipo: "ia",
  },
  {
    id: 5,
    descricao: "Consulta desmarcada pelo usuário",
    hora: "10:28",
    tipo: "cancelamento",
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-lg mr-3">
            <Clock3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Atividades Recentes</h2>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {atividades.map((atividade) => (
          <li key={atividade.id} className="py-3 flex items-start gap-4">
            <div className="w-3 h-3 rounded-full mt-1"
              style={{
                backgroundColor:
                  atividade.tipo === "mensagem"
                    ? "#10B981"
                    : atividade.tipo === "agendamento"
                    ? "#3B82F6"
                    : atividade.tipo === "cancelamento"
                    ? "#EF4444"
                    : atividade.tipo === "ia"
                    ? "#A855F7"
                    : "#6B7280",
              }}
            ></div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm font-medium">{atividade.descricao}</p>
              <p className="text-xs text-gray-400 mt-1">{atividade.hora}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}