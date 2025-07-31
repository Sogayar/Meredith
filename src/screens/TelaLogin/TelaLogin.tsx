// src/screens/TelaLogin/TelaLogin.tsx
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function TelaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (carregando) return;
    setCarregando(true);
    setErro("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    setSenha(""); // limpeza de segurança
    setCarregando(false);

    if (error) {
      setErro(
        error.message === "Invalid login credentials"
          ? "E-mail ou senha inválidos."
          : "Erro ao tentar entrar. Tente novamente."
      );
    } else {
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Informe seu e-mail para redefinir a senha.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password` // ajuste essa rota se necessário
    });

    if (error) {
      toast.error("Erro ao enviar link de recuperação.");
    } else {
      toast.success("Link de redefinição enviado para seu e-mail.");
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

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md max-h-screen overflow-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <img src="/assets/logo-chat.svg" alt="Meredith Logo" className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Bem-vindo de volta!</h1>
            <p className="text-gray-600 text-sm">Acesse sua conta da Meredith</p>
          </div>

          {/* Error Message */}
          {erro && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-600 text-center font-medium flex items-center justify-center">
                <Lock className="w-4 h-4 mr-2" />
                {erro}
              </p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  aria-label="Endereço de e-mail"
                  autoComplete="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080df] focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  required
                  aria-label="Senha"
                  autoComplete="current-password"
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080df] focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <button
                  type="button"
                  aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="text-xs text-[#0080df] hover:text-[#005694] font-medium mt-1"
                >
                  Esqueci minha senha
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={carregando}
              className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-[#0080df] to-[#005694] hover:from-[#0070c5] hover:to-[#004a7c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0080df] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {carregando ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Entrando...
                </div>
              ) : (
                <div className="flex items-center">
                  Entrar
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center space-y-4">
            <div className="text-sm text-gray-600">
              Não tem uma conta? {" "}
              <Link
                to="/signup"
                className="font-medium text-[#0080df] hover:text-[#0070c5] transition-colors duration-200"
              >
                Criar conta
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                ← Voltar ao site
              </Link>
            </div>
          </div>
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