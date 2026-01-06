import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    // Check token in Supabase
    const { data: tokenRecord, error: tokenError } = await supabase
      .from("brochure_download_tokens")
      .select("*")
      .eq("token", token)
      .single();

    if (tokenError || !tokenRecord) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Check expiration
    const now = new Date();
    if (new Date(tokenRecord.expires_at) < now) {
      return NextResponse.json({ error: "Token expired" }, { status: 401 });
    }

    // Generate signed URL for secure download (expires in 5 minutes)
    const { data: signedUrlData, error: signedUrlError } =
      await supabase.storage
        .from("brochure")
        .createSignedUrl(tokenRecord.brochure_path, 60 * 5);

    if (signedUrlError || !signedUrlData.signedUrl) {
      console.error("Failed to generate signed URL:", signedUrlError);
      return NextResponse.json(
        { error: "Failed to generate download link" },
        { status: 500 }
      );
    }

    // Redirect user to signed URL
    return NextResponse.redirect(signedUrlData.signedUrl);
  } catch (err) {
    console.error("Brochure API error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
