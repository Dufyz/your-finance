"use client";

import ForgotPassword from "./components/forgot-password";
import SignIn from "./components/sign-in";
import SingUp from "./components/sign-up";
import { useState } from "react";

export const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<
    "sign-in" | "sign-up" | "forgot-password"
  >("sign-in");

  return (
    <div className="bg-bg-primary flex h-screen w-full flex-col items-center justify-center gap-8">
      <div className="flex w-full max-w-sm flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-12 p-8">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-green-700 sm:text-4xl">
              YourFinance
            </h1>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-6">
            {activeTab === "sign-in" && <SignIn setActiveTab={setActiveTab} />}
            {activeTab === "sign-up" && <SingUp setActiveTab={setActiveTab} />}
            {/* {activeTab === "forgot-password" && (<ForgotPassword setActiveTab={setActiveTab} />)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
