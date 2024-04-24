import supabase from "@/config/supabase";

interface ICreateTransactionService {
    user_id: number;
    wallet_id: number;
    category_id: number;
    value: number;
    description: string;
    type: string;
    transaction_date: Date;
}

export default async function CreateTransaction({ user_id, wallet_id, category_id, value, description, type, transaction_date }: ICreateTransactionService) {
    const { data, error } = await supabase.from("transactions").insert({
        user_id,
        wallet_id,
        category_id,
        value,
        description,
        type,
        transaction_date
    });

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}