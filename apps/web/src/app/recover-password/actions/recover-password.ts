"use server";

import { createClient } from "@/config/supabase/supabaseServer";

type IHandleRecoverPassword = {
  password: string;
  code: string;
};

export async function recoverPassword({
  password,
  code
}: IHandleRecoverPassword) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
