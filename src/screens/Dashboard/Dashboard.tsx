// src/screens/Dashboard/Dashboard.tsx
import { useState, useEffect } from "react";

const PASSWORD = "meredith2024";

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("dashboard_auth");
    if (stored === PASSWORD) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (input === PASSWORD) {
      sessionStorage.setItem("dashboard_auth", PASSWORD);
      setAuthenticated(true);
    } else {
      alert("Senha incorreta");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-semibold mb-4">Acesso Restrito</h1>
        <input
          type="password"
          placeholder="Digite a senha"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-4 py-2 mb-2"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold">Painel da Meredith</h1>
      <p className="mt-2 text-gray-600">Bem-vindo ao painel interno.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded shadow">📅 Agendamentos futuros</div>
        <div className="border p-4 rounded shadow">📨 Mensagens recentes</div>
        <div className="border p-4 rounded shadow">⚙️ Configurações</div>
      </div>
    </div>
  );
}