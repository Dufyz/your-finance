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
  let totalSaves = 0;
  let query = supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id);

  if (date_from) {
    query = query.gte("created_at", date_from);
  }
  if (date_to) {
    query = query.lte("created_at", date_to);
  }

  await query.then(({ data }) => {
    if (data) {
      totalSaves = data.reduce(
        (acc, { current_balance }) => acc + current_balance,
        0
      );
    }
  });

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  let totalSavesLastMonth = 0;
  let lastMonthQuery = supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .lte("created_at", lastMonth.toISOString());

  await lastMonthQuery.then(({ data }) => {
    if (data) {
      totalSavesLastMonth = data.reduce(
        (acc, { current_balance }) => acc + current_balance,
        0
      );
    }
  });

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
