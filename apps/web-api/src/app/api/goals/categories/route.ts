import CreateExpenseCategoryGoalService from "@/services/goals/create-expense-category-goal.service";
import ShowCategoriesGoalsService from "@/services/goals/show-categories-goals.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getCategoriesGoalsSchema = z.object({
  user_id: z.number()
});
export async function GET(request: NextRequest, context: any) {
  const reqUser = getUserFromRequest(request);

  const validation = getCategoriesGoalsSchema.safeParse({
    user_id: reqUser.user_id
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const { user_id } = validation.data;

  const categoriesGoals = await ShowCategoriesGoalsService({
    user_id
  });

  return NextResponse.json(categoriesGoals, {
    status: 200
  });
}

const postCategoriesGoalsSchema = z.object({
  user_id: z.number(),
  category_id: z.number(),
  target_value: z.number()
});
export async function POST(request: NextRequest) {
  const body = await request.json();

  const reqUser = getUserFromRequest(request);

  const validation = postCategoriesGoalsSchema.safeParse({
    user_id: reqUser.user_id,
    ...body
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const { user_id, category_id, target_value } = validation.data;

  const newExpenseCategoryGoal = await CreateExpenseCategoryGoalService({
    user_id,
    category_id,
    target_value
  });

  return NextResponse.json(newExpenseCategoryGoal, {
    status: 201
  });
}
