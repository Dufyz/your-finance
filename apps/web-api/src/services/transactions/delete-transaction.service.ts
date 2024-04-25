import supabase from "@/config/supabase";

interface IDeleteTransactionService {
    id: number;
}

export default async function DeleteTransaction({ id }: IDeleteTransactionService) {
    const {data: transaction, error: errorTransactions} = await supabase.from("transactions").select("*").eq("id", id).single();

    if (errorTransactions) {
        console.log("error", errorTransactions);
        throw new Error(errorTransactions.message);
    }

   const isWallet = transaction.wallet_id !== null;

   if(isWallet) {
        const {data: wallet, error: errorWallet} = await supabase.from("wallets").select("*").eq("id", transaction.wallet_id).single();

        if (errorWallet) {
            console.log("error", errorWallet);
            throw new Error(errorWallet.message);
        }

        const current_balance = transaction.type === "income" ? wallet.current_balance - transaction.value : wallet.current_balance + transaction.value;

        const { error: updateError } = await supabase.from("wallets").update({ current_balance }).eq("id", transaction.wallet_id);

        if (updateError) {
            console.log("error", updateError);
            throw new Error(updateError.message);
        }
   }

    const { error: deleteError } = await supabase.from("transactions").delete().eq("id", id);

    if (deleteError) {
        console.log("error", deleteError);
        throw new Error(deleteError.message);
    }
}