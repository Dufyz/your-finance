import FormatMoney from "@/utils/format-money";
import { IconHome, IconPencil } from "@tabler/icons-react";
import EditExpenseCategoryGoal from "./edit-expense-category-goal";

export default function ExpenseCategoryGoalCard() {
    return (
        <div className="bg-white shadow-md border w-full rounded-md h-28 flex items-center justify-between gap-6 p-6">
            <div className="flex items-center justify-center gap-6">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                    <IconHome size={24} color="#15803d" />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                    <div>
                        <h1 className="text-lg text-muted-foreground">Entertraiment</h1>
                    </div>
                    <div>
                        <FormatMoney value={250} currency="USD" className="text-xl text-black font-semibold" />
                    </div>
                </div>
            </div>
            <div>
                <EditExpenseCategoryGoal />
            </div>
        </div>
    )
}