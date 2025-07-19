// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "./screens/Principal";
import Dashboard from "./screens/Dashboard/Dashboard";
import TelaLogin from "./screens/TelaLogin/TelaLogin";
import ProtectedRoute from "./components/security/ProtectedRoute";
import SignIn from "./screens/SignIn/SignIn";
import NotFound from "./screens/NotFound/NotFound";
import { AuthProvider } from "./components/security/AuthProvider"; 

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
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}