'use server'

import apiServer from "@/config/apiServer";
import { createClient } from "@/config/supabase/supabaseServer";

export default async function getUser() {
  const supabase = createClient();

  const {data: {user}} = await supabase.auth.getUser();

  const user_id = user?.user_metadata.id;

  const response = await apiServer(`/user`, {
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
