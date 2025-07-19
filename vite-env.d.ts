/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // Adicionaremos as outras variáveis aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
