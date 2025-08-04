// supabase/functions/toggle-n8n-workflow/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const { conversationId, enable, tenantId } = await req.json();

  if (conversationId === undefined || enable === undefined || tenantId === undefined) {
    return new Response(
      JSON.stringify({ error: "conversationId, enable, and tenantId are required." }),
      { headers: { "Content-Type": "application/json" }, status: 400 }
    );
  }

  // Initialize Supabase client to query the database
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
  );

  try {
    // Fetch the N8N webhook URL for the given tenant
    const { data: tenantData, error: tenantError } = await supabaseClient
      .from('tenants')
      .select('n8n_webhook_url')
      .eq('id', tenantId)
      .single();

    if (tenantError || !tenantData || !tenantData.n8n_webhook_url) {
      console.error("Error fetching tenant N8N webhook URL:", tenantError);
      return new Response(
        JSON.stringify({ error: "N8N webhook URL not found for this tenant." }),
        { headers: { "Content-Type": "application/json" }, status: 404 }
      );
    }

    const n8nWebhookUrl = tenantData.n8n_webhook_url;

    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversationId, enable }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro ao chamar o webhook N8N:", errorData);
      throw new Error(`Erro no webhook N8N: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({ message: "Webhook N8N chamado com sucesso!", data: data }),
      { headers: { "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Erro na função toggle-n8n-workflow:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro interno do servidor." }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
});