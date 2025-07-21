// src/components/effects/LoadingScreen.tsx
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingScreenProps {
  message?: string
  className?: string
}

export default function LoadingScreen({
  message = "Carregando Meredith...",
  className,
}: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-white",
        className
      )}
      role="alert"
      aria-live="assertive"
    >
      <Loader2 className="h-14 w-14 animate-spin text-cyan-400 mb-6" />

      <p className="text-cyan-300 text-lg font-mono animate-pulse text-center max-w-xs px-4">
        {message}
      </p>
    </div>
  )
}
