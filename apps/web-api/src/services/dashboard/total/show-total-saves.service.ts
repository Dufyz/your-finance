import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

interface IShowTotalSavesService {
  user_id: number;
  date_from?: string;
  date_to?: string;
}

export default async function ShowTotalSavesService({
  user_id,
  date_from,
  date_to
}: IShowTotalSavesService) {
  const isCalculatingPeriodically = date_from && date_to;

  if (isCalculatingPeriodically) {
    const { data } = await supabase
      .from("wallets")
      .select("current_balance")
      .eq("user_id", user_id)
      .eq("type", "saving")
      .gte("created_at", date_from)
      .lte("created_at", date_to);

    return {
      value:
        data?.reduce((acc, { current_balance }) => acc + current_balance, 0) ??
        0
    };
  }

  const { data: totalSavesData } = await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .eq("type", "saving");

  const totalSaves =
    totalSavesData?.reduce(
      (acc, { current_balance }) => acc + current_balance,
      0
    ) ?? 0;

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const { data: totalSavesLastMonthData } = await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .eq("type", "saving")
    .lte("created_at", lastMonth.toISOString());

  const totalSavesLastMonth =
    totalSavesLastMonthData?.reduce(
      (acc, { current_balance }) => acc + current_balance,
      0
    ) ?? 0;

  try {
    const percentageFromLastMonth = calculatePercentageChange(
      totalSavesLastMonth,
      totalSaves
    );

    return {
      value: totalSaves,
      percentage: percentageFromLastMonth
    };
  } catch (error) {
    return {
      value: totalSaves,
      percentage: undefined,
      absolute: totalSaves - totalSavesLastMonth
    };
  }
}
