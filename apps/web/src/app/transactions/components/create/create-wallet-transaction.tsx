"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import Image from "next/image";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { banks } from "@/data/banks";
import { transactionCategories } from "@/data/transaction-categories";
import { Wallet } from "@/types/Wallet";
import MoneyInput from "@/components/ui/MoneyInput";
import { Form } from "@/components/ui/form";
import { User } from "@/types/User";
import FormError from "@/components/global/form-error";
import { toast } from "sonner";
import { postTransaction } from "@/fetchers/transactions/postTransaction";
import { Transaction } from "@/types/Transaction";
import { patchTransaction } from "@/fetchers/transactions/patchTransaction";

const CreateWalletSchema = z.object({
    user_id: z.number().int(),
    wallet_id: z.string().refine((wallet_id) => wallet_id !== "", {
        message: "Wallet is required"
    }),
    category_id: z.string().refine((category_id) => category_id !== "", {
        message: "Category is required"
    }),
    value: z.number().refine((value) => value > 0, {
        message: "Value must be greater than 0"
    }),
    description: z.string().min(6, "Description must be at least 6 characters").trim(),
    type: z.string().refine((type) => type === "income" || type === "expense", {
        message: "Type must be income or expense"
    }),
    transaction_date: z.date()
});

type CreateWalletSchemaType = z.infer<typeof CreateWalletSchema>;

export default function CreateWalletTransaction({ transaction, wallets, user}: {
    transaction?: Transaction,
    user: User,
    wallets: Wallet[],
}) {
    const isEditing = !!transaction;

    const initialDate = transaction?.transaction_date ? new Date(transaction.transaction_date) : new Date();

    const [date, setDate] = useState<Date | undefined>(initialDate);

    const form = useForm<CreateWalletSchemaType>({
        resolver: zodResolver(CreateWalletSchema),
        defaultValues: {
            user_id: user.id,
            wallet_id: String(transaction?.wallet_id || ""),
            category_id: String(transaction?.category_id || ""),
            value: transaction?.value || 0,
            description: transaction?.description || "",
            type: transaction?.type || "income",
            transaction_date: date
        }
    })

    const { register, formState: { errors }, control, handleSubmit, getValues, setValue, reset } = form;

    const typeFieldValue = useWatch({
        control,
        name: "type"
    })

    const handleCreateWalletTransaction = async ({ user_id, wallet_id, category_id, value, description, type, transaction_date }: CreateWalletSchemaType) => {
        try {
            if (!date) return;

            const newTransaction = await postTransaction({
                user_id,
                wallet_id: Number(wallet_id),
                category_id: Number(category_id),
                value,
                description,
                type,
                transaction_date: date
            });

            reset();

            toast.success("Transaction created successfully.");
        } catch (error) {
            toast.error("An error occurred while creating the transaction.");
            console.error(error);
        }
    }

    const handleEditWalletTransaction = async ({ user_id, wallet_id, category_id, value, description, type, transaction_date }: CreateWalletSchemaType) => {
        try {
            if (!date || !transaction) return;

            const updatedTransaction = await patchTransaction({
                id: transaction.id,
                wallet_id: Number(wallet_id),
                category_id: Number(category_id),
                value,
                description,
                type,
                transaction_date: date
            });

            toast.success("Transaction updated successfully.");
        } catch (error) {
            toast.error("An error occurred while updating the transaction.");
            console.error(error);
        }
    }

    const handleWalletTransaction = isEditing ? handleEditWalletTransaction : handleCreateWalletTransaction;

    return (
        <Card>
            <Form {...form}>
                <form onSubmit={handleSubmit(handleWalletTransaction)}>
                    <CardContent className="space-y-2 py-4 flex flex-col w-full gap-2">
                        <div className="space-y-1 flex flex-col items-start justify-center gap-1">
                            {errors.wallet_id?.message && <FormError message={errors.wallet_id.message} />}
                            <Controller
                                control={control}
                                name="wallet_id"
                                render={({ field }) => (
                                    <Select {...field} value={String(field.value || "")} onValueChange={(value) => field.onChange(value)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a wallet" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {wallets.map((wallet: Wallet, index: number) => {
                                                    const walletBank = banks.find((bank) => bank.id === wallet.bank_id) || banks[0];

                                                    return (
                                                        <SelectItem value={String(wallet.id)} className="py-2" key={index}>
                                                            <div className="flex w-full items-center justify-center gap-4">
                                                                <div>
                                                                    <Image
                                                                        src={walletBank.logo_src}
                                                                        alt={`Logo ${walletBank?.name}`}
                                                                        width={20}
                                                                        height={20}
                                                                        className="rounded-md"
                                                                    />
                                                                </div>
                                                                <span className="text-md">{wallet.nickname}</span>
                                                            </div>
                                                        </SelectItem>
                                                    )
                                                })}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )} />
                        </div>
                        <div className="space-y-1 flex flex-col items-start justify-center gap-1">
                            <Label htmlFor="description">Description</Label>
                            {errors.description?.message && <FormError message={errors.description.message} />}
                            <Input {...register("description")} placeholder="Ex: New Shoes" />
                        </div>
                        <div className="space-y-1 flex flex-col items-start justify-center gap-1">
                            <Label htmlFor="category">Category</Label>
                            {errors.category_id?.message && <FormError message={errors.category_id.message} />}
                            <Controller
                                control={control}
                                name="category_id"
                                render={({ field }) => (
                                    <Select {...field} onValueChange={(value) => field.onChange(value)} value={String(field.value || "")}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {transactionCategories.map((category, index: number) => (
                                                    <SelectItem value={String(category.id)} className="py-2" key={index}>
                                                        <div className="flex w-full items-center justify-center gap-4">
                                                            <span className="text-md">{category.name}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )} />
                        </div>
                        <div className="space-y-1 w-full flex flex-col items-start justify-center gap-1">
                            <Label htmlFor="value">Value</Label>
                            {errors.value?.message && <FormError message={errors.value.message} />}
                            <MoneyInput form={form} name="value" label="value" placeholder="R$ 0,00" />
                        </div>
                        <div className="space-y-1 flex flex-col items-start justify-center gap-1">
                            <div className="flex min-h-10 w-full flex-row gap-2 rounded-md py-2">
                                <Button type="button" className={`flex flex-1 cursor-pointer hover:bg-green-800 ${typeFieldValue === "income" ? "bg-green-800" : "bg-muted-foreground"}`} onClick={() => setValue("type", "income")}>
                                    Income
                                </Button>

                                <Button type="button" className={`flex flex-1 hover:bg-red-800 ${typeFieldValue === "expense" ? "bg-red-800" : "bg-muted-foreground"}`} onClick={() => setValue("type", "expense")}>
                                    Expense
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-1 flex flex-col items-start justify-center gap-1">
                            {errors.transaction_date?.message && <FormError message={errors.transaction_date.message} />}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        required
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="w-full rounded-md bg-green-700 p-2 text-white">Save</button>
                        </div>
                    </CardContent>
                </form>
            </Form>
        </Card>
    )
}