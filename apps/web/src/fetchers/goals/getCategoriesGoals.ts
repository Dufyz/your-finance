"use server";

import api from "@/config/api";

export const getCategoriesGoals = async ({ user_id }: { user_id: number }) => {
  const response = await api(`/goals/categories`, {
    method: "GET",
    next: {
      tags: [`get-categories-goals-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting transactions");
  }

  return response.json();
};
