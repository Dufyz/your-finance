"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IconPencil } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/global/form-error";
import MoneyInput from "@/components/ui/MoneyInput";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { GoalCategory } from "@/types/GoalCategory";
import { transactionCategories } from "@/data/transaction-categories";
import { putExpenseCategoryGoal } from "@/fetchers/goals/putExpenseCategoryGoal";

const EditExpenseCategoryGoalSchema = z.object({
  user_id: z.number().int(),
  category_id: z.number().int(),
  target_value: z.coerce.number().min(0.0, "Required")
});

type EditExpenseCategoryGoalType = z.infer<
  typeof EditExpenseCategoryGoalSchema
>;

export default function EditExpenseCategoryGoal({
  goalCategory
}: {
  goalCategory: GoalCategory;
}) {
  const form = useForm<EditExpenseCategoryGoalType>({
    resolver: zodResolver(EditExpenseCategoryGoalSchema),
    defaultValues: {
      user_id: goalCategory.user_id,
      category_id: goalCategory.category_id,
      target_value: goalCategory.target_value
    }
  });

  const {
    handleSubmit,
    formState: { errors }
  } = form;

  const handleCreateWallet = async ({
    user_id,
    category_id,
    target_value
  }: EditExpenseCategoryGoalType) => {
    try {
      await putExpenseCategoryGoal({
        id: goalCategory.id,
        category_id,
        target_value,
        user_id
      });

      toast.success("Expense category goal updated successfully.");
    } catch (error) {
      toast.error(
        "An error occurred while updating the expense category goal."
      );
      console.error(error);
    }
  };

  const categoryName =
    transactionCategories.find(
      (category) => category.id === goalCategory.category_id
    )?.name || " ";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-3 rounded-md border border-green-700 p-2 hover:bg-gray-100">
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
          <form
            onSubmit={handleSubmit(handleCreateWallet)}
            className="flex w-full flex-col items-start justify-start gap-6"
          >
            <DialogHeader className="w-full" />

            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p>Category: {categoryName}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="initial_balance">Goal target value</Label>
                {errors.target_value?.message && (
                  <FormError message={errors.target_value.message} />
                )}
                <MoneyInput
                  form={form}
                  name="target_value"
                  label="Goal target value"
                  placeholder="R$ 0,00"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-4">
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
