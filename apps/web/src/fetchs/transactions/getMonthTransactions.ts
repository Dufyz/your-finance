"use server";

export const getMonthTransactions = async ({
    user_id
}: {
    user_id: number;
}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/transactions?user_id=${user_id}&tab=month`, {
        method: "GET",
        next: {
            tags: ["get-month-transactions"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }

    return response.json();
}
