"use server";

import { createClient } from "@/config/supabase/supabaseServer";

export default async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}
