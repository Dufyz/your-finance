import { NextResponse } from "next/server";
import { corsHeaders } from "@/middleware";
import { SignUpService } from "@/services/auth/sign-up.service";
import { SignInService } from "@/services/auth/sign-in.service";
import { SignOutService } from "@/services/auth/sign-out.service";

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  let body;
  let action;

  try {
    body = await request.json();
    action = body.action;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid body" },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    let loginResponse;

    switch (action) {
      case "sign-up":
        loginResponse = await SignUpService(body);
        break;
      case "sign-in":
        loginResponse = await SignInService(body);
        break;
      // case "sign-out":
      //   loginResponse = await SignOutService(body);
      case "forgot-password":
        loginResponse = await SignOutService(body);
        break;
      default:
        throw new Error("Unsupported action");
    }

    const response = NextResponse.json(loginResponse, {
      status: 200,
      headers: {
        ...corsHeaders,
      },
    });

    if (!loginResponse?.access_token) return response;

    response.cookies.set("sessionToken", loginResponse.access_token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      path: "/",
      domain: "localhost",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });

    return response;
  } catch (error) {
    let status = 500;
    const errorMessage = error.message || "An unexpected error occurred";

    if (errorMessage === "User already registered") status = 409;

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
