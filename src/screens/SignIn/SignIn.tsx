import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validarSenha = (senha: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
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

    if (error) {
      setErro(error.message);
    } else {
      alert("Cadastro realizado com sucesso! Verifique seu e-mail para confirmar.");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Criar Conta</h2>

        {erro && <p className="text-red-600 text-sm text-center">{erro}</p>}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold disabled:opacity-60"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}