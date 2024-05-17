"use server";

import api from "@/config/api";

export const getMonthTransactions = async ({
    user_id
}: {
    user_id: number;
}) => {
    const response = await api(`/transactions?user_id=${user_id}&tab=month`, {
        method: "GET",
        next: {
            tags: ["get-month-transactions"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }

    return response.json();
}
