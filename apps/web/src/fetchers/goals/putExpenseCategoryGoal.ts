"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export const putExpenseCategoryGoal = async ({
  user_id,
  id,
  category_id,
  target_value
}: {
  user_id: number;
  id: number;
  category_id: number;
  target_value: number;
}) => {
  const body = JSON.stringify({
    category_id,
    target_value
  });

  const response = await apiServer(`/goals/categories`, {
    body,
    method: "PUT"
  });

  if (!response.ok) {
    throw new Error("Error updating expense category goal");
  }

  revalidateTag(`get-categories-goals-${user_id}`);

  return response.json();
};
