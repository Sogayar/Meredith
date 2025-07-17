import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DOT_INTERVAL_MS = 500;
const MAX_DOTS = 3;

export default function NotFound() {
  const navigate = useNavigate();
  const [dots, setDots] = useState(".");

  // Efeito animado de pontinhos após "Buscando solução"
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= MAX_DOTS ? "." : prev + "."));
    }, DOT_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center transition-all duration-300">
      <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-sm">
        404
      </h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Página não encontrada
      </p>
      <p className="text-gray-500 mt-1" aria-live="polite">
        Meredith está tentando encontrar o que você procurou{dots}
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Voltar à página inicial
      </button>
    </div>
  );
}