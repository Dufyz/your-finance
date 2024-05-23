import supabase from "@/config/supabase";
import { setHours, setMinutes, setSeconds } from "date-fns";

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

  const formattedDateFrom = setSeconds(setMinutes(setHours(new Date(date_from), 0), 0), 0).toISOString();
  const formattedDateTo = setSeconds(setMinutes(setHours(new Date(date_to), 23), 59), 59).toISOString();

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user_id)
    .gte("transaction_date", formattedDateFrom)
    .lte("transaction_date", formattedDateTo)
    .order("transaction_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }

  return data;
}
