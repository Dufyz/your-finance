import supabase from "@/config/supabase";

interface IShowLastTransactionsService {
  user_id: number;
}

export default async function ShowLastTransactionsService({
  user_id
}: IShowLastTransactionsService) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user_id)
    .order("transaction_date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
