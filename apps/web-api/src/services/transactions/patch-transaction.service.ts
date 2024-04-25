import supabase from "@/config/supabase";
import DeleteTransaction from "./delete-transaction.service";
import CreateTransaction from "./create-transaction.service";

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
    const { data: oldTransaction, error: errorOldTransaction } = await supabase.from("transactions").select("*").eq("id", id).single();

    if (errorOldTransaction) {
        console.log("error", errorOldTransaction);
        throw new Error(errorOldTransaction.message);
    }

    try {
        await DeleteTransaction({
            id
        });

        const newTransaction = await CreateTransaction({
            user_id: oldTransaction.user_id,
            wallet_id,
            card_id,
            category_id,
            value,
            description,
            type,
            transaction_date,
            created_at: oldTransaction.created_at
        });

        return newTransaction;

    } catch (error) {
        console.log("error", error);
        throw new Error(error?.message);
    }
}