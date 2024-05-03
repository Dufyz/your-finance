"use server";

export const getCustomTransactions = async ({
    user_id,
    date_from,
    date_to
}: {
    user_id: number;
    date_from: Date | undefined;
    date_to: Date | undefined;
}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/transactions?user_id=${user_id}&tab=custom&date_from=${date_from}&date_to=${date_to}`, {
        method: "GET",
        next: {
            tags: ["get-custom-transactions"]
        }
    });

    if (!response.ok) {
        throw new Error("Error getting transactions");
    }

    return response.json();
}