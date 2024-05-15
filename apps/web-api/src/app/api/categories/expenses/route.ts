import ShowCategoriesExpenses from "@/services/categories/show-categories-expenses.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const user_id = Number(request.nextUrl.searchParams.get("user_id"));

        const getCategoriesExpenses = await ShowCategoriesExpenses({
            user_id
        });

        return NextResponse.json(getCategoriesExpenses, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, {
            status: 500
        });
    }
}