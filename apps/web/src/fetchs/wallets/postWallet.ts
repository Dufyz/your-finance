"use server";

import { revalidateTag } from "next/cache";

export const postWallet = async ({ user_id, bank_id, nickname, type, initial_balance, is_main }: {
    user_id: number;
    bank_id: number;
    nickname: string;
    type: string;
    initial_balance: number;
    is_main: boolean;
}) => {
    const body = JSON.stringify({
        user_id,
        bank_id,
        nickname,
        type,
        initial_balance,
        is_main
    })

    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/api/wallets`, {
        method: "POST",
        body,
    });

    revalidateTag("get-wallets")

    if (!response.ok) {
        throw new Error("Error creating wallet");
    }

    return response.json();
}