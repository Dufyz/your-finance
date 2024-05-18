"use server";

import apiServer from "@/config/apiServer";

export const getCategoriesExpenses = async ({
    user_id,
}: {
    user_id: number;
}) => {
    const response = await apiServer(`/categories/expenses`, {
        method: "GET",
        next: {
            tags: [`get-categories-expenses-${user_id}`]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting categories expenses");
    }

    return response.json();
}
