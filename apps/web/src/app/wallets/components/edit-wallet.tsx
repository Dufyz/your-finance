"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Wallet as WalletType } from "@/types/Wallet";
import { z } from "zod";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormError from "@/components/global/form-error";
import { banks } from "@/data/banks";
import MoneyInput from "@/components/ui/MoneyInput";
import { toast } from "sonner";
import patchWallet from "@/fetchers/wallets/patchWallet";
import { DeleteWallet } from "./delete-wallet";
import { User } from "@/types/User";

const EditWalletSchema = z.object({
  user_id: z.number(),
  id: z.number().int(),
  bank_id: z.number().int(),
  nickname: z.string().min(6, "Nickname must have at least 6 characters"),
  initial_balance: z.coerce.number().min(0.0, "Required"),
  is_main: z.boolean(),
  type: z
    .string()
    .refine(
      (value) =>
        value === "saving" || value === "current" || value === "wallet",
      {
        message: "You must select a valid wallet type."
      }
    )
});

type EditWalletSchemaType = z.infer<typeof EditWalletSchema>;

export default function EditWallet({
  wallet,
  user
}: {
  wallet: WalletType;
  user: User;
}) {
  const form = useForm<EditWalletSchemaType>({
    resolver: zodResolver(EditWalletSchema),
    defaultValues: {
      user_id: user.id,
      id: wallet.id,
      bank_id: wallet.bank_id,
      nickname: wallet.nickname,
      initial_balance: wallet.initial_balance,
      is_main: wallet.is_main,
      type: wallet.type
    }
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
    setValue
  } = form;

  const typeFieldValue = useWatch({
    control,
    name: "type"
  });

  const handleEditWallet = async ({
    user_id,
    id,
    bank_id,
    nickname,
    initial_balance,
    is_main,
    type
  }: EditWalletSchemaType) => {
    console.log("estou no handleEditWallet");
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
      toast.success("Wallet edited successfully.");
    } catch (error) {
      toast.error("An error occurred while trying to edit the wallet.");
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleEditWallet)}
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
                    onClick={() => setValue("type", "current")}
                  >
                    Current
                  </Button>
                  <Button
                    type="button"
                    className={`flex flex-1 ${
                      typeFieldValue === "saving" ? "" : "bg-muted-foreground"
                    }`}
                    onClick={() => setValue("type", "saving")}
                  >
                    Savings
                  </Button>
                  <Button
                    type="button"
                    className={`flex flex-1 ${
                      typeFieldValue === "wallet" ? "" : "bg-muted-foreground"
                    }`}
                    onClick={() => {
                      setValue("type", "wallet");
                      setValue("bank_id", 0);
                    }}
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
                          value={
                            field.value === null
                              ? ""
                              : field.value.toString() === "0"
                                ? ""
                                : field.value.toString()
                          }
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

            <div className="flex-start flex w-full flex-col items-start gap-2">
              <div className="w-full">
                <DialogClose className="w-full" disabled={!isValid}>
                  <Button
                    type="submit"
                    disabled={!isValid}
                    className="w-full rounded-md bg-green-700 p-2 text-white hover:bg-green-800"
                  >
                    Save
                  </Button>
                </DialogClose>
              </div>
              <div className="w-full">
                <DeleteWallet wallet={wallet} />
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
