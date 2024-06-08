"use server";

import api from "@/config/api";

export const getCategoriesExpenses = async ({
  user_id
}: {
  user_id: number;
}) => {
  const response = await api(`/categories/expenses`, {
    method: "GET",
    next: {
      tags: [`get-categories-expenses-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting categories expenses");
  }

  return response.json();
};
