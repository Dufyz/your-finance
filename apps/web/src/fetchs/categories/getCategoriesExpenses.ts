"use server";

export const getCategoriesExpenses = async ({
    user_id,
}: {
    user_id: number;
}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/categories/expenses/?user_id=${user_id}`, {
        method: "GET"
    });

    if (!response.ok) {
        throw new Error("Error getting categories expenses");
    }

    return response.json();
}
