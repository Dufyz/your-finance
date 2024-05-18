"use server";

import apiServer from "@/config/apiServer";

export const getLastTransactions = async ({ user_id }: { user_id: number }) => {
  const response = await apiServer(`/transactions?tab=last`, {
    method: "GET",
    next: {
      tags: [`get-last-transactions-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting transactions");
  }

  return response.json();
};
