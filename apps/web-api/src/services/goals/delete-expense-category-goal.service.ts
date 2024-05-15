import supabase from "@/config/supabase";

interface IDeleteExpenseCategoryGoalService {
    id: number;
}

export default async function DeleteExpenseCategoryGoal({ id }: IDeleteExpenseCategoryGoalService) {

    const { data, error } = await supabase.from("goalcategory").delete().eq("id", id);

    if (error) {
        console.log(error)
        throw new Error("Error deleting expense category goal");
    }

    return data;
}