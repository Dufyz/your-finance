import supabase from "@/config/supabase";

interface IUpdateExpenseCategoryGoalService {
    id: number;
    category_id: number;
    target_value: number;
}

export default async function UpdateExpenseCategoryGoal({ id, category_id, target_value }: IUpdateExpenseCategoryGoalService) {
    const { data, error } = await supabase.from("goal_category").update({
        category_id: category_id,
        target_value: target_value
    }).eq("id", id).single();

    if (error) {
        console.log(error)
        throw new Error("Error deleting expense category goal");
    }

    return data;
}