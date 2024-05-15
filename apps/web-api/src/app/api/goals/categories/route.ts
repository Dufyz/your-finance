import CreateExpenseCategoryGoal from "@/services/goals/create-expense-category-goal.service";
import ShowCategoriesGoals from "@/services/goals/show-categories-goals.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user_id = Number(request.nextUrl.searchParams.get("user_id"));

    const categoriesGoals = await ShowCategoriesGoals({
        user_id
    });

    return NextResponse.json(categoriesGoals, {
        status: 200
    })
}

export async function POST(request: NextRequest) {
    const { user_id, category_id, target_value } = await request.json();

    const newExpenseCategoryGoal = await CreateExpenseCategoryGoal({
        user_id,
        category_id,
        target_value
    });

    return NextResponse.json(newExpenseCategoryGoal, {
        status: 201
    });
}