import apiWeb from "@/config/api-web";
import getCookie from "@/utils/get-cookie";
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
      const body = {
        action: "sign-up",
        name,
        email,
        password
      };

      const { data: session } = await apiWeb.post("/auth", body);

      toast.success("User created successfully");

      setActiveTab("sign-in");

      setCookie({
        name: "sessionToken",
        value: session.access_token,
        expires_at: new Date(session.expires_at * 1000).toUTCString()
      });

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
      const body = {
        action: "sign-in",
        email,
        password,
      };

      const { data: session } = await apiWeb.post("/auth", body);

      setCookie({
        name: "sessionToken",
        value: session.access_token,
        expires_at: new Date(session.expires_at * 1000).toUTCString()
      });

      router.push("/login");

      toast.success("Login successfully");
    } catch (error) {
      console.error(error);

      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    toast.info("Not implemented yet");
  };

  const handleLogout = () => {
    try {
      const sessionToken = getCookie({
        name: "sessionToken"
      });

      // apiWeb.post('/auth', {
      //   action: "sign-out",
      //   sessionToken,
      //   })

      setCookie({
        name: "sessionToken",
        value: "",
        expires_at: new Date().toUTCString()
      });

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
