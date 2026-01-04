// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
// ============================================
// VALIDATION SCHEMA
// ============================================
const LeadSchema = z.object({
  clientId: z.string().uuid(),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/).optional(),
  customFields: z.record(z.any()).optional(),
  honeypot: z.string().max(0),
  timestamp: z.number().refine((ts)=>{
    const now = Date.now();
    return ts <= now && now - ts < 300_000; // 5 minutes
  }, {
    message: "Invalid or expired timestamp"
  }),
  source: z.string().optional()
});
// ============================================
// CORS HEADERS
// ============================================
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
// ============================================
// EDGE FUNCTION
// ============================================
Deno.serve(async (req)=>{
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders
    });
  }
  try {
    const supabase = createClient(Deno.env.get("SUPABASE_URL"), Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));
    const body = await req.json();
    const validated = LeadSchema.parse(body);
    // Lookup landing page
    const { data: landingPage, error: lpError } = await supabase.from("landing_pages").select(`
        id,
        tenant_id,
        tenants (
          id,
          rate_limit_per_hour,
          allowed_origins
        )
      `).eq("client_id", validated.clientId).eq("is_active", true).single();
    if (lpError || !landingPage) {
      return new Response(JSON.stringify({
        error: "Invalid client ID"
      }), {
        status: 403,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    // Rate limiting (optional: remove if RPC not setup)
    const { data: allowed } = await supabase.rpc("check_rate_limit", {
      limit_key: `${landingPage.tenant_id}:${clientIp}`,
      max_requests: landingPage.tenants.rate_limit_per_hour,
      window_seconds: 3600
    });
    if (!allowed) {
      return new Response(JSON.stringify({
        error: "Rate limit exceeded"
      }), {
        status: 429,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }
    // Create lead
    const { data: lead, error: leadError } = await supabase.from("leads").insert({
      tenant_id: landingPage.tenant_id,
      landing_page_id: landingPage.id,
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
      custom_fields: validated.customFields || {},
      source: validated.source || "direct",
      ip_address: clientIp,
      user_agent: req.headers.get("user-agent")
    }).select().single();
    if (leadError) throw leadError;
    // Log event
    await supabase.from("lead_events").insert({
      tenant_id: landingPage.tenant_id,
      lead_id: lead.id,
      event_type: "created",
      payload: {
        ip: clientIp
      }
    });
    return new Response(JSON.stringify({
      success: true,
      leadId: lead.id
    }), {
      status: 201,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return new Response(JSON.stringify({
        error: "Invalid input",
        details: error.errors
      }), {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }
    console.error(error);
    return new Response(JSON.stringify({
      error: "Server error"
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }
});
