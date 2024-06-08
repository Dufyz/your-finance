"use server";

import api from "@/config/api";

export const getYearTransactions = async ({ user_id }: { user_id: number }) => {
  const response = await api(`/transactions?tab=year`, {
    method: "GET",
    next: {
      tags: [`get-year-transactions-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting transactions");
  }

  return response.json();
};
