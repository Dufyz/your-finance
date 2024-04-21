import { IconEye } from "@tabler/icons-react";
import useLogin from "../hook/useLogin";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";
import { useState } from "react";

interface ISignUpProps {
  setActiveTab: any;
}

const SignUpSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email(),
  password: z.string().min(6, "Password must have at least 6 characters")
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SingUp = ({ setActiveTab }: ISignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSingUp } = useLogin();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <form
        className="flex w-full flex-col items-center justify-center gap-6"
        onSubmit={handleSubmit(handleSingUp)}
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:bg-primary-hover w-full rounded-[8px] bg-primary px-3 py-4 font-bold text-white"
            >
              Sign Up
            </button>
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
