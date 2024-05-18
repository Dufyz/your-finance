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
import { Label } from "@/components/ui/label";
import { IconPlus } from "@tabler/icons-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";
import { User } from "@/types/User";
import MoneyInput from "@/components/ui/MoneyInput";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { transactionCategories } from "@/data/transaction-categories";
import renderTablerIcon from "@/utils/render-tabler-icon";
import { postExpenseCategoryGoal } from "@/fetchers/goals/postExpenseCategoryGoal";

const CreateExpenseCategoryGoalSchema = z.object({
  user_id: z.number().int(),
  category_id: z.number().int(),
  target_value: z.coerce.number().min(0.00, "Required")
})

type CreateExpenseCategoryGoalType = z.infer<typeof CreateExpenseCategoryGoalSchema>;

export default function CreateExpenseCategoryGoal({user}: {
  user: User
}) {
  const form = useForm<CreateExpenseCategoryGoalType>({
    resolver: zodResolver(CreateExpenseCategoryGoalSchema),
    defaultValues: {
      user_id: user.id,
      category_id: 1,
      target_value: 0.00,
    }
  });

  const { handleSubmit, control, reset, formState: { errors } } = form;

  const handleCreateExpenseCategoryGoal = async ({
    user_id, category_id, target_value
  }: CreateExpenseCategoryGoalType) => {
    try {
      const newExpenseCategoryGoal = await postExpenseCategoryGoal({
        user_id,
        category_id,
        target_value
      });

      reset();

      toast.success("Expense category goal created successfully.");
    } catch (error) {
      toast.error("An error occurred while creating the expense category goal.");
      console.error(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-12 w-12 gap-1 rounded-full bg-green-700 text-sm hover:bg-green-800"
        >
          <IconPlus size={32} color="#fff" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <Form {...form}>
          <form onSubmit={handleSubmit(handleCreateExpenseCategoryGoal)} className="w-full flex flex-col items-start justify-start gap-6">
            <DialogHeader className="w-full" />
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                {errors.category_id?.message && (
                  <FormError message={errors.category_id.message} />
                )}
                <div className="flex flex-col gap-2">
                  <Controller
                    control={control}
                    name="category_id"
                    render={({ field }) => (
                      <Select {...field} onValueChange={(value) => field.onChange(Number(value))} value={
                        field.value === null ? "" : field.value.toString() === "0" ? "" : field.value.toString()
                      }>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a wallet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {transactionCategories.map((category, index) => (
                              <SelectItem key={index} value={category.id.toString()}>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 flex items-center justify-center">
                                    {renderTablerIcon({
                                      icon: category.icon,
                                      size: 16
                                    })}
                                  </div>
                                  <div>
                                    <p>{category.name}</p>
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="target_value">Goal target value</Label>
                {errors.target_value?.message && (
                  <FormError message={errors.target_value.message} />
                )}
                <MoneyInput form={form} name="target_value" label="Target value" placeholder="R$ 0,00" />
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
