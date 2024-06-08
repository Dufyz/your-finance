"use server";

import api from "@/config/api";

export const getMonthTransactions = async ({
  user_id
}: {
  user_id: number;
}) => {
  const response = await api(`/transactions?tab=month`, {
    method: "GET",
    next: {
      tags: [`get-month-transactions-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting transactions");
  }

  return response.json();
};
