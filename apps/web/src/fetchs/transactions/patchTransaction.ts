"use server";

import api from "@/config/api";
import { revalidateTag } from "next/cache";

export const patchTransaction = async ({ id, wallet_id, card_id, category_id, value, description, type, transaction_date }: {
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

    const response = await api(`/transactions`, {
        method: "PATCH",
        body,
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
        throw new Error("Error creating transaction");
    }

    return response.json();
}