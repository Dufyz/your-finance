"use client";

import FormError from "@/components/global/form-error";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import patchUser from "@/fetchs/user/patchUser";
import validatePassword from "@/fetchs/user/validatePassword";
import { useUserStore } from "@/stores/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangeEmailSchema = z.object({
  id: z.number(),
  email: z.string().email("Invalid email address").toLowerCase(),
  password: z.string().min(6, "Password must have at least 6 characters"),
})

type ChangeEmailSchemaType = z.infer<typeof ChangeEmailSchema>;

export default function ChangeEmail() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  const [isValidatingPassword, setIsValidatingPassword] = useState(true);

  const { register, handleSubmit, formState: { errors } } = useForm<ChangeEmailSchemaType>({
    resolver: zodResolver(ChangeEmailSchema),
    values: {
      id: user.id,
      email: user.email,
      password: "",
    }
  })

  const handleChangeEmail = async ({ id, email }: {
    id: number;
    email: string;
  }) => {
    try {

      patchUser({ id, email });


      setUser({
        user: {
          ...user,
          email
        }
      })

      toast.success("Email changed successfully.");
    } catch (error) {
      console.log(error?.message);
      toast.error("Error changing email. Please try again.");
    }
  }

  const handleValidatePassword = async ({ id, email, password }: {
    id: number;
    email: string;
    password: string;
  }) => {
    if (isValidatingPassword) {
      try {
        await validatePassword({ id, email: user.email, password })
        setIsValidatingPassword(false);
      } catch (
      error
      ) {
        console.log(error?.message);

        if (error?.message.includes("Invalid credentials")) {
          toast.error("Invalid credentials. Please try again.");
          return
        }

        toast.error("Error validating password. Please try again.");
      } finally {
        return
      }
    }

    if (!isValidatingPassword) {
      try {
        handleChangeEmail({ id, email, password });
      } catch (error) {
        console.log(error?.message);
        toast.error("Error changing email. Please try again.");
      } finally {
        return;
      }
    }
  }


  return (
    <Dialog onOpenChange={(value) => {
      if (!value) setIsValidatingPassword(true);
    }}>
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
              <span className="text-sm font-bold">
                {user.email}
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit(handleValidatePassword)} className="w-full flex gap-4 flex-col items-start justify-center">
            <div className="w-full flex flex-col items-start justify-start gap-4">
              {isValidatingPassword && (
                <div className="w-full grid flex-1 gap-2">
                  <label htmlFor="" className="text-sm">
                    Enter your password
                  </label>
                  {errors.password?.message && <FormError message={errors.password?.message} />}
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
                  <div className="w-full grid flex-1 gap-2">
                    <label htmlFor="" className="text-sm">
                      Enter your new email
                    </label>
                    {errors.email?.message && <FormError message={errors.email?.message} />}
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
              {
                isValidatingPassword ? "Continuar" : "Save"
              }
            </button>

          </form>
        </div>

      </DialogContent>
    </Dialog>
  );
};
