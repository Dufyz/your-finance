"use server";

import { createClient } from "@/config/supabase/supabaseServer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type IHandleSignin = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: IHandleSignin) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;

  revalidatePath("/dashboard", "page");
  redirect("/dashboard");
}
