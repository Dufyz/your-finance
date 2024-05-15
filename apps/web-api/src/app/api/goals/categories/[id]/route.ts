import DeleteExpenseCategoryGoal from "@/services/goals/delete-expense-category-goal.service";
import UpdateExpenseCategoryGoal from "@/services/goals/update-expense-category-goal.service";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, context: any) {
    const { id } = context.params;

    await DeleteExpenseCategoryGoal({
        id: id
    });

    return NextResponse.json(id, {
        status: 200
    });
}

export async function PUT(request: NextRequest, context: any) {
    const { id } = context.params;

    const { category_id, target_value } = await request.json();

    const updatedExpenseCategoryGoal = await UpdateExpenseCategoryGoal({
        id: id,
        category_id: category_id,
        target_value: target_value
    })

    return NextResponse.json(updatedExpenseCategoryGoal, {
        status: 200
    });
}
