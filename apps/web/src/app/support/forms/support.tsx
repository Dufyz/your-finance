"use client";

import FormError from "@/components/global/form-error";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import submitSupportForm from "@/fetchs/support/submit-support-form";
import { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const supportCategories = [
    {
        id: 1,
        name: "My account"
    },
    {
        id: 2,
        name: "Payment method"
    },
    {
        id: 3,
        name: "Plan"
    },
    {
        id: 4,
        name: "Other"
    }
];

const SupportFormSchema = z.object({
    user_id: z.number().int(),
    name: z.string(),
    email: z.string().email(),
    category_id: z.number().int().min(1, "You must select a category"),
    message: z.string().min(10, "Message must have at least 10 characters"),
    isAgreed: z.boolean().refine(value => value === true, {
        message: "You must agree to our privacy policy"
    })
})

type SupportFormSchemaType = z.infer<typeof SupportFormSchema>;

export default function SupportForm({ user }: {
    user: User
}) {
    const { register, formState: { errors }, control, handleSubmit, reset } = useForm<SupportFormSchemaType>({
        resolver: zodResolver(SupportFormSchema),
        values: {
            user_id: user.id,
            name: user.name,
            email: user.email,
            category_id: 0,
            message: "",
            isAgreed: false
        }
    });

    const handleSubmitSupportForm = async ({ user_id, category_id, message }: {
        user_id: number;
        category_id: number;
        message: string;
    }) => {
        await submitSupportForm({ user_id, category_id, message })
        reset();
    }

    return (
        <form
            onSubmit={handleSubmit(handleSubmitSupportForm)}
            className="mx-auto max-w-xl w-full"
        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Name
                    </label>
                    {errors.name?.message && <FormError message={errors.name.message} />}
                    <div className="mt-2.5">
                        <input
                            {...register("name")}
                            disabled
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Email
                    </label>
                    {errors.email?.message && <FormError message={errors.email.message} />}
                    <div className="mt-2.5">
                        <input
                            {...register("email")}
                            disabled
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="category"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Reason for contact
                    </label>
                    {errors.category_id?.message && <FormError message={errors.category_id.message} />}
                    <Controller
                        control={control}
                        name="category_id"
                        render={({ field }) => (
                            <Select  {...field}
                                onValueChange={(value) => field.onChange(Number(value))}
                                value={field.value === 0 ? "" : field.value.toString()}
                            >
                                <SelectTrigger className="w-full" name="category">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {supportCategories.map((category) => (
                                            <SelectItem
                                                key={category.id}
                                                value={`${category.id}`}
                                            >
                                                <span>{category.name}</span>
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />

                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Message
                    </label>
                    {errors.message?.message && <FormError message={errors.message.message} />}
                    <div className="mt-2.5">
                        <textarea
                            {...register("message")}
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:col-span-2 gap-2">
                    {errors.isAgreed?.message && <FormError message={errors.isAgreed.message} />}
                    <div className="flex gap-x-4 sm:col-span-2">
                        <Controller
                            control={control}
                            name="isAgreed"
                            render={({ field }) => (
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                            )}
                        />
                        <p>
                            By selecting this, you agree to our{" "}
                            <a href="#" className="font-semibold text-green-700">
                                privacy&nbsp;policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                    Send
                </button>
            </div>
        </form>
    )
}