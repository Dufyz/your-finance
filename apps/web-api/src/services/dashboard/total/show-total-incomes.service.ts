import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

interface IShowTotalIncomesService {
  user_id: number;
}

export default async function ShowTotalIncomesService({
  user_id
}: IShowTotalIncomesService) {
  let totalIncomes = 0;

  await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "income")
    .then(({ data }) => {
      if (data) {
        totalIncomes = data.reduce((acc, { value }) => acc + value, 0);
      }
    });

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  let totalIncomesLastMonth = 0;
  await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "income")
    .lte("created_at", lastMonth.toISOString())
    .then(({ data }) => {
      if (data) {
        totalIncomesLastMonth = data.reduce((acc, { value }) => acc + value, 0);
      }
    });

  try {
    const percentageFromLastMonth = calculatePercentageChange(
      totalIncomesLastMonth,
      totalIncomes
    );

    return {
      value: totalIncomes,
      percentage: percentageFromLastMonth
    };
  } catch (error) {
    return {
      value: totalIncomes,
      percentage: undefined,
      absolute: totalIncomes - totalIncomesLastMonth
    };
  }
}
