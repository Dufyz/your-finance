"use server";

import { revalidateTag } from "next/cache";
import api from "../../config/api";

export const deleteExpenseCategoryGoal = async ({
    id,
}: {
    id: number;
}) => {
    const response = await api(`/goals/categories/${id}`, {
        method: "DELETE",
    });
    
    if (!response.ok) {
        throw new Error("Error deleteing expense category goal");
    }

    revalidateTag("get-categories-goals");

    return response.json();
}
