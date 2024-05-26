"use server";

import { createClient } from "./supabase/supabaseServer";

export default async function apiServer(
  endpoint: string,
  options: RequestInit = {}
) {
  const supabse = await createClient();

  const baseUrl = process.env.NEXT_PUBLIC_WEB_API;

  const {
    data: { session }
  } = await supabse.auth.getSession();

  const sessionToken = session?.access_token;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionToken}`
  };

  const mergedOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  return await fetch(`${baseUrl}/api${endpoint}`, mergedOptions);
}
