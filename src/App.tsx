// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "./screens/Principal";
import Dashboard from "./screens/Dashboard/Dashboard";
import Login from "./screens/Login/login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter basename="/meredith">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}