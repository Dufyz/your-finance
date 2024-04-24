import supabase from "@/config/supabase";

interface IShowCustomTransactionsService {
    user_id: number;
    date_from: Date;
    date_to: Date;
}

export default async function ShowCustomTransactions({ user_id, date_from, date_to }: IShowCustomTransactionsService) {
   const { data, error } = await supabase.from("transactions").select("*").eq("user_id", user_id).gte("transaction_date", date_from.toISOString()).lte("transaction_date", date_to.toISOString()).order("transaction_date", { ascending: false }).order("created_at", { ascending: false });

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}