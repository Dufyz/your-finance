import { IconEye } from "@tabler/icons-react";

interface IForgotPasswordProps {
  setActiveTab: any;
}

const ForgotPassword = ({ setActiveTab }: IForgotPasswordProps) => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-6">
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
            </div>

            <div className="w-full relative">
              <input
                type={true ? "text" : "password"}
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
            <button className="w-full bg-primary py-4 px-3 rounded-[8px] text-white font-bold hover:bg-primary-hover">
              Password Reset
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-base font-semibold cursor-pointer flex items-center justify-center px-8">
        <button
          className="text-gray-400"
          onClick={() => setActiveTab("sign-in")}
        >
          Back to login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
