import supabase from "@/config/supabase";
import UserContext from "@/contexts/userContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  const handleSessionSupabase = async () => {
    const { data: session, error } = await supabase.auth.getSession();

    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", session?.session?.user?.id)
      .single();

    if (userError || error) {
      router.push("/login");
      setUser(null);
      return;
    }

    setUser(user);
    return;
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      handleSessionSupabase();
    });
  }, []);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
