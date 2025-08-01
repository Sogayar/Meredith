    // src/components/security/ResetPasswordModal.tsx
    import { useState } from "react";
    import { Dialog } from "@headlessui/react";
    import { Mail } from "lucide-react";
    import { supabase } from "@/lib/supabaseClient";
    import toast from "react-hot-toast";

    interface ResetPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    }

    export default function ResetPasswordModal({ isOpen, onClose }: ResetPasswordModalProps) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleReset = async () => {
        if (!email.includes("@") || !email.includes(".")) {
        toast.error("Digite um e-mail válido.");
        return;
        }
        setLoading(true);
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
        });
        setLoading(false);

        if (error) {
        toast.error("Erro ao enviar link de redefinição.");
        } else {
        toast.success("Enviamos um link de redefinição para seu e-mail.");
        setSuccess(true);
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <Dialog.Panel className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
            <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
                Redefinir senha
            </Dialog.Title>

            <div className="space-y-3">
                <label htmlFor="reset-email" className="text-sm font-medium text-gray-700">
                Informe seu e-mail cadastrado
                </label>
                <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    id="reset-email"
                    type="email"
                    className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <button
                type="button"
                onClick={handleReset}
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#0080df] to-[#005694] text-white py-2 rounded-xl hover:from-[#0070c5] hover:to-[#004a7c] transition-all font-semibold disabled:opacity-60 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                {loading ? "Enviando..." : "Enviar link de recuperação"}
                </button>
                <button
                onClick={onClose}
                className="w-full text-sm text-gray-500 mt-2 hover:underline hover:text-gray-700"
                >
                Cancelar
                </button>

                {success && (
                    <p className="text-green-600 text-sm text-center mt-2">
                        Verifique seu e-mail cadastrado, enviamos uma link de redefinição de senha.
                    </p>
                    )}
            </div>
            </Dialog.Panel>
        </div>
        </Dialog>
    );
    }
