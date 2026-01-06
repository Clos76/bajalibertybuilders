import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid"; // ✅ Added for brochure token generation

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const source = req.headers.get("referer")?.includes("landing")
      ? "landing_page"
      : req.headers.get("referer")?.includes("referral")
      ? "referral"
      : "direct";

    const {
      name,
      email,
      phone,
      answers,
      readiness_score,
      timeline: directTimeline,
      budget: directBudget,
      style: directStyle,
      decisionMaker: directDecisionMaker,
    } = body;

    // Extract values, prioritizing direct fields over answers object
    const timeline = directTimeline || answers?.timeline || null;
    const budget = directBudget || answers?.budget || null;
    const style = directStyle || answers?.style || null;
    const decisionMaker = directDecisionMaker || answers?.decisionMaker || null;

    // ----- Basic server-side validation -----
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Optional phone formatting
    let formattedPhone: string | null = null;
    if (phone && phone !== "skipped") {
      const cleaned = phone.replace(/\D/g, "");
      if (cleaned.length >= 10) formattedPhone = cleaned;
    }

    // ----- Check for duplicate lead -----
    const { data: existingLead } = await supabase
      .from("leads")
      .select("*")
      .eq("email", email.toLowerCase())
      .eq("source", source)
      .single();

    if (existingLead) {
      return NextResponse.json({
        success: false,
        status: "duplicate",
        lead: existingLead,
      });
    }

    // ----- Generate brochure token (NEW) -----
    let brochureToken: string | null = null;
    let brochureUrl: string | null = null;

    if (email) {
      brochureToken = uuidv4(); // ✅ Generate unique token
      const expiresAt = new Date(
        Date.now() + 1000 * 60 * 60 * 24
      ).toISOString(); // 24h expiration

      const { error: tokenError } = await supabase
        .from("brochure_download_tokens")
        .insert({
          email: email.toLowerCase(),
          token: brochureToken,
          brochure_path: "brochure-v1.pdf",
          expires_at: expiresAt,
        });

      if (tokenError) {
        console.error("Error creating brochure token:", tokenError);
      } else {
        brochureUrl = `https://bajalibertybuilders.vercel.app/brochure/${brochureToken}`;
      }
    }

    // ----- Insert new lead into Supabase -----
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        email: email.toLowerCase(),
        phone: formattedPhone,
        custom_fields: {
          ...answers,
          timeline,
          budget,
          style,
          decision_maker: decisionMaker,
          readiness_score: readiness_score ?? null,
          brochure_token: brochureToken, // ✅ added brochure token to custom_fields
          brochure_url: brochureUrl, // ✅ added brochure URL to custom_fields
        },
        tenant_id: process.env.NEXT_PUBLIC_TENANT_ID || null,
        landing_page_id: process.env.NEXT_PUBLIC_LANDING_PAGE_ID || null,
        ip_address: req.headers.get("x-forwarded-for") || null,
        user_agent: req.headers.get("user-agent") || null,
        status: "new",
      })
      .select();

    if (error || !data || data.length === 0) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    const lead = data[0]; // ✅ Keep this after insert

    // ----- Log lead creation event -----
    const { error: eventError } = await supabase.from("lead_events").insert({
      lead_id: lead.id,
      tenant_id: lead.tenant_id,
      event_type: "lead_created",
      payload: {
        source: "assessment",
        answers,
        readiness_score,
        timeline,
        budget,
        style,
        decision_maker: decisionMaker,
        detected_source: source,
        brochure_token: brochureToken, // ✅ optional, for logging
        brochure_url: brochureUrl, // ✅ optional, for logging
      },
    });

    if (eventError) {
      console.error("Lead event insert failed:", eventError);
    }

    // ----- Success response -----
    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
