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
    const categoryName = transactionCategories.find(category => category.id === goalCategory.category_id)?.name || " ";
    const categoryIcon = transactionCategories.find(category => category.id === goalCategory.category_id)?.icon || " ";

    return (
        <div className="bg-white shadow-md border w-full rounded-md h-28 flex items-center justify-between gap-6 p-6">
            <div className="flex items-center justify-center gap-6">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                    {renderTablerIcon({
                        icon: categoryIcon,
                        size: 24,
                        color: "#15803d"
                    })}
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                    <div>
                        <h1 className="text-lg text-muted-foreground">{categoryName}</h1>
                    </div>
                    <div>
                        <FormatMoney value={goalCategory.target_value} currency="USD" className="text-xl text-black font-semibold" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <EditExpenseCategoryGoal goalCategory={goalCategory} />
                <DeleteExpenseCategoryGoal goalCategory={goalCategory} />
            </div>
        </div>
    )
}