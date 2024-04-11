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
import { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ChangeNameSchema = z.object({
  id: z.number(),
  name: z.string().min(3, "Name must have at least 3 characters")
});

type ChangeNameSchemaType = z.infer<typeof ChangeNameSchema>;

const ChangeName = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangeNameSchemaType>({
    resolver: zodResolver(ChangeNameSchema),
    defaultValues: {
      id: user.id,
      name: user.name
    }
  })
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change name
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <form action={(formData: FormData) => {
          formData.append('id', user.id.toString());
          patchUser(formData);
        }} className="flex gap-4 flex-col items-start justify-center">
          <div className="flex w-full flex-col items-start justify-start gap-4">
            <div className="flex w-full items-center justify-start">
              <p className="text-sm">
                Your current name is:{" "}
                <span className="text-sm font-bold">{user.name}</span>
              </p>
            </div>
            <div className="flex w-full items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <label htmlFor="" className="text-sm">
                  Enter new name
                </label>
                {errors.name?.message && <FormError message={errors.name.message} />}
                <Input {...register("name")} type="text" placeholder="Your name" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-green-700 p-2 text-white"
          >
            Save
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeName;
