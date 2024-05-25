import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

//TODO Melhorar a forma com que o Total Balance é calculado
interface IShowTotalBalanceService {
  user_id: number;
  date_from?: string;
  date_to?: string;
}

export default async function ShowTotalBalanceService({
  user_id,
  date_from,
  date_to
}: IShowTotalBalanceService) {
  const isCalculatingPeriodically = date_from && date_to;

  if (isCalculatingPeriodically) {
    const { data } = await supabase
      .from("wallets")
      .select("current_balance")
      .eq("user_id", user_id)
      .gte("created_at", date_from)
      .lte("created_at", date_to);

    return {
      value:
        data?.reduce((acc, { current_balance }) => acc + current_balance, 0) ??
        0
    };
  }

  const { data } = await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id);

  const totalSaves =
    data?.reduce((acc, { current_balance }) => acc + current_balance, 0) ?? 0;

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const { data: lasMonthBalance } = await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .lte("created_at", lastMonth.toISOString());

  const totalSavesLastMonth =
    lasMonthBalance?.reduce(
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
