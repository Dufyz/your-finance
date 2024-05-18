import ShowTotalBalanceService from "@/services/dashboard/total/show-total-balance.service";
import ShowTotalExpensesService from "@/services/dashboard/total/show-total-expenses.service";
import ShowTotalIncomesService from "@/services/dashboard/total/show-total-incomes.service";
import ShowTotalSavesService from "@/services/dashboard/total/show-total-saves.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getUserTotalsSchema = z.object({
  user_id: z.number()
});
export async function GET(request: NextRequest, context: any) {
  const reqUser = getUserFromRequest(request);

  const validation = getUserTotalsSchema.safeParse({
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

  const totalBalance = await ShowTotalBalanceService({ user_id });
  const totalSaves = await ShowTotalSavesService({ user_id });
  const totalIncomes = await ShowTotalIncomesService({ user_id });
  const totalExpenses = await ShowTotalExpensesService({ user_id });
  const totalInvoices = {
    value: 0,
    percentage: 0
  };

  return NextResponse.json({
    totalBalance,
    totalSaves,
    totalIncomes,
    totalExpenses,
    totalInvoices
  });
}
