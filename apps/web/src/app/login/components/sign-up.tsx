import { z } from "zod";
import { IconEye } from "@tabler/icons-react";
import FormError from "@/components/global/form-error";
import { signUp } from "../actions/sign-up";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";

type ISignUpProps = {
  setActiveTab: any;
};

const SignUpSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email(),
  password: z.string().min(6, "Password must have at least 6 characters")
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SingUp = ({ setActiveTab }: ISignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors, isValid }
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema)
  });

  const handleSingUpAction = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validation = SignUpSchema.safeParse({
      name,
      email,
      password
    });

    if (!validation.success) {
      return validation.error.errors;
    }

    try {
      await signUp({ name, email, password });
      return toast.success("User created successfully");
    } catch (error: any) {
      const errorStatus = error?.response?.status;

      if (errorStatus === 409) return toast.error("User already registered");

      return toast.error("Error to create user. Please try again.");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <form
        className="flex w-full flex-col items-center justify-center gap-6"
        action={handleSingUpAction}
      >
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="" className="text-base font-bold text-gray-800">
              Name
            </label>
            {errors.name?.message && (
              <FormError message={errors.name.message} />
            )}
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="h-12 w-full rounded-[8px] border border-solid border-gray-600 px-4 py-3"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <label htmlFor="" className="text-4 font-bold text-gray-800">
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
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Button
              type="submit"
              disabled={!isValid}
              className="flex h-12 w-full items-center justify-center rounded-[8px] text-base font-semibold text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
      <div className="flex w-full cursor-pointer items-center justify-center px-6 text-base font-semibold">
        <button
          className="text-gray-400"
          onClick={() => setActiveTab("sign-in")}
        >
          Already have an account? <span className="text-green-700">Login</span>
        </button>
      </div>
    </div>
  );
};

export default SingUp;
