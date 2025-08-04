// src/App.tsx
import "./lib/localization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "./screens/Principal";
import Dashboard from "./screens/Dashboard/Dashboard";
import TelaLogin from "./screens/TelaLogin/TelaLogin";
import ProtectedRoute from "./components/security/ProtectedRoute";
import SignIn from "./screens/SignIn/SignIn";
import NotFound from "./screens/NotFound/NotFound";
import { AuthProvider } from "./components/security/AuthProvider";
import { Agendamentos } from "./screens/Agendamentos";
import { Mensagens } from "./screens/Mensagens";
import MainLayout from "./components/layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/meredith"}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<TelaLogin />} />
          <Route path="/signup" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>}
          />
          <Route
            path="/agendamentos"
            element={<ProtectedRoute><MainLayout><Agendamentos /></MainLayout></ProtectedRoute>}
          />
          <Route
            path="/mensagens"
            element={<ProtectedRoute><MainLayout><Mensagens /></MainLayout></ProtectedRoute>}
          />
          <Route path="*" element={<NotFound />} /> {/* Essa joça aqui tem que ser o último ok? */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}