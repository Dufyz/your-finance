import ShowTotalBalanceService from "@/services/dashboard/total/show-total-balance.service";
import ShowTotalExpensesService from "@/services/dashboard/total/show-total-expenses.service";
import ShowTotalIncomesService from "@/services/dashboard/total/show-total-incomes.service";
import ShowTotalSavesService from "@/services/dashboard/total/show-total-saves.service";
import getUserFromRequest from "@/utils/getUserFromRequest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const getUserTotalsSchema = z.object({
  user_id: z.number(),
  date_from: z.string().optional(),
  date_to: z.string().optional()
});
export async function GET(request: NextRequest) {
  const reqUser = getUserFromRequest(request);
  const query = {
    date_from: request.nextUrl.searchParams.get("date_from"),
    date_to: request.nextUrl.searchParams.get("date_to")
  }

  const validation = getUserTotalsSchema.safeParse({
    user_id: reqUser.user_id,
    ...query
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      {
        status: 400
      }
    );
  }

  const { user_id, date_from, date_to } = validation.data;

  const totalBalance = await ShowTotalBalanceService({ user_id, date_from, date_to });
  const totalSaves = await ShowTotalSavesService({ user_id, date_from, date_to });
  const totalIncomes = await ShowTotalIncomesService({ user_id, date_from, date_to });
  const totalExpenses = await ShowTotalExpensesService({ user_id, date_from, date_to });
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
