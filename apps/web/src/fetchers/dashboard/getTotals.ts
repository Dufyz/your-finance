"use server";

import apiServer from "@/config/apiServer";

export const getTotals = async ({
    user_id,
}: {
    user_id: number;
}) => {
    const response = await apiServer(`/dashboard/totals`, {
        method: "GET",
        next: {
            tags: [`get-totals-${user_id}`]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting totals values");
    }

    return response.json();
}
