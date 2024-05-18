import supabase from "@/config/supabase";

interface IPatchWalletService {
  id: number;
  bank_id: number;
  nickname: string;
  type: string;
  initial_balance: number;
  is_main: boolean;
}

export default async function PatchWalletService({
  id,
  bank_id,
  nickname,
  type,
  initial_balance,
  is_main
}: IPatchWalletService) {
  const { data: wallet, error: errorWallet } = await supabase
    .from("wallets")
    .select("*")
    .eq("id", id)
    .single();

  if (errorWallet) {
    console.log("errorWallet", errorWallet);
    throw new Error(errorWallet.message);
  }

  const newCurrentBalance =
    wallet.current_balance - wallet.initial_balance + initial_balance;

  const { data, error } = await supabase
    .from("wallets")
    .update({
      bank_id,
      nickname,
      type,
      initial_balance,
      current_balance: newCurrentBalance,
      is_main
    })
    .eq("id", id)
    .single();

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
