"use server";

import { revalidateTag } from "next/cache";

export const putExpenseCategoryGoal = async ({
    id,
    category_id,
    target_value
}: {
    id: number;
    category_id: number;
    target_value: number;
}) => {
    const body = JSON.stringify({
        category_id,
        target_value
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/goals/categories/${id}`, {
        body,
        method: "PUT",
    });

    if (!response.ok) {
        throw new Error("Error updating expense category goal");
    }

    revalidateTag("get-categories-goals");

    return response.json();
}
