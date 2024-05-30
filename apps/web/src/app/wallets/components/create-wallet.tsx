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
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { banks } from "@/data/banks";
import FormError from "@/components/global/form-error";
import { postWallet } from "@/fetchers/wallets/postWallet";
import { User } from "@/types/User";
import MoneyInput from "@/components/ui/MoneyInput";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { Wallet } from "@/types/Wallet";
import patchWallet from "@/fetchers/wallets/patchWallet";
import { DeleteWallet } from "./delete-wallet";

const CreateWalletSchema = z
  .object({
    id: z.number().optional(),
    user_id: z.number().int(),
    bank_id: z.number().optional(),
    nickname: z.string().min(6, "Nickname must have at least 6 characters"),
    initial_balance: z.coerce.number().min(0.0, "Required"),
    is_main: z.boolean(),
    type: z
      .string()
      .refine((value) => ["saving", "current", "wallet"].includes(value), {
        message: "You must select a valid wallet type."
      })
  })
  .refine(
    (data) => {
      if (data.type === "wallet") {
        return data.bank_id === undefined;
      } else {
        return data.bank_id !== undefined && data.bank_id > 0;
      }
    },
    {
      message: "You must select a bank for this type of wallet.",
      path: ["bank_id"]
    }
  );

type CreateWalletSchemaType = z.infer<typeof CreateWalletSchema>;

export default function CreateWallet({
  user,
  wallet
}: {
  user: User;
  wallet?: Wallet;
}) {
  const [open, setOpen] = useState(false);
  const [iconColor, setIconColor] = useState("#15803d");

  const isEditing = !!wallet;

  const form = useForm<CreateWalletSchemaType>({
    resolver: zodResolver(CreateWalletSchema),
    defaultValues: {
      id: isEditing ? wallet.id : undefined,
      user_id: isEditing ? wallet.user_id : user.id,
      bank_id: isEditing ? wallet.bank_id : undefined,
      initial_balance: isEditing ? wallet.initial_balance : 0,
      nickname: isEditing ? wallet.nickname : "",
      is_main: isEditing ? wallet.is_main : false,
      type: isEditing ? wallet.type : "current"
    }
  });

  const {
    handleSubmit,
    control,
    register,
    reset,
    setValue,
    getValues,
    trigger,
    formState: { errors, isValid }
  } = form;

  const typeFieldValue = useWatch({
    control,
    name: "type"
  });

  const handleTypeChange = async (type: "wallet" | "current" | "saving") => {
    setValue("type", type);

    if (type === "wallet") {
      setValue("bank_id", undefined);
    }

    await trigger();
  };

  const handleCreateWallet = async ({
    user_id,
    bank_id,
    initial_balance,
    nickname,
    is_main,
    type
  }: CreateWalletSchemaType) => {
    try {
      await postWallet({
        user_id,
        bank_id,
        initial_balance: Number(initial_balance),
        nickname,
        is_main,
        type
      });

      setOpen(false);
      reset();
      toast.success("Wallet created successfully.");
    } catch (error) {
      toast.error("An error occurred while creating the wallet.");
      console.error(error);
    }
  };

  const handleEditWallet = async ({
    user_id,
    id,
    bank_id,
    nickname,
    initial_balance,
    is_main,
    type
  }: CreateWalletSchemaType) => {
    if (!id) return;

    try {
      await patchWallet({
        user_id,
        id,
        bank_id,
        nickname,
        initial_balance,
        is_main,
        type
      });

      setOpen(false);
      toast.success("Wallet edited successfully.");
    } catch (error) {
      toast.error("An error occurred while trying to edit the wallet.");
      console.error(error);
    }
  };

  const handleSubmitWallet = isEditing ? handleEditWallet : handleCreateWallet;

  useEffect(() => {
    if (isEditing) {
      async () => {
        console.log("acionei o trigger");
        await trigger();
        getValues();
      };
    }
  }, [isEditing]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isEditing ? (
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800"
          >
            Edit
          </Button>
        ) : (
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border bg-white shadow-md hover:bg-gray-100"
            onMouseEnter={() => setIconColor("#166534")}
            onMouseLeave={() => setIconColor("#15803d")}
          >
            <IconPlus size={64} color={iconColor} />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleSubmitWallet)}
            className="flex w-full flex-col items-start justify-start gap-6"
          >
            <DialogHeader className="w-full">
              <div className="pt-4">
                <div className="flex min-h-10 w-full flex-row gap-2 rounded-md py-2">
                  <Button
                    type="button"
                    className={`flex flex-1 ${
                      typeFieldValue === "current" ? "" : "bg-muted-foreground"
                    }`}
                    onClick={() => handleTypeChange("current")}
                  >
                    Current
                  </Button>
                  <Button
                    type="button"
                    className={`flex flex-1 ${
                      typeFieldValue === "saving" ? "" : "bg-muted-foreground"
                    }`}
                    onClick={() => handleTypeChange("saving")}
                  >
                    Savings
                  </Button>
                  <Button
                    type="button"
                    className={`flex flex-1 ${
                      typeFieldValue === "wallet" ? "" : "bg-muted-foreground"
                    }`}
                    onClick={() => handleTypeChange("wallet")}
                  >
                    Wallet
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div className="flex w-full flex-col gap-4">
              {typeFieldValue !== "wallet" && (
                <>
                  {errors.bank_id?.message && (
                    <FormError message={errors.bank_id.message} />
                  )}
                  <div className="flex flex-col gap-2">
                    <Controller
                      control={control}
                      name="bank_id"
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          value={String(field.value ?? "")}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a wallet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {banks.slice(1).map((bank, index: number) => (
                                <SelectItem
                                  value={String(bank.id)}
                                  className="py-2"
                                  key={index}
                                >
                                  <div className="flex w-full items-center justify-center gap-4">
                                    <div>
                                      <Image
                                        src={bank.logo_src}
                                        alt={`Logo ${bank.name}`}
                                        width={20}
                                        height={20}
                                        className="rounded-md"
                                      />
                                    </div>
                                    <span className="text-md">{bank.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </>
              )}
              <div className="flex flex-col gap-2">
                <Label htmlFor="nickname">Account nickname</Label>
                {errors.nickname?.message && (
                  <FormError message={errors.nickname.message} />
                )}
                <Input
                  {...register("nickname")}
                  placeholder="Ex: Itaú Savings Account"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="initial_balance">Initial balance</Label>
                {errors.initial_balance?.message && (
                  <FormError message={errors.initial_balance.message} />
                )}
                <MoneyInput
                  form={form}
                  name="initial_balance"
                  label="Initial balance"
                  placeholder="R$ 0,00"
                />
              </div>
              <>
                {errors.is_main?.message && (
                  <FormError message={errors.is_main.message} />
                )}
                <div className="flex w-full items-center justify-between pt-2">
                  <Label htmlFor="is_main">Is main account</Label>
                  <Controller
                    control={control}
                    name="is_main"
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </>
            </div>
            <div className="flex w-full items-center justify-center gap-4">
              {isEditing && <DeleteWallet wallet={wallet} setOpen={setOpen} />}
              <Button
                type="submit"
                disabled={!isValid}
                className="flex-1 rounded-md bg-green-700 p-2 text-white hover:bg-green-800"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
