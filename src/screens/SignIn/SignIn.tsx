import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import toast from "react-hot-toast";

export default function SignIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);
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

    if (!nome.trim()) {
      setErro("Digite seu nome completo.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (!validarSenha(senha)) {
      setErro("A senha deve conter ao menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (!aceitouTermos) {
      setErro("Você deve aceitar os termos de uso.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: senha,
    });

    setLoading(false);

    if (error) {
      setErro(error.message);
    } else {
      toast.success("Cadastro realizado com sucesso! Verifique seu e-mail para confirmar.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0080df] via-[#005694] to-[#003d6b] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-300 rounded-full blur-lg animate-float" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-lg animate-float" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full lg:max-w-lg">
        <form
          onSubmit={handleSignUp}
          className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/30 space-y-6 animate-fade-in"
        >
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#0080df] to-[#005694] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Criar Conta</h2>
            <p className="text-gray-600 font-medium text-sm">Cadastre-se para começar a usar a Meredith</p>
          </div>

          {erro && <p className="text-red-600 text-sm text-center font-medium">{erro}</p>}

          <div className="space-y-2">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome completo</label>
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="nome"
              type="text"
              required
              className="w-full px-3 py-2 pl-4 border border-gray-300 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="senha"
                type="password"
                required
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-500">Use pelo menos 8 caracteres, incluindo letra maiúscula, número e símbolo.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmar" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="confirmar"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input
              id="termos"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={aceitouTermos}
              onChange={() => setAceitouTermos(!aceitouTermos)}
            />
            <label htmlFor="termos" className="text-gray-600">
              Eu li e aceito os <a href="#" className="text-blue-600 underline">termos de uso</a> da Meredith.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#0080df] to-[#005694] text-white py-2 rounded-xl hover:from-[#0070c5] hover:to-[#004a7c] transition-all font-semibold disabled:opacity-60 flex items-center justify-center shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Cadastrando...
              </div>
            ) : (
              "Cadastrar"
            )}
          </button>

          <p className="text-sm text-center text-gray-600">
            Já tem uma conta? <Link to="/login" className="text-blue-600 font-medium hover:underline">Entrar</Link>
          </p>
        </form>

        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Meredith - Sua secretária virtual inteligente
          </p>
        </div>
      </div>
    </div>
  );
}
