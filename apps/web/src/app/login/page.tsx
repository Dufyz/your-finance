"use client";

import ForgotPassword from "./forms/forgot-password";
import useLogin from "./hook/useLogin";
import SignIn from "./forms/sign-in";
import SingUp from "./forms/sign-up";

export const LoginPage = () => {
  const { activeTab, setActiveTab } = useLogin();

  return (
    <div className="w-full h-screen bg-bg-primary flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-[400px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-12 p-8">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl text-green-700 font-bold sm:text-4xl">
              YourFinance
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            {activeTab === "sign-in" && <SignIn setActiveTab={setActiveTab} />}
            {activeTab === "sign-up" && <SingUp setActiveTab={setActiveTab} />}
            {activeTab === "forgot-password" && (
              <ForgotPassword setActiveTab={setActiveTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
