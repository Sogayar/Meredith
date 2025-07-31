// src/screens/SignIn/SignIn.tsx
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validarSenha = (senha: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(senha);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!email.includes("@") || !email.includes(".")) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (!validarSenha(senha)) {
      setErro("A senha deve conter ao menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
    });
    setLoading(false);
    setSenha("");

    if (error) {
      setErro(error.message);
    } else {
      toast.success("Cadastro realizado com sucesso! Verifique seu e-mail para confirmar.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0080df] via-[#005694] to-[#003d6b] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-300 rounded-full blur-lg animate-float" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-lg animate-float" />
      </div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md max-h-screen overflow-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <img src="/assets/avatar-dra-sofia.svg" alt="User Logo" className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Criar Conta</h1>
            <p className="text-gray-600 text-sm">Cadastre-se para começar a usar a Meredith</p>
          </div>

          {/* Error Message */}
          {erro && <p className="text-red-600 text-sm text-center mb-4">{erro}</p>}

          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080df] focus:border-transparent transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080df] focus:border-transparent transition-all duration-200"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-[#0080df] to-[#005694] hover:from-[#0070c5] hover:to-[#004a7c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0080df] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Meredith - Sua secretária virtual inteligente
          </p>
        </div>
      </div>
    </div>
  );
}