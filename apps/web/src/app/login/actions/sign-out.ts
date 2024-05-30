"use server";

import { createClient } from "@/config/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}
