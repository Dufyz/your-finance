import supabase from "@/config/supabase";

interface IPatchTransactionService {
    id: number;
    wallet_id: number;
    card_id: number;
    category_id: number;
    value: number;
    description: string;
    type: string;
    transaction_date: Date;
}

export default async function PatchTransaction({ id, wallet_id, card_id, category_id, value, description, type, transaction_date }: IPatchTransactionService) {
    const { data, error } = await supabase.from("transactions").update({
        wallet_id,
        card_id,
        category_id,
        value,
        description,
        type,
        transaction_date
    }).eq("id", id);

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}