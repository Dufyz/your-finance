"use server";

import api from "@/config/api";
import { revalidateTag } from "next/cache";

export const deleteTransaction = async ({
  user_id,
  id
}: {
  user_id: number;
  id: number;
}) => {
  const body = JSON.stringify({
    id
  });

  const response = await api(`/transactions`, {
    body,
    method: "DELETE"
  });

  revalidateTag(`get-week-transactions-${user_id}`);
  revalidateTag(`get-month-transactions-${user_id}`);
  revalidateTag(`get-year-transactions-${user_id}`);
  revalidateTag(`get-custom-transactions-${user_id}`);
  revalidateTag(`get-last-transactions-${user_id}`);

  revalidateTag(`get-wallets-${user_id}`);
  revalidateTag(`get-cards-${user_id}`);
  revalidateTag(`get-totals-${user_id}`);

  if (!response.ok) {
    throw new Error("Error deleting transaction.");
  }

  return response.json();
};
