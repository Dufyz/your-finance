import { createClient } from "@/config/supabase/supabaseServer";
import { redirect } from "next/navigation";
import ClientePage from "./cliente";
import { Logout } from "../settings/components/logout";

export default async function TestePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <p>outro</p>
      <ClientePage />
      <Logout />
    </>
  );
}
