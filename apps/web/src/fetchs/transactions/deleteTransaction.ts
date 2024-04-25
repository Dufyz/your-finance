"use server";

import { revalidateTag } from "next/cache";

export const deleteTransaction = async ({
    id
}: {
    id: number;
}) => {
    const body = JSON.stringify({
        id
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/transactions`, {
        body,
        method: "DELETE",
    });

    revalidateTag("get-week-transactions");
    revalidateTag("get-month-transactions");
    revalidateTag("get-year-transactions");
    revalidateTag("get-custom-transactions");
    revalidateTag("get-last-transactions");

    revalidateTag("get-wallets");
    revalidateTag("get-cards");
    revalidateTag("get-totals");

    if (!response.ok) {
        throw new Error("Error deleting transaction.");
    }

    return response.json();
}
