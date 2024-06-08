"use server";

import api from "@/config/api";
import { createClient } from "@/config/supabase/supabaseServer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type IHandleSignUp = {
  name: string;
  email: string;
  password: string;
};

export async function signUp({ name, email, password }: IHandleSignUp) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name
      }
    }
  });

  if (error || !data?.user?.id) {
    throw new Error(error?.message);
  }

  await api("/auth/sign-up", {
    method: "POST",
    body: JSON.stringify({
      email,
      name,
      auth_id: data.user.id
    })
  });

  redirect("/login?tab=sign-in");
}
