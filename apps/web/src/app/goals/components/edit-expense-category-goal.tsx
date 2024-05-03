"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconPencil, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { banks } from "@/data/banks";
import FormError from "@/components/global/form-error";
import { postWallet } from "@/fetchs/wallets/postWallet";
import { useWalletsStore } from "@/stores/Wallets";
import { User } from "@/types/User";
import MoneyInput from "@/components/ui/MoneyInput";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";

const CreateWalletSchema = z.object({
  user_id: z.number().int(),
  bank_id: z.number().int(),
  nickname: z.string().min(6, "Nickname must have at least 6 characters"),
  initial_balance: z.coerce.number().min(0.00, "Required"),
  is_main: z.boolean(),
  type: z.string().refine((value) => (value === "saving" || value === "current" || value === "wallet"), {
    message: "You must select a valid wallet type."
  })
})

type CreateWalletSchemaType = z.infer<typeof CreateWalletSchema>;

export default function EditExpenseCategoryGoal() {
  const [iconColor, setIconColor] = useState("#15803d");

  const addWallet = useWalletsStore((state) => state.addWallet);

  const form = useForm<CreateWalletSchemaType>({
    resolver: zodResolver(CreateWalletSchema),
    defaultValues: {
      user_id: 1,
      bank_id: 0,
      initial_balance: 0.00,
      nickname: "",
      is_main: false,
      type: "current"
    }
  });

  const { handleSubmit, control, register, reset, setValue, getValues, formState: { errors } } = form;

  const typeFieldValue = useWatch({
    control,
    name: "type",
  });

  const handleCreateWallet = async ({
    user_id, bank_id, initial_balance, nickname, is_main, type
  }: CreateWalletSchemaType) => {
    try {
      const newWallet = await postWallet({
        user_id,
        bank_id,
        initial_balance: Number(initial_balance),
        nickname,
        is_main,
        type,
      });

      addWallet(newWallet);

      reset();

      toast.success("Wallet created successfully.");
    } catch (error) {
      toast.error("An error occurred while creating the wallet.");
      console.error(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex gap-3 items-center justify-center border-green-700 p-2 hover:bg-gray-100 border rounded-md">
          <div>
            <p className="text-green-700">Adjust</p>
          </div>
          <div>
            <IconPencil size={16} color="#15803d" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <Form {...form}>
          <form onSubmit={handleSubmit(handleCreateWallet)} className="w-full flex flex-col items-start justify-start gap-6">
            <DialogHeader className="w-full" />

            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p>Category: {"Restaurante"}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="initial_balance">Goal target</Label>
                {errors.initial_balance?.message && (
                  <FormError message={errors.initial_balance.message} />
                )}
                <MoneyInput form={form} name="initial_balance" label="Initial balance" placeholder="R$ 0,00" />
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full rounded-md bg-green-700 p-2 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}