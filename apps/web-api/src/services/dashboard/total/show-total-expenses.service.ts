import supabase from "@/config/supabase";

interface IShowTotalExpensesService {
  user_id: number;
}

export default async function ShowTotalExpensesService({
  user_id
}: IShowTotalExpensesService) {
  let totalExpenses = 0;

  await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "expense")
    .then(({ data }) => {
      if (data) {
        totalExpenses = data.reduce((acc, { value }) => acc + value, 0);
      }
    });

  return {
    value: totalExpenses,
    percentage: 0
  };
}
