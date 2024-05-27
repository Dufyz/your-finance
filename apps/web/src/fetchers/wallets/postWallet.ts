"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export const postWallet = async ({
  user_id,
  bank_id,
  nickname,
  type,
  initial_balance,
  is_main
}: {
  user_id: number;
  bank_id?: number;
  nickname: string;
  type: string;
  initial_balance: number;
  is_main: boolean;
}) => {
  const body = JSON.stringify({
    user_id,
    bank_id,
    nickname,
    type,
    initial_balance,
    is_main
  });

  const response = await apiServer(`/wallets`, {
    method: "POST",
    body
  });

  revalidateTag(`get-wallets-${user_id}`);

  if (!response.ok) {
    throw new Error("Error creating wallet");
  }

  return response.json();
};
