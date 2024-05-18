import { IconEye } from "@tabler/icons-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";
import { useState } from "react";
import { signIn } from "../actions/sign-in";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ISignInProps {
  setActiveTab: any;
}

const SignInSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(6, "Password must have at least 6 characters"),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

const SignIn = ({ setActiveTab }: ISignInProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors, isValid }
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema)
  });

  const handleSingInAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validation = SignInSchema.safeParse({
      email,
      password
    });

    if (!validation.success) {
      return validation.error.errors;
    }

    try {
      await signIn({ email, password });
      return toast.success("Login successfully");
    } catch (error) {
      return toast.error("Invalid credentials. Please try again.");
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <form
        action={handleSingInAction}
        className="flex w-full flex-col items-center justify-center gap-6"
      >
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-base font-bold text-gray-800">
            Email Adress
          </label>
          {errors.email?.message && (
            <FormError message={errors.email.message} />
          )}
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="h-12 w-full rounded-[8px] border border-solid border-gray-600 px-4 py-3"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <div className="flex w-full flex-wrap items-start justify-between gap-4">
            <label htmlFor="" className="text-base font-bold text-gray-800">
              Password
            </label>
            <button
              className="cursor-pointer text-sm text-green-700"
              onClick={() => setActiveTab("forgot-password")}
            >
              Forgot password?
            </button>
          </div>

          {errors.password?.message && (
            <FormError message={errors.password.message} />
          )}

          <div className="relative w-full">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-12 w-full rounded-[8px] border border-solid border-gray-600 px-4 py-3"
            />
            <IconEye
              size={24}
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Button
              type="submit"
              disabled={!isValid}
              className="w-full h-12 text-white text-base font-semibold rounded-[8px] flex items-center justify-center"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="flex w-full cursor-pointer items-center justify-center px-8 text-base font-semibold">
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
