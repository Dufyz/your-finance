"use server";

import apiServer from "@/config/apiServer";

export const getMonthTransactions = async ({
    user_id
}: {
    user_id: number;
}) => {
    const response = await apiServer(`/transactions?tab=month`, {
        method: "GET",
        next: {
            tags: [`get-month-transactions-${user_id}`]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }

    return response.json();
}
