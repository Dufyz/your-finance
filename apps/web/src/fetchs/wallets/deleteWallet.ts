"use server";

import api from "@/config/api";
import { revalidateTag } from "next/cache";

export const deleteWallet = async ({ id }: {
    id: number;
}) => {
    const body = JSON.stringify({
        id
    })

    const response = await api(`/wallets`, {
        method: "DELETE",
        body,
    });

    revalidateTag("get-week-transactions");
    revalidateTag("get-month-transactions");
    revalidateTag("get-year-transactions");
    revalidateTag("get-custom-transactions");
    revalidateTag("get-last-transactions");

    revalidateTag("get-wallets");
    revalidateTag("get-totals");

    if (!response.ok) {
        throw new Error("Error creating wallet");
    }

    return response.json();
}