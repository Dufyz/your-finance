import supabase from "@/config/supabase";

interface IShowMonthTransactionsService {
  user_id: number;
}

export default async function ShowMonthTransactionsService({
  user_id
}: IShowMonthTransactionsService) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user_id)
    .gte(
      "transaction_date",
      new Date(new Date().setDate(new Date().getDate() - 30)).toISOString()
    )
    .order("transaction_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
