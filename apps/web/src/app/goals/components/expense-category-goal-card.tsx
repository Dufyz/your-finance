import FormatMoney from "@/utils/format-money";
import { IconHome, IconTrash } from "@tabler/icons-react";
import EditExpenseCategoryGoal from "./edit-expense-category-goal";
import { GoalCategory } from "@/types/GoalCategory";
import { transactionCategories } from "@/data/transaction-categories";
import renderTablerIcon from "@/utils/render-tabler-icon";
import { DeleteExpenseCategoryGoal } from "./delete-expense-category-goal";

export default function ExpenseCategoryGoalCard({
  goalCategory
}: {
  goalCategory: GoalCategory;
}) {
  const categoryName =
    transactionCategories.find(
      (category) => category.id === goalCategory.category_id
    )?.name || " ";
  const categoryIcon =
    transactionCategories.find(
      (category) => category.id === goalCategory.category_id
    )?.icon || " ";

  return (
    <div className="flex h-28 w-full items-center justify-between gap-6 rounded-md border bg-white p-6 shadow-md">
      <div className="flex items-center justify-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
          {renderTablerIcon({
            icon: categoryIcon,
            size: 24,
            color: "#15803d"
          })}
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <div>
            <h1 className="text-muted-foreground text-lg">{categoryName}</h1>
          </div>
          <div>
            <FormatMoney
              value={goalCategory.target_value}
              currency="USD"
              className="text-xl font-semibold text-black"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <EditExpenseCategoryGoal goalCategory={goalCategory} />
        <DeleteExpenseCategoryGoal goalCategory={goalCategory} />
      </div>
    </div>
  );
}
