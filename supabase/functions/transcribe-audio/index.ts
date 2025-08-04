// supabase/functions/transcribe-audio/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Carrega a chave da API OpenAI das variáveis de ambiente do Supabase Secrets.
// Você precisará adicionar sua chave OpenAI como um segredo no Supabase com o nome OPENAI_API_KEY.
// Exemplo: supabase secrets set OPENAI_API_KEY="sua_chave_aqui"
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

serve(async (req) => {
  if (!OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Chave da API OpenAI não configurada." }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }

  const { fileUrl } = await req.json();

  if (!fileUrl) {
    return new Response(
      JSON.stringify({ error: "URL do arquivo de áudio não fornecida." }),
      { headers: { "Content-Type": "application/json" }, status: 400 }
    );
  }

  // Inicializa o cliente Supabase para interagir com o Storage
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
  );

  try {
    // Baixa o arquivo de áudio do Supabase Storage
    // A URL do arquivo público pode não ser suficiente para download direto se RLS estiver ativo.
    // Uma abordagem mais robusta seria usar um path de bucket e nome do arquivo para download autenticado.
    // Por simplicidade, estamos assumindo que a URL pública é acessível para o Deno Edge Function.
    const audioResponse = await fetch(fileUrl);
    if (!audioResponse.ok) {
      throw new Error(`Falha ao baixar o arquivo de áudio: ${audioResponse.statusText}`);
    }
    const audioBlob = await audioResponse.blob();

    // Cria um objeto FormData para enviar o arquivo para a API Whisper
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.webm"); // Nome do arquivo pode ser dinâmico
    formData.append("model", "whisper-1");
    formData.append("language", "pt"); // Define o idioma para português

    const whisperResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: formData,
    });

    if (!whisperResponse.ok) {
      const errorData = await whisperResponse.json();
      console.error("Erro da API Whisper:", errorData);
      throw new Error(`Erro na transcrição do áudio: ${errorData.error?.message || whisperResponse.statusText}`);
    }

    const whisperData = await whisperResponse.json();
    const transcription = whisperData.text;

    return new Response(
      JSON.stringify({ transcription: transcription }),
      { headers: { "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Erro na função de transcrição:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro interno do servidor." }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
});
