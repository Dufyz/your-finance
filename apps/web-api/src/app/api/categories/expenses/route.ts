import ShowCategoriesExpensesService from "@/services/categories/show-categories-expenses.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getCategoriesExpensesSchema = z.object({
  user_id: z.number()
});
export async function GET(request: NextRequest, context: any) {
  const reqUser = getUserFromRequest(request);

  const validation = getCategoriesExpensesSchema.safeParse({
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

  try {
    const getCategoriesExpenses = await ShowCategoriesExpensesService({
      user_id
    });

    return NextResponse.json(getCategoriesExpenses, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 500
      }
    );
  }
}
