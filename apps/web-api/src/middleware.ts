import { NextRequest, NextResponse } from "next/server";
import supabase from "./config/supabase";

export const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  withCredentials: "true",
  "Access-Control-Allow-Credentials": "true",
};

export async function middleware(request: NextRequest) {
  const sessionToken = request.headers.get("Authorization")?.split(" ")[1];

  if (!sessionToken) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  const {data, error} = await supabase.auth.getUser(sessionToken);

  if (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (request.method === "OPTIONS") {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  response.headers.set('X-User-Data', JSON.stringify(data.user));
  
  return response;
}
