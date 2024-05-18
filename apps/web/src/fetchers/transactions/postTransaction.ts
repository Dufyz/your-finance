"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export const postTransaction = async ({
  user_id,
  wallet_id,
  category_id,
  value,
  description,
  type,
  transaction_date
}: {
  user_id: number;
  wallet_id: number;
  category_id: number;
  value: number;
  description: string;
  type: string;
  transaction_date: Date;
}) => {
  const body = JSON.stringify({
    user_id,
    wallet_id,
    category_id,
    value,
    description,
    type,
    transaction_date
  });

  const response = await apiServer(`/transactions`, {
    method: "POST",
    body
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
    throw new Error("Error creating transaction");
  }

  return response.json();
};
