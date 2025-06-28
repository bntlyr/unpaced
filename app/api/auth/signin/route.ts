import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // This could be used for custom server-side logic before/after sign-in
    // For example, logging, analytics, etc.
    const body = await request.json();
    
    // Custom logic here (e.g., logging the sign-in attempt)
    console.log("Sign-in attempt:", body);
    
    return NextResponse.json({ message: "Sign-in processed" }, { status: 200 });
  } catch (error) {
    console.error("Sign-in processing error:", error);
    return NextResponse.json({ error: "Sign-in processing failed" }, { status: 500 });
  }
}