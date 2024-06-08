"use server";

import api from "@/config/api";
import { createClient } from "@/config/supabase/supabaseServer";

export default async function getUser() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const user_id = user?.user_metadata.id;

  const response = await api(`/user`, {
    next: {
      tags: [`user-${user_id}`]
    },
    cache: "force-cache"
  });

  if (!response.ok) {
    throw new Error("Error getting user");
  }

  return await response.json();
}
