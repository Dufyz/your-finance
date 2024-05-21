import supabase from "@/config/supabase";

interface IShowCustomTransactionsService {
  user_id: number;
  date_from: string;
  date_to: string;
}

export default async function ShowCustomTransactionsService({
  user_id,
  date_from,
  date_to
}: IShowCustomTransactionsService) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user_id)
    .gte("transaction_date", date_from)
    .lte("transaction_date", date_to)
    .order("transaction_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
