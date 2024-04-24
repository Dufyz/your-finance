"use server";

import { revalidateTag } from "next/cache";

export const postTransaction = async ({ user_id, wallet_id, category_id, value, description, type, transaction_date }: {
    user_id: number;
    wallet_id: number;
    category_id: number;
    value: number;
    description: string;
    type: string;
    transaction_date: Date;
}) => {
    const body = JSON.stringify({
        user_id, wallet_id, category_id, value, description, type, transaction_date
    })

    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/transactions`, {
        method: "POST",
        body,
    });

    revalidateTag("get-week-transactions")

    if (!response.ok) {
        throw new Error("Error creating transaction");
    }

    return response.json();
}