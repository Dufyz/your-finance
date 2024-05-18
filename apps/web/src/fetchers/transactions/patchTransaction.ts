"use server";

import apiServer from "@/config/apiServer";
import { revalidateTag } from "next/cache";

export const patchTransaction = async ({ user_id, id, wallet_id, card_id, category_id, value, description, type, transaction_date }: {
    user_id: number;
    id: number;
    wallet_id?: number;
    card_id?: number;
    category_id: number;
    value: number;
    description: string;
    type: string;
    transaction_date: Date;
}) => {
    const body = JSON.stringify({
        id, wallet_id, card_id, category_id, value, description, type, transaction_date
    })

    const response = await apiServer(`/transactions`, {
        method: "PATCH",
        body,
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
}