"use client";

import FormError from "@/components/global/form-error";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import patchUser from "@/fetchs/user/patchUser";
import { useUserStore } from "@/stores/User";
import isPasswordValid from "@/utils/is-password-valid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangePasswordSchema = z.object({
  id: z.number(),
  password: z.string().min(6, "Password must have at least 6 characters"),
  new_password: z.string().min(6, "Password must have at least 6 characters"),
  confirm_password: z.string().min(6, "Password must have at least 6 characters"),
})

type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>

export default function ChangePassword() {
  const user = useUserStore((state) => state.user);

  const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(ChangePasswordSchema),
    values: {
      id: user.id,
      password: "",
      new_password: "",
      confirm_password: ""
    }
  });

  const handleChangePassword = async ({ id, password, new_password, confirm_password }: {
    id: number;
    password: string;
    new_password: string;
    confirm_password: string;
  }) => {
    if (new_password !== confirm_password) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    const isPwdValid = isPasswordValid({ id, email: user.email, password });

    if (!isPwdValid) {
      return;
    }

    await patchUser({ id, password: new_password });

    toast.success("Password changed successfully.");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change password
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-start">
            <p className="text-sm">
              Use a password at least 6 letters long.
            </p>
          </div>
          <form onSubmit={handleSubmit(handleChangePassword)} className="flex w-full flex-col  items-start justify-center gap-4 space-x-2">
            <div className="flex w-full flex-col  items-start justify-center gap-4 space-x-2">
              <div className="grid w-full flex-1 gap-2">
                <label htmlFor="" className="text-sm">
                  Enter your current password
                </label>
                {errors.password?.message && <FormError message={errors.password?.message} />}
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="Your password"
                />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <label htmlFor="" className="text-sm">
                  Enter your new password
                </label>
                {errors.new_password?.message && <FormError message={errors.new_password?.message} />}
                <Input
                  {...register("new_password")}
                  type="password"
                  placeholder="New password"
                />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <label htmlFor="" className="text-sm">
                  Confirm your new password
                </label>
                {errors.confirm_password?.message && <FormError message={errors.confirm_password?.message} />}
                <Input
                  {...register("confirm_password")}
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-green-700 p-2 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

