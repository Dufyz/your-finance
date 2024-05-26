"use server";

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

  if (error) {
    throw new Error(error.message);
  }

  const { error: errorInsert } = await supabase
    .from("users")
    .insert({
      auth_id: data?.user?.id as string,
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })
    .single();

  if (errorInsert) {
    throw new Error(errorInsert.message);
  }

  const { data: user, error: errorUser } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", data?.user?.id as string)
    .single();

  if (errorUser) {
    throw new Error(errorUser.message);
  }

  await supabase.auth.updateUser({
    data: {
      id: user?.id
    }
  });

  revalidatePath("/dashboard", "page");
  redirect("/dashboard");
}
