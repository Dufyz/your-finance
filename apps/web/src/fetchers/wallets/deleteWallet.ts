"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export const deleteWallet = async ({
  user_id,
  id
}: {
  user_id: number;
  id: number;
}) => {
  const body = JSON.stringify({
    id
  });

  const response = await apiServer(`/wallets`, {
    method: "DELETE",
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
    throw new Error("Error creating wallet");
  }

  return response.json();
};
