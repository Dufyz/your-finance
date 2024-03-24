import apiWeb from "@/config/api-web";
import { useState } from "react";

const useLogin = () => {
  const [activeTab, setActiveTab] = useState<
    "sign-in" | "sign-up" | "forgot-password"
  >("sign-in");

  const handleSignIn = async () => {

    try {
      const {data} = await apiWeb.get('/login');
      console.log("// response", data)
    } catch(error){
      console.log("// error", error)
    }

  };

  const handleSingUp = () => {
    // handle register
  };

  const handleForgotPassword = () => {
    // handle forgot password
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
