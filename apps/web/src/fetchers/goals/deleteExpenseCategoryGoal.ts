"use server";

import { revalidateTag } from "next/cache";
import apiServer from "../../config/apiServer";

export const deleteExpenseCategoryGoal = async ({
  user_id,
  id
}: {
  user_id: number;
  id: number;
}) => {
  const response = await apiServer(`/goals/categories/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Error deleteing expense category goal");
  }

  revalidateTag(`get-categories-goals-${user_id}`);

  return response.json();
};
