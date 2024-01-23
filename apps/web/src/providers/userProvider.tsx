import supabase from "@/config/supabase";
import UserContext from "@/contexts/userContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const handleGetUser = async () => {
    const { data: session, error: sessionError } =
      await supabase.auth.getUser();

    if (sessionError) {
      console.log(sessionError);
      return router.push("/login");
    }

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", session?.user?.id)
      .single();

    if (error) {
      console.log(error);
      return router.push("/login");
    }

    console.log("antes de setar, qual o data?", data);
    setUser(data);
    router.push("/");
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
