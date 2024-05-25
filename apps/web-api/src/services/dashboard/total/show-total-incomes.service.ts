import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

interface IShowTotalIncomesService {
  user_id: number;
  date_from?: string;
  date_to?: string;
}

export default async function ShowTotalIncomesService({
  user_id,
  date_from,
  date_to
}: IShowTotalIncomesService) {
  const isCalculatingPeriodically = date_from && date_to;

  if (isCalculatingPeriodically) {
    const { data } = await supabase
      .from("transactions")
      .select("value")
      .eq("user_id", user_id)
      .eq("type", "income")
      .gte("transaction_date", date_from)
      .lte("transaction_date", date_to);

    return {
      value: data?.reduce((acc, { value }) => acc + value, 0) ?? 0
    };
  }

  const { data: totalIncomesData } = await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "income");

  const totalIncomes =
    totalIncomesData?.reduce((acc, { value }) => acc + value, 0) ?? 0;

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const { data: totalIncomesLastMonthData } = await supabase
    .from("transactions")
    .select("value")
    .eq("user_id", user_id)
    .eq("type", "income")
    .lte("created_at", lastMonth.toISOString());

  const totalIncomesLastMonth =
    totalIncomesLastMonthData?.reduce((acc, { value }) => acc + value, 0) ?? 0;

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
