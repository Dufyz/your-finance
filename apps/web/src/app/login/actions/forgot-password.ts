"use server";

import { createClient } from "@/config/supabase/supabaseServer";
import { getWebUrl } from "@/utils/get-web-url";

type IHandleForgotPassword = {
  email: string;
};

export async function forgotPassword({ email }: IHandleForgotPassword) {
  const supabase = await createClient();

  const redirectTo = `${getWebUrl()}/recover-password`;

  await supabase.auth.resetPasswordForEmail(`${email}`, {
    redirectTo
  });
}
