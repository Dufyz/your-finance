"use server";

import api from "@/config/api";

export const getTotal = async ({
    user_id,
}: {
    user_id: number;
}) => {
    const response = await api(`/dashboard/totals?user_id=${user_id}`, {
        method: "GET",
        next: {
            tags: ["get-totals"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting totals values");
    }

    return response.json();
}
