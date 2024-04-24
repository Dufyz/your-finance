import supabase from "@/config/supabase";

interface IShowWeekTransactionsService {
    user_id: number;
}

export default async function ShowWeekTransactions({ user_id }: IShowWeekTransactionsService) {
    const { data, error } = await supabase.from("transactions").select("*").eq("user_id", user_id).gte("transaction_date", new Date(new Date().setDate(new Date().getDate() - 7)).toISOString()).order("transaction_date", { ascending: false }).order("created_at", { ascending: false });

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}