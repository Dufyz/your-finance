import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

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

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  let totalExpensesLastMonth = 0;
  await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "expense")
    .lte("created_at", lastMonth.toISOString())
    .then(({ data }) => {
      if (data) {
        totalExpensesLastMonth = data.reduce(
          (acc, { value }) => acc + value,
          0
        );
      }
    });

  try {
    const percentageFromLastMonth = calculatePercentageChange(
      totalExpensesLastMonth,
      totalExpenses
    );

    return {
      value: totalExpenses,
      percentage: percentageFromLastMonth
    };
  } catch (error) {
    return {
      value: totalExpenses,
      percentage: undefined,
      absolute: totalExpenses - totalExpensesLastMonth
    };
  }
}
