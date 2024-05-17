import supabaseClient from "@/config/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
      const { error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      });

      if (error) throw error;

      router.push("/login");

      toast.success("User created successfully");
    } catch (error) {
      console.error("error", error);

      const errorStatus = error?.response?.status;

      if (errorStatus === 409) return toast.error("User already registered")

      toast.error("Error to create user. Please try again.");
    }
  };

  const handleSignIn = async ({
    email,
    password,
  }: IHandleSignin) => {
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      toast.success("Login successfully");
    } catch (error) {
      console.error("error", error);
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    toast.info("Not implemented yet");
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();

      if (error) throw error;

      toast.info("Logout successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error to logout. Please try again.");
    }
  };


  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        router.push("/dashboard");
      }

      if (event === "SIGNED_OUT") {
        router.push("/login");
      }

      // if (event === "PASSWORD_RECOVERY") {
      //   toast.success("Password recovery email sent");
      // }
    });

    return () => {
      supabaseClient.auth.onAuthStateChange((event, session) => { });
    };
  })

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
