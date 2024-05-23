import supabase from "@/config/supabase";
import { setHours, setMinutes, setSeconds } from "date-fns";

interface ICreateTransactionService {
  user_id: number;
  wallet_id?: number;
  card_id?: number;
  category_id: number;
  value: number;
  description: string;
  type: string;
  transaction_date: string;
  created_at?: Date;
}

export default async function CreateTransactionService({
  user_id,
  wallet_id,
  card_id,
  category_id,
  value,
  description,
  type,
  transaction_date,
  created_at
}: ICreateTransactionService) {
  const isIncome = type === "income";

  const formattedTransactionDate = setSeconds(setMinutes(setHours(new Date(transaction_date), 0), 0), 0).toISOString();

  const { data, error } = await supabase.from("transactions").insert({
    user_id,
    wallet_id,
    category_id,
    value,
    description,
    type,
    transaction_date: formattedTransactionDate,
    created_at: created_at || new Date()
  });

  const { data: walletData, error: walletError } = await supabase
    .from("wallets")
    .select("current_balance")
    .eq("id", wallet_id)
    .single();

  if (walletError) {
    console.log("error", walletError);
    throw new Error(walletError.message);
  }

  if (isIncome) {
    const current_balance = walletData.current_balance + value;

    await supabase
      .from("wallets")
      .update({ current_balance })
      .eq("id", wallet_id);
  }

  if (!isIncome) {
    const current_balance = walletData.current_balance - value;

    await supabase
      .from("wallets")
      .update({ current_balance })
      .eq("id", wallet_id);
  }

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
