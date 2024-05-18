import supabase from "@/config/supabase";

interface IShowYearTransactionsService {
  user_id: number;
}

export default async function ShowYearTransactionsService({
  user_id
}: IShowYearTransactionsService) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user_id)
    .gte(
      "transaction_date",
      new Date(new Date().setDate(new Date().getDate() - 365)).toISOString()
    )
    .order("transaction_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
