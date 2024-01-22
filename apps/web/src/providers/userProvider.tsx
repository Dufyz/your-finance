import supabase from "@/config/supabase";
import UserContext from "@/contexts/userContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  const handleGetUser = async () => {
    const { data: session, error: sessionError } =
      await supabase.auth.getUser();

    if (sessionError) {
      console.log(sessionError);
    }

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", session?.user?.id)
      .single();

    if (error) {
      console.log(error);
    }

    if (data) {
      setUser(data);
      router.push("/");
    }

    if (!data) {
      router.push("/login");
    }
  };

  useEffect(() => {
    handleGetUser();
  }, [user]);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
