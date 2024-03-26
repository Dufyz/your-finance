import { IconEye } from "@tabler/icons-react";
import useLogin from "../hook/useLogin";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";

interface ISignInProps {
  setActiveTab: any;
}

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must have at least 6 characters"),
  keepSignedIn: z.boolean()
})

type SignInSchemaType = z.infer<typeof SignInSchema>

const SignIn = ({ setActiveTab }: ISignInProps) => {

  const {handleSignIn} = useLogin();

  const {
    register, 
    handleSubmit,
    formState: {
      errors,
      isSubmitting  
    }
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
      keepSignedIn: false
    }
  })

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <form 
      onSubmit={handleSubmit(handleSignIn)}
      className="w-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-gray-800 text-base font-bold">
            Email Adress
          </label>
          {errors.email?.message && (<FormError message={errors.email.message} />)}
          <input
          {...register("email")}
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

          {errors.password?.message && (<FormError message={errors.password.message} />)}

          <div className="w-full relative">
            <input
            {...register("password")}
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
        <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-start justify-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <input
            {...register("keepSignedIn")}
              type="checkbox"
              className="w-5 h-5 bg-primary rounded-[4px] accent-primary"
            />
            <label htmlFor="" className="text-base">
              Keep me signed in
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-primary py-4 px-3 rounded-[8px] text-white font-bold hover:bg-primary-hover">
            Login
          </button>
        </div>
      </div>
      </form>
      <div className="w-full text-base font-semibold cursor-pointer flex items-center justify-center px-8">
        <button
          className="text-green-700"
          onClick={() => setActiveTab("sign-up")}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default SignIn;
