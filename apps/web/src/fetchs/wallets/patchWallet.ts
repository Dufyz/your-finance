"use server";

import { revalidateTag } from "next/cache";

export default async function patchWallet({
    id,
    bank_id,
    nickname,
    type,
    initial_balance,
    is_main
}: {
    id: number;
    bank_id: number;
    nickname: string;
    type: string;
    initial_balance: number;
    is_main: boolean;
}) {
    const body = JSON.stringify({
        id,
        bank_id,
        nickname,
        type,
        initial_balance,
        is_main
    })

    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/wallets`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body,
    });

    revalidateTag("get-wallets")

    if (!response.ok) {
        throw new Error("Error updating wallet");
    }

    return await response.json();
}