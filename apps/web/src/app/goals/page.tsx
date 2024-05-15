import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Suspense } from "react";
import ExpenseCategoryGoalCard from "./components/expense-category-goal-card";
import CreateExpenseCategoryGoal from "./components/create-expense-category-goal";
import ExpensesChart from "./components/expenses-chart";
import getUser from "@/fetchs/user/getUser";
import { getCategoriesGoals } from "@/fetchs/goals/getCategoriesGoals";
import { GoalCategory } from "@/types/GoalCategory";
import { getCategoriesExpenses } from "@/fetchs/categories/getCategoriesExpenses";

export default async function GoalsPage() {
  const user = await getUser();

  const categoriesGoals = await getCategoriesGoals({
    user_id: user.id
  }) || [];

  const categoriesExpenses = await getCategoriesExpenses({
    user_id: user.id
  }) || [];

  return (
    <LeftNavbarLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col ">
          <main className="flex w-ful px-6 flex-col items-start justify-start gap-8">
            <div className="w-full flex flex-col items-start justify-start gap-6">
              <div className="w-full">
                {/* <div>
                  <DateRangePicker />
                </div> */}
              </div>
              {/* <div className="w-full flex flex-col gap-4 items-center justify-start">
                <div className="w-full grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
                  <SavingsGoalCard />
                  <SavingsChart />
                </div>
              </div> */}
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-6">
              <div className="w-full flex item-center justify-between gap-6">
                <div>
                  <h1 className="text-2xl font-semibold text-green-700">Expenses Goals by category</h1>
                </div>
                <div>
                  <CreateExpenseCategoryGoal user={user} />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 items-center justify-start">
                <div className="w-full grid gap-4 grid-cols-4">
                  <ExpensesChart categoriesGoals={categoriesGoals} categoriesExpenses={categoriesExpenses} />
                  {categoriesGoals?.map((goalCategory: GoalCategory, index: number) => (
                    <ExpenseCategoryGoalCard key={index} goalCategory={goalCategory} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Suspense>
    </LeftNavbarLayout>
  );
}
