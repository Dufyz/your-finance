import supabase from "@/config/supabase";

interface IDeleteTransactionService {
    id: number;
}

export default async function DeleteTransaction({ id }: IDeleteTransactionService) {
    const {  error } = await supabase.from("transactions").delete().eq("id", id);

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }
}