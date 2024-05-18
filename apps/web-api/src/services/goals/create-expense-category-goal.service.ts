import supabase from "@/config/supabase";

interface ICreateExpenseCategoryGoalService {
    user_id: number;
    category_id: number;
    target_value: number;
}

export default async function CreateExpenseCategoryGoal({ user_id, category_id, target_value }: ICreateExpenseCategoryGoalService) {

    const {data: currentValueRaw} = await supabase.from("transactions").select("value").eq("type", "expense").eq("category_id", category_id).eq("user_id", user_id);
    const current_value = currentValueRaw?.reduce((acc, curr) => acc + curr.value, 0);


    const { data, error } = await supabase.from("goal_category").insert({
        user_id,
        category_id,
        target_value,
        current_value
    });

    if (error) {
        console.log(error)
        throw new Error("Error creating expense category goal");
    }

    return data;
}