import supabase from "@/config/supabase";

interface ICreateWalletService {
    user_id: number;
    bank_id: number;
    nickname: string;
    type: string;
    initial_balance: number;
    is_main: boolean;
}

export default async function CreateWallet({ user_id, bank_id, nickname, type, initial_balance, is_main }: ICreateWalletService) {
    const { data, error } = await supabase.from("wallets").insert({
        user_id,
        bank_id,
        nickname,
        type,
        initial_balance,
        current_balance: initial_balance,
        is_main
    }).single();

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}