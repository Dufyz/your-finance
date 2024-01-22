import supabase from "@/config/supabase";
import useUser from "@/hooks/userHook";
import { useRouter } from "next/router";
import { toast } from "sonner";

export default function Home() {
  const { user } = useUser();

  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push("/login");

    toast.success("Logout successfully");
  };

  return (
    <>
      <h1>Hello, {user?.name}</h1>

      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}
