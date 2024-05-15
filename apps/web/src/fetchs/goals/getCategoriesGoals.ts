"use server";

export const getCategoriesGoals = async ({
    user_id,
}: {
    user_id: number;
}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/goals/categories?user_id=${user_id}`, {
        method: "GET",
        next: {
            tags: ["get-categories-goals"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }


    return response.json();
}
