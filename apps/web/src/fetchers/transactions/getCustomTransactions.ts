"use server";

import api from "@/config/api";

export const getCustomTransactions = async ({
  user_id,
  date_from,
  date_to
}: {
  user_id: number;
  date_from: String;
  date_to: String;
}) => {
  const response = await api(
    `/transactions?tab=custom&date_from=${date_from}&date_to=${date_to}`,
    {
      method: "GET",
      next: {
        tags: [`get-custom-transactions-${user_id}`]
      }
    }
  );

  if (!response.ok) {
    throw new Error("Error getting transactions");
  }

  return response.json();
};
