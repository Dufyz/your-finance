"use server";

import { revalidateTag } from "next/cache";

export const deleteExpenseCategoryGoal = async ({
    id,
}: {
    id: number;
}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/goals/categories/${id}`, {
        method: "DELETE",
    });
    
    if (!response.ok) {
        throw new Error("Error deleteing expense category goal");
    }

    revalidateTag("get-categories-goals");

    return response.json();
}
