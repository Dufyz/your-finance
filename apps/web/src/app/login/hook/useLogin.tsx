import supabase from "@/config/supabase";
import setCookie from "@/utils/set-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
interface IHandleSignUp {
  name: string;
  email: string;
  password: string;
}

interface IHandleSignin {
  email: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<
    "sign-in" | "sign-up" | "forgot-password"
  >("sign-in");

  const handleSingUp = async ({ name, email, password }: IHandleSignUp) => {
    try {
      const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      });
     
      if (error) {
        console.log("error", error);
        throw error;
      }

      setActiveTab("sign-in");

      setCookie({
        name: "sessionToken",
        value: data.session?.access_token,
        expires_at: data.session?.expires_at
      });
      setCookie({
        name: "refreshToken",
        value: data.session?.refresh_token,
        expires_at: data.session?.expires_at
      });

      toast.success("User created successfully");
    } catch (error) {
      const errorStatus = error?.response?.status;

      if (errorStatus === 409) {
        toast.error("User already registered");
      }

      console.error(error);
    }
  };

  const handleSignIn = async ({
    email,
    password,
  }: IHandleSignin) => {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.log("error", error);
        throw error;
      }

      setCookie({
        name: "sessionToken",
        value: data.session?.access_token,
        expires_at: data.session?.expires_at
      });
      setCookie({
        name: "refreshToken",
        value: data.session?.refresh_token,
        expires_at: data.session?.expires_at
      });

      router.push("/dashboard");

      toast.success("Login successfully");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    toast.info("Not implemented yet");
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();

      // setCookie({
      //   name: "sessionToken",
      //   value: "",
      //   expires_at: 0
      // });
      // setCookie({
      //   name: "refreshToken",
      //   value: "",
      //   expires_at: 0
      // });

      router.push("/login");
      toast.info("Logout successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    activeTab,
    setActiveTab,
    handleSignIn,
    handleSingUp,
    handleForgotPassword,
    handleLogout
  };
};

export default useLogin;
