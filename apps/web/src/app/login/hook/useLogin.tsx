import apiWeb from "@/config/api-web";
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
  const [activeTab, setActiveTab] = useState<
    "sign-in" | "sign-up" | "forgot-password"
  >("sign-in");

  const handleSingUp = async ({name, email, password}: IHandleSignUp) => {
    try {
      const body = {
        action: "sign-up",
        name,
        email,
        password,
      }

      await apiWeb.post('/auth', body);

      toast.success("User created successfully");
    } catch(error){
      const errorStatus = error.response.status;

      if(errorStatus === 409){
        toast.error("User already registered");
      }
      
      console.error(error);
    }
  };

  const handleSignIn = async ({email, password}: IHandleSignin) => {

    try {
      const body = {
        action: "sign-in",
        email,
        password,
      }

      await apiWeb.post('/auth', body);

      toast.success("Login successfully");
    } catch(error){
      console.error(error);
      console.log("error message", error.message)
    }
  };

  const handleForgotPassword = () => {
    // TODO implement

    toast.info("Not implemented yet");
  };

  return {
    activeTab,
    setActiveTab,
    handleSignIn,
    handleSingUp,
    handleForgotPassword,
  };
};

export default useLogin;
