import { z } from "zod";

import ShowTotalBalance from "@/services/dashboard/total/show-total-balance.service";
import ShowTotalExpenses from "@/services/dashboard/total/show-total-expenses.service";
import ShowTotalIncomes from "@/services/dashboard/total/show-total-incomes.service";
import ShowTotalSaves from "@/services/dashboard/total/show-total-saves.service";
import { NextRequest, NextResponse } from "next/server";
import getUserFromRequest from "@/utils/getUserFromRequest";

const getUserTotalsSchema = z.object({
    user_id: z.number(),
});
export async function GET(request: NextRequest, context: any) {
    const reqUser = getUserFromRequest(request);

    const validation = getUserTotalsSchema.safeParse({
        user_id: reqUser.user_id
    });

    if (!validation.success) {
        return NextResponse.json({ error: validation.error }, {
            status: 400
        });
    }

    const { user_id } = validation.data;

    const totalBalance = await ShowTotalBalance({ user_id });
    const totalSaves = await ShowTotalSaves({ user_id });
    const totalIncomes = await ShowTotalIncomes({ user_id });
    const totalExpenses = await ShowTotalExpenses({ user_id });
    const totalInvoices = {
        value: 0,
        percentage: 0,
    };

    return NextResponse.json({
        totalBalance,
        totalSaves,
        totalIncomes,
        totalExpenses,
        totalInvoices,
    });
}