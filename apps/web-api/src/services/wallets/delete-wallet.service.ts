import supabase from "@/config/supabase";

interface IDeleteWalletService {
  id: number;
}

export default async function DeleteWalletService({
  id
}: IDeleteWalletService) {
  const { error: transactionsError } = await supabase
    .from("transactions")
    .delete()
    .eq("wallet_id", id);

  if (transactionsError) {
    console.log("error", transactionsError.message);
    throw new Error(transactionsError.message);
  }

  const { error } = await supabase.from("wallets").delete().eq("id", id);

  if (error) {
    console.log("error", error.message);
    throw new Error(error.message);
  }
}
