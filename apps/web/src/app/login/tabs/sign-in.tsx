import { IconEye } from "@tabler/icons-react";
import useLogin from "../hook/useLogin";

interface ISignInProps {
  setActiveTab: any;
}

const SignIn = ({ setActiveTab }: ISignInProps) => {

  const {handleSignIn} = useLogin();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-gray-800 text-base font-bold">
            Email Adress
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 py-3 px-4 rounded-[8px] border border-solid border-gray-600"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <div className="w-full flex items-start justify-between flex-wrap gap-4">
            <label htmlFor="" className="text-gray-800 text-base font-bold">
              Password
            </label>
            <button
              className="text-sm text-green-700 cursor-pointer"
              onClick={() => setActiveTab("forgot-password")}
            >
              Forgot password?
            </button>
          </div>

          <div className="w-full relative">
            <input
              type={"password"}
              placeholder="Password"
              className="w-full h-12 py-3 px-4 rounded-[8px] border border-solid border-gray-600"
            />
            <IconEye
              size={24}
              className="absolute right-4 top-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-start justify-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              className="w-5 h-5 bg-primary rounded-[4px] accent-primary"
            />
            <label htmlFor="" className="text-base">
              Keep me signed in
            </label>
          </div>
          <button className="w-full bg-primary py-4 px-3 rounded-[8px] text-white font-bold hover:bg-primary-hover" onClick={() => {
            handleSignIn();
          }}>
            Login
          </button>
        </div>
      </div>
      <div className="w-full text-base font-semibold cursor-pointer flex items-center justify-center px-8">
        <button
          className="text-primary"
          onClick={() => setActiveTab("sign-up")}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default SignIn;


{/* <div className="w-full flex-col flex gap-4">
        <div className="w-full relative flex items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">
            or sign in with
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <button className="w-full flex items-center justify-center gap-4 bg-btn-primary h-12 rounded-2 cursor-pointer hover:bg-btn-primary-hover">
          <IconBrandGoogleHome size={24} />
          <span className="text-[#4B5768] text-base font-semibold">
            Continue with Google
          </span>
        </button>
      </div> */}
