// src/components/security/ProtectedRoute.tsx
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { supabase } from "@/lib/supabaseClient"
import LoadingScreen from "@/components/effects/LoadingScreen"

interface ProtectedRouteProps {
  children: JSX.Element
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      setIsAuthenticated(!!data.session)
    }

    checkSession()

    // Escuta alterações na autenticação (logout, expiração, refresh)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  if (isAuthenticated === null) {
    return <LoadingScreen />
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />
}