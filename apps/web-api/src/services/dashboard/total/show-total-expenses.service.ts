import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

interface IShowTotalExpensesService {
  user_id: number;
  date_from?: string;
  date_to?: string;
}

export default async function ShowTotalExpensesService({
  user_id,
  date_from,
  date_to
}: IShowTotalExpensesService) {
  const isCalculatingPeriodically = date_from && date_to;

  if (isCalculatingPeriodically) {
    const { data } = await supabase
      .from("transactions")
      .select("value")
      .eq("user_id", user_id)
      .eq("type", "expense")
      .gte("transaction_date", date_from)
      .lte("transaction_date", date_to);

    return {
      value: data?.reduce((acc, { value }) => acc + value, 0) ?? 0
    };
  }

  const { data } = await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "expense");

  const totalExpenses = data?.reduce((acc, { value }) => acc + value, 0) ?? 0;

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const { data: expensesLastMonth } = await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "expense")
    .lte("created_at", lastMonth.toISOString());

  const totalExpensesLastMonth =
    expensesLastMonth?.reduce((acc, { value }) => acc + value, 0) ?? 0;

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
      absolute: totalExpenses - totalExpensesLastMonth
    };
  }
}
