"use server";

import { createClient } from "@/config/supabase/supabaseServer";
import { Session } from "@supabase/supabase-js";

type IHandleRecoverPassword = {
  password: string;
  session: Session;
};

export async function recoverPassword({
  password,
  session
}: IHandleRecoverPassword) {
  const supabase = await createClient();

  const { error: sessionError } = await supabase.auth.setSession({
    access_token: session.access_token,
    refresh_token: session.refresh_token
  });

  if (sessionError) {
    console.log(sessionError);
    throw new Error(sessionError.message);
  }

  const { error } = await supabase.auth.updateUser({
    password
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
