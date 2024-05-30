import { redirect } from "next/navigation";
import { createClient } from "@/config/supabase/supabaseServer";
import RecoverPassword from "./components/recover-password";
import InvalidCodeFeedback from "./components/invalid-code-feedback";

export default async function RecoverPasswordPage({
  searchParams
}: {
  searchParams: { code: string };
}) {
  const supabase = await createClient();
  const code = searchParams.code;

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }

  if (!code) {
    return <InvalidCodeFeedback />;
  }

  try {
    await supabase.auth.exchangeCodeForSession(code);
  } catch (error) {
    return <InvalidCodeFeedback />;
  }

  return <RecoverPassword code={code} />;
}
