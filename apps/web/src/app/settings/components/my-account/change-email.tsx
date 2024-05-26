"use client";

import FormError from "@/components/global/form-error";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import patchUser from "@/fetchers/user/patchUser";
import { User } from "@/types/User";
import isPasswordValid from "@/utils/is-password-valid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangeEmailSchema = z.object({
  user_id: z.number(),
  email: z.string().email("Invalid email address").toLowerCase(),
  password: z.string().min(6, "Password must have at least 6 characters")
});

type ChangeEmailSchemaType = z.infer<typeof ChangeEmailSchema>;

export default function ChangeEmail({ user }: { user: User }) {
  const [isValidatingPassword, setIsValidatingPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangeEmailSchemaType>({
    resolver: zodResolver(ChangeEmailSchema),
    values: {
      user_id: user.id,
      email: user.email,
      password: ""
    }
  });

  const handleChangeEmail = async ({
    user_id,
    email
  }: {
    user_id: number;
    email: string;
  }) => {
    try {
      await patchUser({ user_id, email });

      toast.success("Email changed successfully.");
    } catch (error: any) {
      console.log(error?.message);
      toast.error("Error changing email. Please try again.");
    }
  };

  const handleValidatePassword = async ({
    user_id,
    email,
    password
  }: {
    user_id: number;
    email: string;
    password: string;
  }) => {
    if (isValidatingPassword) {
      const isValid = await isPasswordValid({
        user_id,
        email: user.email,
        password
      });

      if (isValid) setIsValidatingPassword(false);

      return;
    }

    if (!isValidatingPassword) {
      try {
        handleChangeEmail({ user_id, email });
      } catch (error: any) {
        console.log(error?.message);
        toast.error("Error changing email. Please try again.");
      } finally {
        return;
      }
    }
  };

  return (
    <Dialog
      onOpenChange={(value) => {
        if (!value) setIsValidatingPassword(true);
      }}
    >
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change email
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-start">
            <p className="text-sm">
              Your current email is:{" "}
              <span className="text-sm font-bold">{user.email}</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleValidatePassword)}
            className="flex w-full flex-col items-start justify-center gap-4"
          >
            <div className="flex w-full flex-col items-start justify-start gap-4">
              {isValidatingPassword && (
                <div className="grid w-full flex-1 gap-2">
                  <label htmlFor="" className="text-sm">
                    Enter your password
                  </label>
                  {errors.password?.message && (
                    <FormError message={errors.password?.message} />
                  )}
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="Your password"
                    disabled={!isValidatingPassword}
                  />
                </div>
              )}
              {!isValidatingPassword && (
                <>
                  <div className="grid w-full flex-1 gap-2">
                    <label htmlFor="" className="text-sm">
                      Enter your new email
                    </label>
                    {errors.email?.message && (
                      <FormError message={errors.email?.message} />
                    )}
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="Your new email"
                    />
                  </div>
                </>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-700 p-2 text-white"
            >
              {isValidatingPassword ? "Continuar" : "Save"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
