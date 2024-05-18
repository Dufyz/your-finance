import supabase from "@/config/supabase";

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

  return {
    value: totalIncomes,
    percentage: 0
  };
}
