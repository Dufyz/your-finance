import ShowCategoriesGoals from "@/services/goals/show-categories-goals.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user_id = Number(request.nextUrl.searchParams.get("user_id"));

    const categoriesGoals = ShowCategoriesGoals({
        user_id
    });

    return NextResponse.json(categoriesGoals, {
        status: 200
    })

}