"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { deleteExpenseCategoryGoal } from "@/fetchers/goals/deleteExpenseCategoryGoal";
import { GoalCategory } from "@/types/GoalCategory";
import { IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";

export function DeleteExpenseCategoryGoal({
  goalCategory
}: {
  goalCategory: GoalCategory;
}) {
  const handleDeleteExpenseCategoryGoal = async () => {
    try {
      await deleteExpenseCategoryGoal({
        id: goalCategory.id
      });

      toast.success("Expense category goal deleted successfully.");
    } catch (error) {
      toast.error(
        "An error occurred while deleting the expense category goal."
      );
      console.error(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center justify-center gap-3 rounded-md border border-red-700 p-3 hover:bg-gray-100">
          <div>
            <IconTrash size={16} color="#b91c1c" />
          </div>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete your expense category
            goal.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteExpenseCategoryGoal()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
