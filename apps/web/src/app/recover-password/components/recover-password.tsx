"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { recoverPassword } from "../actions/recover-password";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";
import { useState } from "react";
import { IconEye } from "@tabler/icons-react";
import { Session } from "@supabase/supabase-js";

const RecoverPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

type SignInSchemaType = z.infer<typeof RecoverPasswordSchema>;

export default function RecoverPassword({ session }: { session: Session }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(RecoverPasswordSchema)
  });

  const handleRecoverPasswordAction = async ({
    password
  }: SignInSchemaType) => {
    try {
      await recoverPassword({ password, session });
      toast.success("Password recovered successfully");
    } catch (error) {
      toast.error("An error occurred while recovering the password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRecoverPasswordAction)}
      className="flex w-full flex-col items-center justify-center gap-8"
    >
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label
            htmlFor="password"
            className="text-base font-bold text-gray-800"
          >
            Password
          </label>
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
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-base font-bold text-gray-800"
          >
            Confirm password
          </label>
          {errors.confirmPassword?.message && (
            <FormError message={errors.confirmPassword.message} />
          )}

          <div className="relative w-full">
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Password"
              className="h-12 w-full rounded-[8px] border border-solid border-gray-600 px-4 py-3"
            />
            <IconEye
              size={24}
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-start justify-center gap-6">
          <Button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-[8px] text-base font-semibold text-white"
          >
            Recover
          </Button>
        </div>
      </div>
    </form>
  );
}
