"use server";

import api from "@/config/api";

export const getLastTransactions = async ({
    user_id
}: {
    user_id: number;
}) => {
    const response = await api(`/transactions?user_id=${user_id}&tab=last`, {
        method: "GET",
        next: {
            tags: ["get-last-transactions"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }

    return response.json();
}
