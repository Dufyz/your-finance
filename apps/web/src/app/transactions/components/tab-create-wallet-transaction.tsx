
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import Image from "next/image";
import InputMoney from "@/components/global/money-input";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { banks } from "@/data/banks";

const CreateWalletSchema = z.object({
    user_id: z.number().int(),
    wallet_id: z.number().int(),
    card_id: z.number().int(),
    category_id: z.number().int(),
    value: z.number(),
    description: z.string().min(6, "Description must be at least 6 characters"),
    type: z.string().refine((type) => type === "income" || type === "expense", {
        message: "Type must be income or expense"
    }),
    transaction_date: z.date()
})

type CreateWalletSchemaType = z.infer<typeof CreateWalletSchema>;

export default function TabCreateWalletTransaction() {
    const [date, setDate] = useState<Date>(new Date());

    const form = useForm<CreateWalletSchemaType>({
        resolver: zodResolver(CreateWalletSchema),
    })

    const { register, formState: { errors }, control, handleSubmit, getValues, setValue } = form;

    const handleCreateWalletTransaction = ({ user_id, wallet_id, card_id, category_id, value, description, type, transaction_date }: CreateWalletSchemaType) => {
    }

    return (
        <TabsContent value="wallet">
            <Card>
                <form onSubmit={handleSubmit(handleCreateWalletTransaction)}>
                    <CardHeader className="py-4">
                        {/* <Controller
                            control={control}
                            name="wallet_id"
                            render={({ field }) => (
                                <Select {...field} onValueChange={(value) => field.onChange(Number(value))} value={
                                    field.value === null ? "" : field.value.toString() === "0" ? "" : field.value.toString()
                                }>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a wallet" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {banks.slice(1,).map((bank, index: number) => (
                                                <SelectItem value={String(bank.id)} className="py-2" key={index}>
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
                            )} /> */}
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="description">Description</Label>
                            <Input {...register("description")} placeholder="Ex: New Shoes" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="category">Category</Label>
                            <Controller
                                control={control}
                                name="category_id"
                                render={({ field }) => (
                                    <Select {...field} onValueChange={(value) => field.onChange(Number(value))} value={String(field.value || "")}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {banks.map((bank, index: number) => (
                                                    <SelectItem value={String(bank.id)} className="py-2" key={index}>
                                                        <div className="flex w-full items-center justify-center gap-4">
                                                            <span className="text-md">{bank.name}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )} />
                        </div>
                        {/* <div className="space-y-1">
                            <Label htmlFor="value">Value</Label>
                            <MoneyInput form={form} name="value" label="value" placeholder="R$ 0,00" />
                        </div> */}
                        <div className="space-y-1">
                            <div className="flex min-h-10 w-full flex-row gap-2 rounded-md py-2">
                                <Button className={`flex flex-1  bg-muted-foreground hover:bg-green-800 ${getValues().type === "current" ? "" : "bg-muted-foreground"}`} onClick={() => setValue("type", "current")}>
                                    Income
                                </Button>

                                <Button className={`flex flex-1  bg-muted-foreground hover:bg-red-800 ${getValues().type === "current" ? "" : "bg-muted-foreground"}`} onClick={() => setValue("type", "current")}>
                                    Expense
                                </Button>

                            </div>
                        </div>
                        <div className="space-y-1">
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
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </TabsContent>
    )
}