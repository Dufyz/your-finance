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

    if (!response.ok) {
        throw new Error("Error deleting transaction.");
    }

    return response.json();
}
