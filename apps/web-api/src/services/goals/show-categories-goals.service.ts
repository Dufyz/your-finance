import supabase from "@/config/supabase";

interface IShowCategoriesGoalsService {
    user_id: number;
}

export default async function ShowCategoriesGoals({ user_id }: IShowCategoriesGoalsService) {
    const { data, error } = await supabase.from("transactions").select("*").eq("user_id", user_id).single();

    if (error) {
        console.log("error", error);
        throw new Error(error.message);
    }

    return data;
}