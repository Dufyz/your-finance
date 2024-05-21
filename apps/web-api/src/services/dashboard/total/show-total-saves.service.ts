import supabase from "@/config/supabase";
import calculatePercentageChange from "@/utils/calcutate-percentage-change";

interface IShowTotalSavesService {
  user_id: number;
}

export default async function ShowTotalSavesService({
  user_id
}: IShowTotalSavesService) {
  let totalSaves = 0;

  await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .eq("type", "saving")
    .then(({ data }) => {
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
  await supabase
    .from("wallets")
    .select("current_balance")
    .eq("user_id", user_id)
    .eq("type", "saving")
    .lte("created_at", lastMonth.toISOString())
    .then(({ data }) => {
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
