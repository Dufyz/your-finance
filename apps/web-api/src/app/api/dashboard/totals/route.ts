import ShowTotalBalance from "@/services/dashboard/total/show-total-balance.service";
import ShowTotalExpenses from "@/services/dashboard/total/show-total-expenses.service";
import ShowTotalIncomes from "@/services/dashboard/total/show-total-incomes.service";
import ShowTotalSaves from "@/services/dashboard/total/show-total-saves.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user_id = Number(request.nextUrl.searchParams.get("user_id"));

    if (!user_id) {
        return NextResponse.json({
            message: "User ID is required",
        }, {
            status: 400,
        });
    }

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