"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export const postExpenseCategoryGoal = async ({
  user_id,
  category_id,
  target_value
}: {
  user_id: number;
  category_id: number;
  target_value: number;
}) => {
  const body = JSON.stringify({
    user_id,
    category_id,
    target_value
  });

  const response = await apiServer(`/goals/categories`, {
    body,
    method: "POST"
  });

  if (!response.ok) {
    throw new Error("Error posting expense category goal");
  }

  revalidateTag(`get-categories-goals-${user_id}`);

  return response.json();
};
