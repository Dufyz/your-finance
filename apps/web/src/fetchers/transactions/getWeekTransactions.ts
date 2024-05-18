"use server";

import apiServer from "@/config/apiServer";

export const getWeekTransactions = async ({ user_id }: { user_id: number }) => {
  const response = await apiServer(`/transactions?tab=week`, {
    method: "GET",
    next: {
      tags: [`get-week-transactions-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting transactions");
  }

  return response.json();
};
