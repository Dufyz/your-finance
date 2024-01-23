import supabase from "@/config/supabase";
import useUser from "@/hooks/userHook";
import Image from "next/image";
import { toast } from "sonner";

import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
  const router = useRouter();

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const { setUser } = useUser();

  interface ILogin {
    email: string;
    password: string;
  }

  interface ISingUp {
    email: string;
    password: string;
    name: string;
  }

  interface IResetPassword {
    email: string;
  }

  const handleLogin = async ({ email, password }: ILogin) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return error;
    }

    router.push("/");
    toast.success("Login successfully");

    return data;
  };

  const handleSingUp = async ({ email, password, name }: ISingUp) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return error;
    }

    router.push("/");
    toast.success("Account created successfully");
    return data;
  };

  const handleResetPassword = async ({ email }: IResetPassword) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      return error;
    }

    if (data) {
      toast.success("Password reset link sent to email", {
        description: email,
      });
    }

    return data;
  };

  const handleGoogleLogin = async () => {
    toast.error("Google login is not available yet");
  };

  return (
    <div className="w-full h-screen bg-bg-primary flex flex-col items-center justify-center gap-[32px]">
      <div className="w-full max-w-[400px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-[48px] p-[32px]">
          <div className="w-full flex flex-col items-center justify-center gap-[16px]">
            <h1 className="text-[32px] text-primary font-bold sm:text-[40px]">
              YourFinance
            </h1>
            {isResettingPassword && (
              <span className="text-center text-[16px] text-gray-500">
                Enter your email address to get the password reset link
              </span>
            )}
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-[24px]">
            <div className="w-full flex flex-col items-center justify-center gap-[34px]">
              <div className="w-full flex flex-col items-center justify-center gap-[24px]">
                {isCreatingAccount && !isResettingPassword && (
                  <div className="w-full flex flex-col items-start justify-center gap-[8px]">
                    <label
                      htmlFor=""
                      className="text-secondary text-[16px] font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-[48px] py-[12px] px-[16px] rounded-[8px] border-[1px] border-solid border-[#4B5768]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}
                <div className="w-full flex flex-col items-start justify-center gap-[8px]">
                  <label
                    htmlFor=""
                    className="text-secondary text-[16px] font-bold"
                  >
                    Email Adress
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-[48px] py-[12px] px-[16px] rounded-[8px] border-[1px] border-solid border-[#4B5768]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {!isResettingPassword && (
                  <div className="w-full flex flex-col items-start justify-center gap-[8px]">
                    <div className="w-full flex items-start justify-between flex-wrap gap-[16px]">
                      <label
                        htmlFor=""
                        className="text-secondary text-[16px] font-bold"
                      >
                        Password
                      </label>
                      {!isCreatingAccount && (
                        <span
                          className="text-[14px] text-primary cursor-pointer"
                          onClick={() => setIsResettingPassword(true)}
                        >
                          Forgot password?
                        </span>
                      )}
                    </div>

                    <div className="w-full relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full h-[48px] py-[12px] px-[16px] rounded-[8px] border-[1px] border-solid border-[#4B5768]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Image
                        src="/icons/eye.svg"
                        width={24}
                        height={24}
                        alt="eye icon"
                        className="absolute right-[16px] top-[12px] cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-[32px]">
                <div className="w-full flex flex-col items-start justify-center gap-[24px]">
                  {!isResettingPassword && (
                    <div className="flex items-center justify-center gap-[16px]">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] bg-primary rounded-[4px] accent-primary"
                        onClick={() => setKeepSignedIn(!keepSignedIn)}
                      />
                      <label htmlFor="" className="text-[16px]">
                        Keep me signed in
                      </label>
                    </div>
                  )}
                  {isCreatingAccount && !isResettingPassword && (
                    <button
                      className="w-full bg-primary py-[16px] px-[12px] rounded-[8px] text-white font-bold hover:bg-primary-hover"
                      onClick={() => handleSingUp({ email, password, name })}
                    >
                      Sign Up
                    </button>
                  )}
                  {!isCreatingAccount && !isResettingPassword && (
                    <button
                      className="w-full bg-primary py-[16px] px-[12px] rounded-[8px] text-white font-bold hover:bg-primary-hover"
                      onClick={() => handleLogin({ email, password })}
                    >
                      Login
                    </button>
                  )}
                  {isResettingPassword && (
                    <button
                      className="w-full bg-primary py-[16px] px-[12px] rounded-[8px] text-white font-bold hover:bg-primary-hover"
                      onClick={() => handleResetPassword({ email })}
                    >
                      Password Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
            {!isResettingPassword && (
              <div className="w-full relative flex items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">
                  {isCreatingAccount ? "or sign up with" : "or sign in with"}
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            )}
            {!isResettingPassword && (
              <button
                className="w-full flex items-center justify-center gap-[16px] bg-btn-primary h-[48px] rounded-[8px] cursor-pointer hover:bg-btn-primary-hover"
                onClick={() => handleGoogleLogin()}
              >
                <Image
                  src="/icons/google.svg"
                  width={24}
                  height={24}
                  alt="google icon"
                />
                <span className="text-[#4B5768] text-[16px] font-semibold">
                  Continue with Google
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="w-full text-[16px] font-semibold cursor-pointer flex items-center justify-center px-[32px]">
          {isCreatingAccount && !isResettingPassword && (
            <span
              onClick={() => {
                setIsCreatingAccount(false);
              }}
              className="text-gray-400"
            >
              Already have an account?{" "}
              <span className="text-primary">Login</span>
            </span>
          )}
          {!isCreatingAccount && !isResettingPassword && (
            <span
              onClick={() => setIsCreatingAccount(true)}
              className="text-primary"
            >
              Create an account
            </span>
          )}

          {isResettingPassword && (
            <span
              onClick={() => setIsResettingPassword(false)}
              className="text-gray-400"
            >
              Back to login
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
