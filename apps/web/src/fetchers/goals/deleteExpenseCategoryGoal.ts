"use server";

import { revalidateTag } from "next/cache";
import api from "../../config/api";

export const deleteExpenseCategoryGoal = async ({
  user_id,
  id
}: {
  user_id: number;
  id: number;
}) => {
  const response = await api(`/goals/categories/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Error deleteing expense category goal");
  }

  revalidateTag(`get-categories-goals-${user_id}`);

  return response.json();
};
