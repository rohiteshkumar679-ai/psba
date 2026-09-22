import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  console.log(code)

  // Supabase should include a temporary confirmation code
  if (!code) {
    return NextResponse.redirect(
      new URL("/client-portal/login?error=missing_confirmation_code", request.url)
    );
  }

  const supabase = await createClient();

  // Exchange the temporary code for an authenticated session.
  // Your server client will save the session in cookies.
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Email confirmation error:", error.message);

    return NextResponse.redirect(
      new URL("/client-portal/login?error=email_confirmation_failed", request.url)
    );
  }

  // The user is now confirmed and logged in
  return NextResponse.redirect(new URL("/onboarding", request.url));
}