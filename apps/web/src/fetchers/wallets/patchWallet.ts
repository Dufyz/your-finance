"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export default async function patchWallet({
  user_id,
  id,
  bank_id,
  nickname,
  type,
  initial_balance,
  is_main
}: {
  user_id: number;
  id: number;
  bank_id?: number;
  nickname: string;
  type: string;
  initial_balance: number;
  is_main: boolean;
}) {
  const body = JSON.stringify({
    id,
    bank_id,
    nickname,
    type,
    initial_balance,
    is_main
  });

  const response = await apiServer(`/wallets`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });

  revalidateTag(`get-week-transactions-${user_id}`);
  revalidateTag(`get-month-transactions-${user_id}`);
  revalidateTag(`get-year-transactions-${user_id}`);
  revalidateTag(`get-custom-transactions-${user_id}`);
  revalidateTag(`get-last-transactions-${user_id}`);

  revalidateTag(`get-wallets-${user_id}`);
  revalidateTag(`get-totals-${user_id}`);

  if (!response.ok) {
    throw new Error("Error updating wallet");
  }

  return await response.json();
}
