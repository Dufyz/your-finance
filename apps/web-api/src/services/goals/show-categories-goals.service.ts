import supabase from "@/config/supabase";

interface IShowCategoriesGoalsService {
    user_id: number;
}

export default async function ShowCategoriesGoals({ user_id }: IShowCategoriesGoalsService) {

    const { data, error } = await supabase.from("goal_category").select("*").eq("user_id", user_id);

    if (error) {
        throw new Error("Error getting categories goals");
    }

    return data;
}