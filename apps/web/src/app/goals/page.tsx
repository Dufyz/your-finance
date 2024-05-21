import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Suspense } from "react";
import ExpenseCategoryGoalCard from "./components/expense-category-goal-card";
import CreateExpenseCategoryGoal from "./components/create-expense-category-goal";
import ExpensesChart from "./components/expenses-chart";
import getUser from "@/fetchers/user/getUser";
import { getCategoriesGoals } from "@/fetchers/goals/getCategoriesGoals";
import { GoalCategory } from "@/types/GoalCategory";
import { getCategoriesExpenses } from "@/fetchers/categories/getCategoriesExpenses";
import SavingsGoalCard from "./components/savings-goal-card";
import SavingsChart from "./components/savings-chart";

export default async function GoalsPage() {
  const user = await getUser();

  const categoriesGoals =
    (await getCategoriesGoals({
      user_id: user.id
    })) || [];

  const categoriesExpenses =
    (await getCategoriesExpenses({
      user_id: user.id
    })) || [];

  return (
    <LeftNavbarLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col ">
          <main className="w-ful flex flex-col items-start justify-start gap-8 px-6">
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="w-full">
                {/* <div>
                  <DateRangePicker />
                </div> */}
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4">
                <div className="grid w-full gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
                  {/* <SavingsGoalCard /> */}
                  {/* <SavingsChart /> */}
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="item-center flex w-full justify-between gap-6">
                <div>
                  <h1 className="text-2xl font-semibold text-green-700">
                    Expenses Goals by category
                  </h1>
                </div>
                <div>
                  <CreateExpenseCategoryGoal user={user} />
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4">
                <div className="grid w-full grid-cols-4 gap-4">
                  {categoriesGoals?.map(
                    (goalCategory: GoalCategory, index: number) => (
                      <ExpenseCategoryGoalCard
                        key={index}
                        goalCategory={goalCategory}
                      />
                    )
                  )}
                  <ExpensesChart
                    categoriesGoals={categoriesGoals}
                    categoriesExpenses={categoriesExpenses}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </Suspense>
    </LeftNavbarLayout>
  );
}
