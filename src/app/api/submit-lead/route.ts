import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      source = "construction",
      answers,
      readiness_score,
      // Add these for lead_magnet source
      timeline: directTimeline,
      budget: directBudget,
      style: directStyle,
    } = body;

    // Extract specific fields - check both answers object AND top-level fields
    const timeline = directTimeline || answers?.timeline || null;
    const budget = directBudget || answers?.budget || null;
    const style = directStyle || answers?.style || null;
    const decisionMaker = answers?.decisionMaker || null;

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

    // ----- Insert new lead -----
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        email: email.toLowerCase(),
        phone: formattedPhone,
        timeline,
        budget,
        style,
        source,
        decision_maker: decisionMaker,
        assessment_answers: answers || {},
        readiness_score: readiness_score ?? null,
        status: "new",
      })
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    // ----- Trigger n8n webhook -----
    if (process.env.N8N_WEBHOOK_URL) {
      try {
        await fetch(process.env.N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lead: data[0] }),
        });
      } catch (err) {
        console.error("n8n webhook error:", err);
      }
    }

    return NextResponse.json({ success: true, lead: data[0] });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
