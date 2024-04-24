"use server";

export const getWeekTransactions = async ({
    user_id
}: {
    user_id: number;
}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/transactions?user_id=${user_id}?tab=week`, {
        method: "GET",
        next: {
            tags: ["get-week-transactions"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }

    return response.json();
}
