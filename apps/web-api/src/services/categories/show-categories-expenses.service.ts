import supabase from "@/config/supabase";

interface IShowCategoriesExpensesService {
  user_id: number;
}

interface CategoryExpense {
  category_id: number;
  value: number;
}

export default async function ShowCategoriesExpensesService({
  user_id
}: IShowCategoriesExpensesService): Promise<CategoryExpense[]> {
  const { data: categories, error: categoriesError } = await supabase
    .from("goal_category")
    .select("category_id")
    .eq("user_id", user_id);

  if (categoriesError) {
    throw new Error("Error getting categories");
  }

  if (!categories) {
    return [];
  }

  const categoriesExpensesData = await Promise.all(
    categories.map(async (category) => {
      const { data: transactions, error: transactionsError } = await supabase
        .from("transactions")
        .select("value")
        .eq("user_id", user_id)
        .eq("type", "expense")
        .eq("category_id", category.category_id);

      if (transactionsError) {
        throw new Error(
          "Error getting transactions for category " + category.category_id
        );
      }

      return {
        category_id: category.category_id,
        value: transactions.reduce((acc, { value }) => acc + value, 0)
      };
    })
  );

  const categoriesExpenses = categoriesExpensesData.filter(
    (c) => c != null && typeof c.value === "number"
  );

  return categoriesExpenses;
}
