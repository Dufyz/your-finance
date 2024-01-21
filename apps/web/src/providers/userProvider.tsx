import supabase from "@/config/supabase";
import UserContext from "@/contexts/userContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  const handleGetUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    const response = await supabase.from("Users").select("*");

    if (error) {
      console.log(error);
    }

    if (response) {
      console.log(response);
      setUser(response);
      // router.push("/");
    }
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
