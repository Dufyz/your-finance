"use client";

import ForgotPassword from "./forms/forgot-password";
import useLogin from "./hook/useLogin";
import SignIn from "./forms/sign-in";
import SingUp from "./forms/sign-up";

export const LoginPage = () => {
  //TODO implementar forgot password

  const { activeTab, setActiveTab } = useLogin();

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
