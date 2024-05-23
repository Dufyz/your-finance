"use server";

import apiServer from "@/config/apiServer";

type GetTototals = {
  user_id: number;
  date_from?: string;
  date_to?: string;
}
export const getTotals = async ({ user_id, date_from, date_to }: GetTototals) => {
  const response = await apiServer(`/dashboard/totals?date_from=${date_from}&date_to=${date_to}`, {
    method: "GET",
    next: {
      tags: [`get-totals-${user_id}`]
    }
  });

  if (!response.ok) {
    throw new Error("Error getting totals values");
  }

  return response.json();
};
